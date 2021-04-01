import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'

import { useGithub, RepositoryType } from '../hooks/useGithub'

import { Layout } from '../components/Layout'
import { ProjectsWrapper } from '../components/ProjectsWrapper'

export type ProjectsProps = {
  projects: RepositoryType[],
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  return (
    <Layout title={'Projects'}>
      <ProjectsWrapper projects={projects} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async (context) => {
  const { getRepos } = useGithub()

  return {
    props: {
      projects: await getRepos()
    },
    revalidate: 3600,
  }
}

export default Projects