import styled from 'styled-components'
import { theme } from 'styled-tools'

export const FooterContainer = styled.div`
  width: 100%;
  height: 42px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FooterText = styled.p`
  font-size: 10px;
  margin: 0;
  color: white;
  font-weight: ${theme('fonts.weight.light')};
  font-family: ${theme('fonts.type.Grotesk')};
`