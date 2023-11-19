import Header from '@/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/Navbar'
import Footer from '@/Footer'
import { Providers } from '../redux/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wamsutta',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
