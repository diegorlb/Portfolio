import React, { FunctionComponent, useRef, useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import useMounted from '../hooks/useMounted'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const LayoutWrapper = styled.div`
  background: linear-gradient(0deg, #0F2027 0%, #203A43 50%, #2C5364 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export type LayoutProps = {
  title: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => {
  const mounted = useMounted()

  const link = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&family=Space+Grotesk:wght@300;400;700&display=swap'

  return (
    <>
      <Head>
        <title>{title}</title>
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