import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { AnimateSharedLayout } from 'framer-motion'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  fonts: {
    type: {
      Grotesk: "'Space Grotesk', sans-serif",
      Source: "'Source Sans Pro', sans-serif",
      SourcePro: "'Source Code Pro', monospaced",
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimateSharedLayout>
  )
}