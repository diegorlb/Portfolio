import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  background: linear-gradient(0deg, #0F2027 0%, #203A43 50%, #2C5364 100%);
  width: 100%;
  height: 100%;
  position: absolute;
`

type LayoutProps = {
  title: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ children,  title }) => {
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
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&family=Space+Grotesk:wght@400;700&display=swap"
          />

          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&family=Space+Grotesk:wght@400;700&display=swap"
            media="print" onload="this.media='all'" />
      </Head>
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </>
  )
}