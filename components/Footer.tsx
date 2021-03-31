import React, { FunctionComponent } from 'react'

import { FooterContainer, FooterText } from './styled/Footer.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export const Footer: FunctionComponent = () => {
  const Coffee = (<FontAwesomeIcon icon={faCoffee} />)
  const Heart = (<FontAwesomeIcon icon={faHeart} />)

  return (
    <FooterContainer>
      <FooterText>Made with lots of {Coffee} and {Heart}</FooterText>
      <FooterText>&copy; 2021 Diego Rodríguez</FooterText>
    </FooterContainer>
  )
}