import React, { FunctionComponent } from 'react'
import Head from 'next/head'

import useMounted from '../hooks/useMounted'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { LayoutWrapper, MainContainer } from './styled/Layout.styled'

export type LayoutProps = {
  title: string
}

const link = 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&Source+Sans+Pro:wght@300;400;700&family=Space+Grotesk:wght@300;400;700&display=swap'

export const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => {
  const mounted = useMounted()

  return (
    <>
      <Head>
        <title>{`< ${title} /> - Diego Rodríguez`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href={link}
        />

        <link rel="stylesheet"
          href={link}
          media={!mounted ? 'print' : 'all'} />

        <noscript>
          <link rel="stylesheet"
            href={link} />
        </noscript>
      </Head>
      <LayoutWrapper>
        <Navbar />
        <MainContainer>
          {children}
        </MainContainer>
        <Footer />
      </LayoutWrapper>
    </>
  )
}