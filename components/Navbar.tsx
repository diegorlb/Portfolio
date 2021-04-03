import React, { FunctionComponent } from 'react'
import Link from 'next/link'

import { NavbarContainer, NameContainer } from './styled/Navbar.styled'
import { ResponsiveMenu } from './ResponsiveMenu'

export const Navbar: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NameContainer>
        <Link href={'/'}>DiegoRLB</Link>
      </NameContainer>
      <ResponsiveMenu />
    </NavbarContainer>
  )
}