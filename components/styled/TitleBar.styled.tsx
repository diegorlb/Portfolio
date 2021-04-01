import styled from 'styled-components'
import { prop } from 'styled-tools'

export const TitleBarContainer = styled.div`
  background-color: #373B41;
  width: 100%;
  height: 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6px;
  cursor: move;
`

export const Spheres = styled.div`
  background-color: ${prop('color')};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`