
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/ThemeProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disney+ AI',
  description: 'Experience the enchantment of Disney like never before on Disney+ AI. Immerse yourself in a world of magical storytelling, where the wonders of Disney meet the innovation of AI. Discover curated content recommendations tailored just for you. Unleash the power of technology in the heart of beloved classics. Join us on Disney+ AI – where imagination knows no limits.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='bg-gray-200/75 dark:bg-[#1A1C29] overflow-x-hidden ' suppressHydrationWarning={true} >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          
          >
      <Header/>
        
        {children}
        
        </ThemeProvider>
        
        </body>
        
    </html>
  )
}
