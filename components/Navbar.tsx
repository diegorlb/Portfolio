import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { ResponsiveMenu } from './ResponsiveMenu'

const NavbarContainer = styled.div`
  border: 1px solid red;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 32px;

  & > div:last-child {
    border: 1px solid red;
    margin-left: auto;
  }
`

const NameContainer = styled.div`
  &, &:before, &:after {
    color: white;
    font-size: 24px;
    font-weight: ${theme('fonts.weight.bold')};
    font-family: ${theme('fonts.type.Grotesk')};
  }

  &:before, &:after {
    margin: 0 4px;
  }

  &:before {
    content: '<';
    margin-left: 0;
  }

  &:after {
    content: '/>';
    margin-right: 0;
  }
`

export const Navbar: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NameContainer>DiegoRLB</NameContainer>
      <ResponsiveMenu />
    </NavbarContainer>
  )
}