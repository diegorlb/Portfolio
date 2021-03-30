import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const FooterContainer = styled.div`
  width: 100%;
  height: 42px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  margin: 0;
  color: white;  
  font-size: 10px;
  font-weight: ${theme('fonts.weight.light')};
  font-family: ${theme('fonts.type.Grotesk')};
`

export const Footer: FunctionComponent = () => {
  const Coffee = (<FontAwesomeIcon icon={faCoffee} />)
  const Heart = (<FontAwesomeIcon icon={faHeart} />)

  return (
    <FooterContainer>
      <Text>Made with lots of {Coffee} and {Heart}</Text>
      <Text>&copy; 2021 Diego Rodríguez</Text>
    </FooterContainer>
  )
}