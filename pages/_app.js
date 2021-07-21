import '../styles/globals.css'
import LightTheme from '../themes/theme'
import React from 'react'
import { Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { ProvideCryptos } from "../contexts/cryptosContext"
import { ProvideWallet } from "../contexts/walletContext"
import { ProvideCrypto } from "../contexts/cryptoContext"

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={LightTheme}>
      <ProvideCryptos>
        <ProvideCrypto>
          <ProvideWallet>
            <Container style={{ 'margin-top': '10px' }}>
              <Component {...pageProps} />
            </Container>
          </ProvideWallet>
        </ProvideCrypto>
      </ProvideCryptos>
    </ThemeProvider>
  )
}

export default MyApp
