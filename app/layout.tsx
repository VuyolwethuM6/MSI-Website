import './globals.css'
import { Inter } from 'next/font/google'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MSI - Maths and Science Infinity',
  description: 'Empowering youth through STEM education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
