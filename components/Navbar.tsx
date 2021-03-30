import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { ResponsiveMenu } from './ResponsiveMenu'

const NavbarContainer = styled.div`
  height: 64px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 32px;

  & > div:last-child {
    margin-left: auto;
  }
`

const NameContainer = styled.div`
  &, &:before, &:after {
    height: 32px;
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