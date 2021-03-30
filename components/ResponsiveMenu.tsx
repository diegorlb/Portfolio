import { FunctionComponent, useState, useMemo } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import useDimensions from '../hooks/useDimensions'
import { NavbarLinks } from '../data/NavbarLinks'

const ResponsiveMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LinkContainer = styled.div`
  & > a {
    color: white;  
    font-size: 20px;
    font-weight: ${theme('fonts.weight.regular')};
    font-family: ${theme('fonts.type.Grotesk')};

    &:link, &:visited, &:active {
      color: white;
      text-decoration: none;
    }
  }
`

const DesktopLinkContainer = styled(LinkContainer)`
  margin: 0 16px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const MobileLinkContainer = styled(LinkContainer)`
  opacity: 0;
  text-align: right;
  margin-right: 32px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`

const MobileButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const MobileLinksContainer = styled(motion.div)`
  display: none;
  position: absolute;
  width: 100%;
  height: auto;
  top: 64px;
  left: 0;
  z-index: 1;
`

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