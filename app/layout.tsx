import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Global BOM Compliance | RoHS, REACH, SCIP, TSCA & Prop 65 Automation',
  description: 'Automate global BOM compliance for EU and North American markets. Track RoHS, REACH, SCIP, TSCA, and Prop 65 updates while optimizing lifecycle scoring and sustainability reporting.',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* Google Analytics - Optimized for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VEWZ63JN31"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VEWZ63JN31', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
