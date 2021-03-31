import React, { FunctionComponent } from 'react'

import { NavbarContainer, NameContainer } from './styled/Navbar.styled'
import { ResponsiveMenu } from './ResponsiveMenu'

export const Navbar: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NameContainer>DiegoRLB</NameContainer>
      <ResponsiveMenu />
    </NavbarContainer>
  )
}