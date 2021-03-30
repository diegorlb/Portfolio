import React, { FunctionComponent, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Layout } from '../components/Layout'
import { Terminal } from '../components/Terminal'

const Index: FunctionComponent = () => {
  const [hash, setHash] = useState<string>('')

  useEffect(() => {
    const handler = () => setHash(window.location.hash)

    handler()

    window.addEventListener('hashchange', handler)

    return () => window.removeEventListener('hashchange', handler)
  }, [])

  console.log(hash)

  return (
    <Layout title={'Index'}>
      <Terminal />
    </Layout>
  )
}

export default Index