import React, { FunctionComponent, useState, useMemo } from 'react'

import { TerminalData } from '../data/TerminalData'

import {
  TerminalContainer,
  TitleBarContainer,
  Spheres,
  ConsoleContainer,
  EntryContainer,
  PathWrapper,
  Blinker
} from './styled/Terminal.styled'

import { CompoundTerminalEntry } from './CompundTerminalEntry'
import { motion } from 'framer-motion'

export const Terminal: FunctionComponent = () => {
  const Delays = useMemo(() => TerminalData.map((_, i, arr) => {
    return arr.slice(0, i).reduce((acc, { cmd }) => acc + 0.1 * cmd.length, 0.45 * i)
  }), [])

  const TotalDelay = useMemo(() => Delays.reduce((acc, delay) => acc + delay, 0), [])

  return (
    <TerminalContainer>
      <TitleBarContainer>
        <Spheres color={'#5E8D6B'} />
        <Spheres color={'#B5BD68'} />
        <Spheres color={'#A54242'} />
      </TitleBarContainer>
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
    </TerminalContainer>
  )
}