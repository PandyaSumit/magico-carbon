import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.magicocarbon.com'),
  title: 'Magico Carbon - Premium Activated Carbon Solutions',
  description: 'Leading global supplier of steam-activated coconut shell carbon. ISO certified manufacturing with 200+ MT monthly capacity. Water treatment, air purification, gold recovery, and industrial applications.',
  keywords: 'activated carbon, granular activated carbon, powdered activated carbon, carbon supplier, water treatment, air purification, gold recovery, coconut shell carbon',
  authors: [{ name: 'Magico Carbon' }],
  openGraph: {
    title: 'Magico Carbon - Premium Activated Carbon Solutions',
    description: 'Global supplier of premium activated carbon products with state-of-the-art manufacturing in India.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magico Carbon - Premium Activated Carbon Solutions',
    description: 'Leading global supplier of activated carbon products',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1000cc" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
