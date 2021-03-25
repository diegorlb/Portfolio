import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

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
  font-size: 32px;
  font-family: 'Space Grotesk', sans-serif;
`

const SubText = styled.p`
  font-size: 19px;
  font-family: 'Source Sans Pro', sans-serif;
`

const Index: FunctionComponent = () => {
  return (
    <Layout title={'Index'}>
      <Modal>
        <Text>Site Underconstruction</Text>
        <SubText>Yeah, I'm working on it...</SubText>
      </Modal>
    </Layout>
  )
}

export default Index