import React, { FunctionComponent } from 'react'
import { TitleBarContainer, Spheres } from './styled/TitleBar.styled'

export const TitleBar: FunctionComponent = () => {
  return (
    <TitleBarContainer>
      <Spheres color={'#5E8D6B'} />
      <Spheres color={'#B5BD68'} />
      <Spheres color={'#A54242'} />
    </TitleBarContainer>
  )
}