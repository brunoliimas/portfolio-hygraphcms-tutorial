import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { ContactForm } from './components/contact-form'
import { BackTop } from './components/back-top'



const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
        <BackTop />
      </body>
    </html>
  )
}
