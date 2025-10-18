import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      10: '#FDFEFF',
      20: '#F8F8F8',
      50: '#E6F8FF',
      100: '#C2EDFE',
      200: '#92DEFD', // azul claro (principal)
      300: '#66CBF6',
      400: '#3FB6EB',
      500: '#1DA2E0',
      600: '#1482B8',
      700: '#0D648F',
      750: '#1B7C9F', // azul médio institucional
      800: '#004567', // azul escuro institucional
      900: '#00324B',
      1000: '#05344B',
    },
  },
  fonts: {
    heading: 'var(--font-poppins)',
    body: 'var(--font-poppins)',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
})

export default theme
