import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'Real Estate Investment Platform',
  description: 'Find off-the-plan apartments and developments to buy or invest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  )
}

