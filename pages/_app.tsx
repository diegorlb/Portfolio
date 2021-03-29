import { ThemeProvider, createGlobalStyle } from 'styled-components'

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
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    }
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}