import React, { FunctionComponent } from 'react'

import { Layout } from '../components/Layout'
import { TerminalWrapper } from '../components/TerminalWrapper'

const Index: FunctionComponent = () => {
  return (
    <Layout title={'Home'}>
      <TerminalWrapper />
    </Layout>
  )
}

export default Index