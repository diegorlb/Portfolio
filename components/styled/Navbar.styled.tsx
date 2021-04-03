import styled from 'styled-components'
import { theme } from 'styled-tools'

export const NavbarContainer = styled.div`
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

export const NameContainer = styled.div`
  cursor: pointer;

  &, &:before, &:after, & > a {
    height: 32px;
    color: white;
    font-size: 24px;
    font-weight: ${theme('fonts.weight.bold')};
    font-family: ${theme('fonts.type.Grotesk')};
    text-decoration: none;
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