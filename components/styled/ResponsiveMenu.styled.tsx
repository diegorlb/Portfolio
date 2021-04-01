import styled from 'styled-components'
import { theme } from 'styled-tools'
import { motion } from 'framer-motion'

export const ResponsiveMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const DesktopLinkContainer = styled.div`
  margin: 0 16px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const MobileLinkContainer = styled.div`
  opacity: 0;
  text-align: right;
  margin-right: 32px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const LinkWrapper = styled.a`
  color: white;  
  font-size: 20px;
  font-weight: ${theme('fonts.weight.regular')};
  font-family: ${theme('fonts.type.Grotesk')};

  &:link, &:visited, &:active {
    color: white;
    text-decoration: none;
  }
`

export const MobileButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const MobileLinksContainer = styled(motion.div)`
  display: none;
  position: absolute;
  width: 100%;
  height: auto;
  top: 64px;
  left: 0;
  z-index: 1;
`