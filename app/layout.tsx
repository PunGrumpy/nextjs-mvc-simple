import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './providers'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next js and Prisma',
  description: 'Next js and Prisma MVC'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
