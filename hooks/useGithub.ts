import axios from 'axios'

type RawRepositoryType = {
  name: string,
  html_url: string,
  description: string,
  languages_url: string,
  created_at: Date,
  updated_at: Date,
}

export type RepositoryType = {
  name: string,
  url: string,
  description: string,
  languages: LanguageType[],
  created: Date,
  updated: Date,
}

type LanguageType = {
  language: string,
  points: number,
}

export const useGithub = () => {
  const path = 'https://api.github.com/users/diegorlb/repos'

  const auth = {
    username: 'diegorlb',
    password: process.env.GITHUB_TOKEN,
  }

  return {
    getRepos: async (): Promise<RepositoryType[]> => {
      const repositories: Promise<RepositoryType>[] = await axios.get<RawRepositoryType[]>(path, { auth })
        .then(({ data }) => data.map(async ({ name, html_url, description, languages_url, created_at, updated_at }) => {
          const languages: LanguageType[] = await axios.get(languages_url, { auth })
            .then(({ data }) => Object.entries(data).map(([language, points]) => ({ language, points: +points })))

          return {
            name,
            url: html_url,
            description: description || 'No description',
            languages,
            created: created_at,
            updated: updated_at,
          }
        }))

      return Promise.all(repositories)
    }
  }
}