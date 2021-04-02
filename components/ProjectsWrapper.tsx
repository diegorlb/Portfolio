import React, { FunctionComponent } from 'react'

import { TitleBar } from './TitleBar'
import { ProjectsProps } from '../pages/projects'
import { ProjectsWindow, ProjectsContainer } from './styled/ProjectsWrapper.styled'
import { Project } from './Project'

export const ProjectsWrapper: FunctionComponent<ProjectsProps> = ({ projects }) => {
  return (
    <ProjectsWindow>
      <TitleBar />
      <ProjectsContainer>
        {projects.map((project, index) => <Project key={`project${index}`} index={index} {...project} />)}
      </ProjectsContainer>
    </ProjectsWindow>
  )
}