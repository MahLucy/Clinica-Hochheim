import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Clínica Hochheim',
  description:
    'Clínica Hochheim - Hidro e Terapias: Restaurando movimentos e recuperando qualidade de vida há mais de duas décadas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
