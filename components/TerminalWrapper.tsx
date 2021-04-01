import React, { FunctionComponent, useMemo } from 'react'
import { motion } from 'framer-motion'

import { TerminalData } from '../data/TerminalData'

import {
  TerminalWindow,
  ConsoleContainer,
  EntryContainer,
  PathWrapper,
  Blinker
} from './styled/TerminalWrapper.styled'

import { CompoundTerminalEntry } from './CompundTerminalEntry'
import { TitleBar } from './TitleBar'

export const TerminalWrapper: FunctionComponent = () => {
  const Delays = useMemo(() => TerminalData.map((_, i, arr) => {
    return arr.slice(0, i).reduce((acc, { cmd }) => acc + 0.1 * cmd.length, 0.4 * i)
  }), [])

  const TotalDelay = useMemo(() => Delays.reduce((acc, delay) => acc + delay, 0), [])

  return (
    <TerminalWindow>
      <TitleBar />
      <ConsoleContainer>
        {TerminalData.map(({ cmd, txt }, index) => {
          return <CompoundTerminalEntry key={index} cmd={cmd} txt={txt} delay={Delays[index]} />
        })}
        <EntryContainer
          as={motion.div}
          initial={{
            display: 'none'
          }}
          animate={{
            display: 'flex',
            transition: {
              delay: TotalDelay
            }
          }}>
          <PathWrapper>: ~/$</PathWrapper>
          <Blinker>&#124;</Blinker>
        </EntryContainer>
      </ConsoleContainer>
    </TerminalWindow>
  )
}