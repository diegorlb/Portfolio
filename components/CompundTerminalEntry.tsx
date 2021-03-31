import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

import { AnimatedRequest } from './AnimatedRequest'
import { EntryContainer, TerminalText } from './styled/Terminal.styled'
import { motion } from 'framer-motion'

export type CompoundTerminalEntryProps = {
  cmd: string,
  txt: any,
  delay: number
}

export const CompoundTerminalEntry: FunctionComponent<CompoundTerminalEntryProps> = ({ cmd, txt, delay }) => {
  const [playResponse, setPlayResponse] = useState<boolean>(false)

  const Response = ({ txt }) => (
    <EntryContainer>
      <TerminalText>{txt}</TerminalText>
    </EntryContainer>
  )

  return (
    <motion.div
      initial={{
        display: 'none',
      }}
      animate={{
        display: 'block',
        transition: {
          delay,
        }
      }}>
      <AnimatedRequest cmd={cmd} callback={setPlayResponse} delay={delay} />
      {playResponse && <Response txt={txt} />}
    </motion.div>
  )
}