import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/config'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700'],
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: `${site.name} - Official Real Madrid Supporters Club in Vancouver`,
  description: site.description,
  keywords: 'Real Madrid, supporters club, Vancouver, Madridistas, football',
  generator: 'v0.app',
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
    siteName: site.name,
  },
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uQ8u4UCjndErmkHrjf0Q69dkGOl29N.png',
        type: 'image/png',
      },
    ],
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uQ8u4UCjndErmkHrjf0Q69dkGOl29N.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
