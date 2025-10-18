'use client'

import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import thema from './theme'

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-poppins)',
    body: 'var(--font-poppins)',
  },
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={thema}>{children}</ChakraProvider>
}
