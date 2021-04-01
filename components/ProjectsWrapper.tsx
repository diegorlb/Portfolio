import React, { FunctionComponent } from 'react'

import { TitleBar } from './TitleBar'
import { ProjectsProps } from '../pages/projects'

import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'
import useDimensions from '../hooks/useDimensions'

const ProjectsWindow = styled.div`
  width: 80%;
  max-width: 900px;
  height: 450px;
`

const StyleCases = {
  mobile: css`
    width: 100%;
    height: calc(100% / 4 - 10px);
    margin-bottom: 11px;
  `,
  desktop: css`
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
  `
}

const ProjectsContainer = styled.div<{ device: 'mobile' | 'desktop' }>`
  background-color: #1D1F21;
  width: 100%;
  height: calc(100% - 24px);
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 4px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;

  & > div {
    ${switchProp('device', StyleCases)}
  }
`

const ProjectContainer = styled.div`
  background-color: #282B30;
  border: 1px solid #909391;
  border-radius: 6px;
  padding: 4px;
`

export const ProjectsWrapper: FunctionComponent<ProjectsProps> = ({ projects }) => {
  const { isMobile } = useDimensions()

  return (
    <ProjectsWindow>
      <TitleBar />
      <ProjectsContainer device={isMobile ? 'mobile' : 'desktop'}>
        {
          projects.map(({ name }) => (<ProjectContainer>{name}</ProjectContainer>))
        }
      </ProjectsContainer>
    </ProjectsWindow>
  )
}