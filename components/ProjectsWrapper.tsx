import React, { FunctionComponent } from 'react'

import useDimensions from '../hooks/useDimensions'

import { TitleBar } from './TitleBar'
import { ProjectsProps } from '../pages/projects'
import { ProjectsWindow, ProjectsContainer } from './styled/ProjectsWrapper.styled'
import { Project } from './Project'

export const ProjectsWrapper: FunctionComponent<ProjectsProps> = ({ projects }) => {
  const { isMobile } = useDimensions()

  return (
    <ProjectsWindow>
      <TitleBar />
      <ProjectsContainer device={isMobile ? 'mobile' : 'desktop'}>
        {projects.map((project, index) => <Project key={`project${index}`} index={index} {...project} />)}
      </ProjectsContainer>
    </ProjectsWindow>
  )
}