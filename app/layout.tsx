
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/ThemeProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disney+ AI',
  description: 'Experience the enchantment of Disney like never before on Disney+ AI. Immerse yourself in a world of magical storytelling, where the wonders of Disney meet the innovation of AI. Discover curated content recommendations tailored just for you. Unleash the power of technology in the heart of beloved classics. Join us on Disney+ AI – where imagination knows no limits.',
  icons: {
    icon:  `${process.env.META_IMAGE}/favicon.ico`, // Path to your icon file
    shortcut:  `${process.env.META_IMAGE}/favicon.ico`, // Path to your icon file
    apple:  `${process.env.META_IMAGE}/favicon.ico`, // Path to the Apple touch icon file
  },


openGraph: {
  title: "Disney+ Ai - The magic in your way",

  url: "https://disney.namanarora.in",

  images: [
  
    {
      url: `${process.env.META_IMAGE}`, 
    
    },
  ],
  locale: "en_IN",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  images: {
    url: `${process.env.META_IMAGE}`,
  },
},
robots: {
  index: true,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: false,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
applicationName: "Disney+ Ai - The magic in your way",
creator: "Naman Arora",
};




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
