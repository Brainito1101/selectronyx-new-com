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
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Selectronyx",
        "url": "https://www.selectronyx.com/",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Enterprise SaaS",
        "operatingSystem": "Any",
        "description": "Selectronyx is an enterprise SaaS platform providing ethical electronics compliance, sustainability intelligence, and risk management.",
        "creator": {
          "@type": "Organization",
          "name": "Selectronyx",
          "url": "https://www.selectronyx.com/"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.selectronyx.com/"
        },
        "featureList": [
          "Electronics compliance intelligence",
          "Sustainability scoring",
          "Audit-ready compliance reporting",
          "Risk and supply chain insights",
          "Procurement decision support",
          "Continuous compliance monitoring"
        ],
        "sameAs": [
          "https://www.linkedin.com/company/selectronyx"
        ],
        "image": "https://www.selectronyx.com/logo.png"
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Selectronyx",
        "url": "https://www.selectronyx.com/",
        "logo": "https://www.selectronyx.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/selectronyx/",
          "https://www.facebook.com/selectronyx",
          "https://www.instagram.com/selectronyx_tech_hub/"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.selectronyx.com/",
        "name": "Selectronyx"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is FairSpec?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FairSpec is Selectronyx's structured hardware intelligence framework that evaluates vendors using measurable, data-driven scoring pillars."
            }
          },
          {
            "@type": "Question",
            "name": "Is this only for large enterprises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. While built for enterprise-grade procurement, mid-sized organizations with structured sourcing needs also benefit significantly."
            }
          },
          {
            "@type": "Question",
            "name": "How long does implementation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial access is immediate. Full integration timelines depend on scope and hardware category."
            }
          },
          {
            "@type": "Question",
            "name": "Does FairSpec replace our existing RFP process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. It enhances it by adding standardized intelligence scoring and documentation."
            }
          },
          {
            "@type": "Question",
            "name": "How is the score calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scores are generated using structured evaluation models across Repairability, Reliability, Sustainability, and Total Cost of Ownership (TCO) criteria."
            }
          },
          {
            "@type": "Question",
            "name": "Is the data audit-ready?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. FairSpec produces documentation aligned with governance and compliance expectations."
            }
          }
        ]
      }
    ])
  }}
/>
        <PageStateProvider>
          {children}
        </PageStateProvider>
        <Analytics />
         {/* Leadinfo tracking code */}
        <Script
          id="leadinfo-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
}(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','LI-69E89165B0F8D'));`,
          }}
        />
      </body>
    </html>
  )
}