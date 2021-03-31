import { FunctionComponent, useState, useMemo } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import useDimensions from '../hooks/useDimensions'
import { NavbarLinks } from '../data/NavbarLinks'
import {
  ResponsiveMenuContainer,
  DesktopLinkContainer,
  MobileLinkContainer,
  MobileButtonContainer,
  MobileLinksContainer,
} from './styled/ResponsiveMenu.styled'

const MobileLinksContainerAnimation = {
  visible: {
    display: 'block',
  },
  hidden: (length: number) => ({
    display: 'none',
    transition: {
      delay: length * 0.15,
    },
  })
}

const MobileLinksAnimation = {
  visible: ({ index }) => ({
    opacity: 1,
    transition: {
      delay: index * 0.25,
    },
  }),
  hidden: ({ index, length }) => ({
    opacity: 0,
    transition: {
      delay: (length - index) * 0.15,
    },
  })
}

export const ResponsiveMenu: FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false)
  const { width } = useDimensions()

  const MobileButton = useMemo(() => (
    <MobileButtonContainer onClick={() => setActive(prev => !prev)}>
      <FontAwesomeIcon size={'2x'} color={'white'} icon={active ? faTimes : faBars} />
    </MobileButtonContainer>
  ), [active])

  const MobileLinks = useMemo(() => (
    <MobileLinksContainer
      variants={MobileLinksContainerAnimation}
      animate={active ? 'visible' : 'hidden'}
      custom={NavbarLinks.length + 1}>
      {NavbarLinks.map(({ key, path }, index, { length }) => {
        return (
          <MobileLinkContainer
            as={motion.div}
            key={index}
            variants={MobileLinksAnimation}
            animate={active ? 'visible' : 'hidden'}
            custom={{ index, length }}>
            <a href={path} onClick={() => setActive(false)}>{key}</a>
          </MobileLinkContainer>
        )
      })}
    </MobileLinksContainer>
  ), [active])

  const LinksWrapper = useMemo(() => NavbarLinks.map(({ key, path }, index) => {
    return (
      <DesktopLinkContainer key={index}>
        <a href={path}>{key}</a>
      </DesktopLinkContainer>
    )
  }), [])

  return (
    <>
      <ResponsiveMenuContainer>
        {width < 640 ? MobileButton : LinksWrapper}
        {MobileLinks}
      </ResponsiveMenuContainer>
    </>
  )
}