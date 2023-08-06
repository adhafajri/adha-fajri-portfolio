import NavBar from '@/components/nav/nav-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '400', '500']
});

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
      <body className={`${poppins.variable} font-poppins inline-flex flex-col items-start py-8 gap-32 w-full bg-[#23252A]`}>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
