import React, { FunctionComponent, useState, useEffect, Dispatch, SetStateAction } from 'react'

import { EntryContainer, PathWrapper, TerminalText, Blinker } from './styled/TerminalWrapper.styled'
import useInterval from '../hooks/useInterval'

export type AnimatedRequestProps = {
  cmd: string,
  callback: Dispatch<SetStateAction<boolean>>,
  delay: number,
}

export const AnimatedRequest: FunctionComponent<AnimatedRequestProps> = ({ cmd, callback, delay }) => {
  const [show, setShow] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)

  useInterval(() => {
    if(show) setCounter(prev => prev + 1)
  }, 50, counter > cmd.length, () => callback(true))
 
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <EntryContainer>
      <PathWrapper>: ~/$</PathWrapper>
      <TerminalText>{cmd.substr(0, counter)}</TerminalText>
      {counter < cmd.length && <Blinker>&nbsp;&#124;</Blinker>}
    </EntryContainer>
  )
}