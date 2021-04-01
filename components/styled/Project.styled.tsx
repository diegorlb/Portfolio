import styled from 'styled-components'
import { prop, theme } from 'styled-tools'
import { motion } from 'framer-motion'

export const ProjectContainer = styled(motion.div)`
  background-color: #282B30;
  border: 1px solid #909391;
  border-radius: 6px;
  padding: 4px;
  display: flex;
  opacity: 0;
  cursor: pointer;
`

export const ColorBar = styled.div`
  background-color: ${prop('color')};
  filter: opacity(0.75);
  height: 100%;
  width: 10px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-right: 4px;
`

export const RepoInfoContainer = styled.div`
  width: calc(100% - 10px - 2 * 4px - 24px);
  height: 100%;
  padding: 4px 0;
`

export const RepoName = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 18px;
  font-family: ${theme('fonts.type.Grotesk')};
  font-weight: ${theme('fonts.weight.bold')};
`

export const RepoDescription = styled.p`
  height: calc(100% - 7 * 4px);
  margin: 0;
  font-size: 14px;
  font-family: ${theme('fonts.type.Source')};
  font-weight: ${theme('fonts.weight.regular')};
`

export const LanguagesContainer = styled.div`
  width: 24px;
  height: 100%;
  margin-left: 4px;
  overflow: hidden;

  & > svg {
    color: #e9e9e9;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`