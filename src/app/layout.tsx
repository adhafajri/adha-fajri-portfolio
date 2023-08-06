import NavBar from '@/components/nav/nav-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adha Fajri',
  description: "Muhammad Adha Fajri Jonison's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} py-16 bg-[#23252A]`}>
        <header className='px-16 w-full'>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
