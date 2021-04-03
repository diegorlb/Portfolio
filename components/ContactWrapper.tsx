import React, { FunctionComponent, useRef, useCallback, FormEvent, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle, faCross } from '@fortawesome/free-solid-svg-icons'

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
  LoadingContainer,
} from './styled/ContactWrapper.styled'
import { TitleBar } from './TitleBar'
import { useAPI, InfoType } from '../hooks/useAPI'

const Animation = {
  variants: {
    show: (i: number) => ({
      opacity: 1,
      x: 0,
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
}

export const ContactWrapper: FunctionComponent = () => {
  const { sendInfoData } = useAPI()
  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<number>(0)
  const form = useRef<HTMLFormElement>()

  const sendCallback = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputs = Array.from(form['current']).reduce((acc, input) => {
      if (!input.id) return acc
      acc[input.id] = (input as HTMLInputElement).value
      return acc
    }, {})
    setLoading(true)
    sendInfoData(inputs as InfoType)
      .then(() => setStatus(1), () => setStatus(2))
      .catch(() => setStatus(2))
  }, [form])

  const IconSelector = [
    faSpinner,      //Status = 0
    faCheckCircle,  //Status = 1
    faCross,        //Status = 2
  ]

  return (
    <ContactWindow
      layoutId={'ContactWindow'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}>
      <TitleBar />
      <ContactContainer>
        <TitleContainer {...Animation} animate={loading ? 'hidden' : 'show'} custom={0}>
          <TitleText>Let's get in touch!</TitleText>
          <ExtraText>{ExtraTextData}</ExtraText>
        </TitleContainer>
        <FormWrapper ref={form} onSubmit={sendCallback} {...Animation} animate={loading ? 'hidden' : 'show'} custom={1}>
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
        <LoadingContainer {...Animation} animate={loading ? 'show' : 'hidden'} custom={2}>
          <FontAwesomeIcon icon={IconSelector[status]} spin={!status} size={'3x'} />
        </LoadingContainer>
      </ContactContainer>
    </ContactWindow>
  )
}