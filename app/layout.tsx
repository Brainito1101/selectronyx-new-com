import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import Script from 'next/script'
import { PageStateProvider } from '@/components/page-context'
import { DeferredAnalytics } from '@/components/deferred-analytics'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Automated BOM Compliance Checker | RoHS, REACH & Obsolescence',
  description: 'Automate BOM compliance with RoHS & REACH checks. Identify EOL risks, track PCN updates, monitor SVHC, and optimize total cost of ownership',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicons/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png', rel: 'icon' },
      { url: '/favicons/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png', rel: 'icon' },
    ],
  },
  other: {
    'dns-prefetch': [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://links.selectronyx.com',
      'https://www.gstatic.com',
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <DeferredAnalytics />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Selectronyx",
              "url": "https://www.selectronyx.com/",
              "applicationCategory": "BusinessApplication",
              "applicationSubCategory": "Enterprise SaaS",
              "operatingSystem": "Web-based",
              "description": "Selectronyx is an enterprise SaaS platform providing ethical electronics compliance, sustainability intelligence, and risk management for procurement, regulatory, and engineering teams.",
              "audience": {
                "@type": "Audience",
                "audienceType": "B2B"
              },
              "creator": {
                "@type": "Organization",
                "name": "Selectronyx",
                "url": "https://www.selectronyx.com/"
              },
              "provider": {
                "@type": "Organization",
                "name": "Selectronyx"
              },
              "featureList": [
                "Electronics compliance intelligence",
                "Sustainability scoring (repairability, reliability, lifecycle)",
                "Audit-ready compliance reporting",
                "Risk and supply chain insights",
                "Procurement decision support",
                "Continuous compliance monitoring"
              ],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              }
            })
          }}
        />
        <PageStateProvider>
          {children}
        </PageStateProvider>
        <Analytics />
      </body>
    </html>
  )
}
