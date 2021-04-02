import React, { FunctionComponent } from 'react'

import { Layout } from '../components/Layout'
import { ContactWrapper } from '../components/ContactWrapper'

const Contact: FunctionComponent = () => {
  return (
    <Layout title={'Contact'}>
      <ContactWrapper />
    </Layout>
  )
}

export default Contact