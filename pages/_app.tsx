import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"

import type { AppProps } from 'next/app'

// Import Chakra Provider
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

// Extend Chakra Theme.
let colors = {
  brand: {
    900: "#BCABAE",
  },
}

const theme = extendTheme({
  fonts: {
  heading: "Open Sans",
  body: "Raleway",},
  colors
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>)
}
export default MyApp
