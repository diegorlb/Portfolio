import { FunctionComponent, useState, useMemo } from 'react'

import Link from 'next/link'

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
  LinkWrapper,
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
  const { isMobile } = useDimensions()

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
            <Link href={path} passHref>
              <LinkWrapper onClick={() => setActive(false)}>{key}</LinkWrapper>
            </Link>
          </MobileLinkContainer>
        )
      })}
    </MobileLinksContainer>
  ), [active])

  const LinksWrapper = useMemo(() => NavbarLinks.map(({ key, path }, index) => {
    return (
      <DesktopLinkContainer key={index}>
        <Link href={path} passHref>
          <LinkWrapper>{key}</LinkWrapper>
        </Link>
      </DesktopLinkContainer>
    )
  }), [])
  
  return (
    <>
      <ResponsiveMenuContainer>
        {isMobile ? MobileButton : LinksWrapper}
        {MobileLinks}
      </ResponsiveMenuContainer>
    </>
  )
}