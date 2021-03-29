import { FunctionComponent, useMemo } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import useDimensions from '../hooks/useDimensions'
import { NavbarLinks } from '../data/NavbarLinks'

const ResponsiveMenuContainer = styled.div`
  display: flex;
  flex-direction: row;

  
`

const LinkContainer = styled.div`
  margin: 0 16px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

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

export const ResponsiveMenu: FunctionComponent = () => {
  const { width } = useDimensions()

  const LinksMemo = useMemo(() => NavbarLinks.map(({ key, path }, index) => {
    return (
      <LinkContainer key={index}>
        <a href={path}>{key}</a>
      </LinkContainer>
    )
  }), [])

  return (
    <ResponsiveMenuContainer>
      {
        width < 992 ? 'asdasdsd' : LinksMemo
      }
    </ResponsiveMenuContainer>
  )
}