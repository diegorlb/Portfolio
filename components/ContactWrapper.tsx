import React, { FunctionComponent, useRef, useCallback, FormEvent } from 'react'

import { ExtraTextData, ContactData } from '../data/ContactData'

import {
  ContactWindow,
  ContactContainer,
  TitleContainer,
  TitleText,
  FormWrapper,
  InputsContainer,
  Text,
  FieldContainer,
  SubmitButton,
  ExtraText,
} from './styled/ContactWrapper.styled'
import { TitleBar } from './TitleBar'

const Animation = {
  variants: {
    show: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15 + 0.5,
      }
    }),
    hidden: {
      opacity: 0,
      x: 25,
    }
  },
  initial: 'hidden',
  animate: 'show',
}

export const ContactWrapper: FunctionComponent = () => {
  const form = useRef<HTMLFormElement>()

  const sendCallback = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputs = Array.from(form['current'])
    inputs.forEach((input) => {
      if (!input.id) return
      console.log((input as HTMLInputElement).value)
    })
  }, [form])

  return (
    <ContactWindow
      layoutId={'ContactWindow'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}>
      <TitleBar />
      <ContactContainer>
        <TitleContainer {...Animation} custom={0}>
          <TitleText>Let's get in touch!</TitleText>
          <ExtraText>{ExtraTextData}</ExtraText>
        </TitleContainer>
        <FormWrapper ref={form} onSubmit={sendCallback} {...Animation} custom={1}>
          <InputsContainer>
            {ContactData.map((value, index) => {
              if (typeof value === 'string') return <Text key={index}>{value}</Text>
              if (typeof value === 'number') return <br key={index} />
              return (<FieldContainer
                key={index}
                size={value['placeholder'].length * 1.3}
                {...value} />)
            })}
          </InputsContainer>
          <SubmitButton>Send Information</SubmitButton>
        </FormWrapper>
      </ContactContainer>
    </ContactWindow>
  )
}