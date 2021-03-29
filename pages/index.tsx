import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'

const Modal = styled.div`
  background-color: #EEF;
  width: calc(100% / 3);
  height: calc(100% / 3);
  border-radius: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: ${theme('fonts.type.Bold')};
  font-family: ${theme('fonts.type.Grotesk')};
`

const SubText = styled.p`
  font-size: 1.5rem;
  font-weight: ${theme('fonts.weight.light')};
  font-family: ${theme('fonts.type.Source')};
`

const Index: FunctionComponent = () => {
  return (
    <Layout title={'Index'}>
      <Navbar />
      <Modal>
        <Text>Site Underconstruction</Text>
        <SubText>Yeah, I'm working on it...</SubText>
      </Modal>
    </Layout>
  )
}

export default Index