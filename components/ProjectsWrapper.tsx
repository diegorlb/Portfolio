import React, { FunctionComponent } from 'react'

import { TitleBar } from './TitleBar'
import { ProjectsProps } from '../pages/projects'
import { ProjectsWindow, ProjectsContainer } from './styled/ProjectsWrapper.styled'
import { Project } from './Project'
import { motion } from 'framer-motion'

export const ProjectsWrapper: FunctionComponent<ProjectsProps> = ({ projects }) => {
  return (
    <ProjectsWindow
      as={motion.div}
      layoutId={'ProjectsWindow'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}>
      <TitleBar />
      <ProjectsContainer>
        {projects.map((project, index) => <Project key={`project${index}`} index={index} {...project} />)}
      </ProjectsContainer>
    </ProjectsWindow>
  )
}