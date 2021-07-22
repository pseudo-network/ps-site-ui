import "../styles/globals.css"
import LightTheme from "../themes/theme"
import React from "react"
import { Container, Box } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
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
            <Box style={{ margin: "33px" }}>
              <Component {...pageProps} />
            </Box>
          </ProvideWallet>
        </ProvideCrypto>
      </ProvideCryptos>
    </ThemeProvider>
  )
}

export default MyApp
