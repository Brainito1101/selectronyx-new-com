"use client"

import { useEffect, useState } from 'react'
import Script from 'next/script'

export function DeferredAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if we already loaded it to prevent double loading
    let fired = false
    
    const loadScripts = () => {
      if (fired) return
      fired = true
      setShouldLoad(true)
      
      // Cleanup event listeners
      window.removeEventListener('scroll', loadScripts)
      window.removeEventListener('mousemove', loadScripts)
      window.removeEventListener('touchstart', loadScripts)
      window.removeEventListener('keydown', loadScripts)
    }

    // Load after a safe delay (4 seconds) or on interaction
    const timeout = setTimeout(loadScripts, 4000)
    
    // Listen for common user interactions
    window.addEventListener('scroll', loadScripts, { passive: true })
    window.addEventListener('mousemove', loadScripts, { passive: true })
    window.addEventListener('touchstart', loadScripts, { passive: true })
    window.addEventListener('keydown', loadScripts, { passive: true })

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', loadScripts)
      window.removeEventListener('mousemove', loadScripts)
      window.removeEventListener('touchstart', loadScripts)
      window.removeEventListener('keydown', loadScripts)
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VEWZ63JN31"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        fetchPriority="low"
        async
      />
      <Script id="google-analytics-deferred" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Google Consent Mode (GCM)
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });

          gtag('js', new Date());

          // Secure cookie configuration
          gtag('config', 'G-VEWZ63JN31', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  )
}
