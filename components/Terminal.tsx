import React, { FunctionComponent, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { prop, theme } from 'styled-tools'

import { TerminalData } from '../data/TerminalData'

const TerminalContainer = styled.div`
  width: 80%;
  max-width: 700px;
  height: 450px;
`

const TitleBarContainer = styled.div`
  background-color: #373B41;
  width: 100%;
  height: 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6px;
  cursor: move;
`

const Spheres = styled.div`
  background-color: ${prop('color')};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`

const ConsoleContainer = styled.div`
  background-color: #1D1F21;
  width: 100%;
  height: calc(100% - 24px);
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 2px 4px;
  cursor: text;
`

const EntryContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Text = styled.p`
  font-size: 10pt;
  font-weight: ${theme('fonts.weight.light')};
  font-family: ${theme('fonts.type.Source')};
`

const Path = styled(Text)`
  margin: 0;
  margin-bottom: 2px;
  margin-right: 4px;
  color: #A0B1D2;
  min-width: 105px;
  
  &:before {
    content: 'root@diegorlb';
    color: #5FA74D;
  }
`

const TerminalText = styled(Text)`
  margin: 0;
`

const BlinkAnimation = keyframes`
  0% { opacity: 0 }
	49% { opacity: 0 }
	50% { opacity: 1 }
`

const Blinker = styled(Text)`
  margin: 0;
  animation: ${BlinkAnimation} 1s infinite;
`

export const Terminal: FunctionComponent = () => {
  const Request = ({ cmd }) => (
    <EntryContainer>
      <Path>: ~/$</Path>
      <TerminalText>{cmd}</TerminalText>
    </EntryContainer>
  )
  const Response = ({ txt }) => (
    <EntryContainer>
      <TerminalText>{txt}</TerminalText>
    </EntryContainer>
  )

  return (
    <TerminalContainer>
      <TitleBarContainer>
        <Spheres color={'#5E8D6B'} />
        <Spheres color={'#B5BD68'} />
        <Spheres color={'#A54242'} />
      </TitleBarContainer>
      <ConsoleContainer>
        {
          TerminalData.map(({ cmd, txt }, index) => {
            return [
              <Request key={`cmd${index}`} cmd={cmd} />,
              <Response key={`txt${index}`} txt={txt} />
            ]
          })
        }
        <EntryContainer>
          <Path>: ~/$</Path>
          <Blinker>&#124;</Blinker>
        </EntryContainer>
      </ConsoleContainer>
    </TerminalContainer>
  )
}