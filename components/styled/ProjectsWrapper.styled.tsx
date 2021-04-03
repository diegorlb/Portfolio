import styled from 'styled-components'

import { Window, ProgramContainer } from './Global.styled'

export const ProjectsWindow = styled(Window)`
  max-width: 900px;
`

export const ProjectsContainer = styled(ProgramContainer)`
  padding: 4px;
  overflow: hidden auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  & > div { 
    width: 100%;
    height: calc(100% / 4 - 10px);
    margin-bottom: 11px;

    @media (min-width: 640px) {
      width: calc(100% / 2 - 2 * 10px);
      height: calc(100% / 3 - 2 * 10px);
      margin: auto;
      margin-top: 10px;

      &:nth-child(n) {
        margin-left: 10px;
      }

      &:nth-child(2n) {
        margin-right: 10px;
      }
    }
  }
`