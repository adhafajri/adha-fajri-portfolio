import NavBar from '@/components/nav/nav-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '400', '500']
});

export const metadata: Metadata = {
  title: 'Muhammad Adha Fajri Jonison',
  description: "Muhammad Adha Fajri Jonison's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2979510260888726" crossOrigin="anonymous"></script>
      </head>
      <body className={`${poppins.variable} font-poppins inline-flex flex-col items-start gap-8 w-full h-screen bg-black`}>
        <NavBar />

        {children}

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2979510260888726"
          crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2979510260888726"
          data-ad-slot="3659167690"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script>

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}
