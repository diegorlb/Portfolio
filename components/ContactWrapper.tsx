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
    <ContactWindow>
      <TitleBar />
      <ContactContainer>
        <TitleContainer>
          <TitleText>Let's get in touch!</TitleText>
          <ExtraText>{ExtraTextData}</ExtraText>
        </TitleContainer>
        <FormWrapper ref={form} onSubmit={sendCallback}>
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