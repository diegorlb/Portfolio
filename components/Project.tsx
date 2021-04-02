import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'

import { LanguageIcons } from '../data/LanguageIcons'
import { RepositoryType } from '../hooks/useGithub'

import {
  ProjectContainer,
  ColorBar,
  RepoInfoContainer,
  RepoName,
  RepoDescription,
  LanguagesContainer
} from './styled/Project.styled'

export type ProjectProps = RepositoryType & { index: number }

export const Project: FunctionComponent<ProjectProps> = ({ name, description, languages, url, index }) => {
  const router = useRouter()

  const hasher = (value: string) => {
    return `#${Math.abs(value.split('').reduce((acc, c) => Math.imul(32, acc) + c.charCodeAt(0), 0)).toString(16).slice(0, 6)}`
  }

  const Animation = {
    variants: {
      show: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: i * 0.15,
        }
      }),
      hidden: {
        x: 25,
      }
    },
    initial: 'hidden',
    animate: 'show',
    custom: index,
    whileHover: {
      y: -5,
    }
  }

  return (
    <ProjectContainer onClick={() => router.push(url)} {...Animation}>
      <ColorBar color={hasher(name)} />
      <RepoInfoContainer>
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
      </RepoInfoContainer>
      <LanguagesContainer>
        {languages.map(({ language }, index) => {
          if (!LanguageIcons[language]) return
          const Icon = LanguageIcons[language]
          return <Icon key={`icon${index}`} />
        })}
      </LanguagesContainer>
    </ProjectContainer>
  )
}