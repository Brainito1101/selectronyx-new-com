"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Script from "next/script"

interface LeadFormEmbedProps {
  className?: string
  id?: string
  onFormSubmit?: () => void
}

export function LeadFormEmbed({ className = "", id = "default", onFormSubmit }: LeadFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeKey, setIframeKey] = useState(0)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isNavigatingAway, setIsNavigatingAway] = useState(false)
  const loadHandlerRef = useRef<(() => void) | null>(null)

  // Optimized lazy-loading: Use requestIdleCallback for better performance
  useEffect(() => {
    let fired = false
    
    const loadHandler = () => {
      if (fired) return
      fired = true
      setShouldLoad(true)
      
      // Cleanup event listeners immediately
      if (loadHandlerRef.current) {
        window.removeEventListener('scroll', loadHandlerRef.current, true)
        window.removeEventListener('touchstart', loadHandlerRef.current, true)
      }
    }

    loadHandlerRef.current = loadHandler

    // Use requestIdleCallback if available for non-blocking load
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => loadHandler(), { timeout: 3000 })
    } else {
      // Fallback: Load after 2.5 seconds (mobile priority)
      const timeoutId = setTimeout(loadHandler, 2500)
      return () => clearTimeout(timeoutId)
    }

    // Load early on scroll or touch (early interaction)
    window.addEventListener('scroll', loadHandler, { passive: true, capture: true })
    window.addEventListener('touchstart', loadHandler, { passive: true, capture: true })

    return () => {
      window.removeEventListener('scroll', loadHandler, true)
      window.removeEventListener('touchstart', loadHandler, true)
    }
  }, [])

  // BFCACHE OPTIMIZATION: Remove iframe during navigation
  useEffect(() => {
    const handlePageHide = () => {
      setIsNavigatingAway(true)
    }

    const handlePageShow = (event: PageTransitionEvent) => {
      // If page is restored from bfcache (persisted === true)
      if (event.persisted) {
        setIsNavigatingAway(false)
      }
    }

    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  const resetForm = useCallback(() => {
    setIframeKey((prev) => prev + 1)
  }, [])

  // Handle form submission via postMessage (primary method)
  useEffect(() => {
    if (!shouldLoad || isNavigatingAway) return

    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from trusted origin
      if (event.origin !== "https://links.selectronyx.com") return
      
      const data = event.data
      
      // Check for form submission signals
      if (
        (typeof data === "object" && 
          (data.type === "form:submit" || 
           data.formSubmitted === true || 
           data.event === "formSubmitted")) ||
        (typeof data === "string" && 
         (data.includes("submitted") || data.includes("completed")))
      ) {
        onFormSubmit?.()
        // Reset form after delay
        setTimeout(() => resetForm(), 1200)
      }
    }

    window.addEventListener("message", handleMessage, false)
    return () => window.removeEventListener("message", handleMessage, false)
  }, [onFormSubmit, resetForm, shouldLoad, isNavigatingAway])

  if (!shouldLoad || isNavigatingAway) {
    return (
      <div 
        className={`${className} flex items-center justify-center rounded-xl border border-border bg-accent/30`} 
        style={{ minHeight: '500px' }}
      >
        <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-xs font-medium">Preparing secure contact form...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Script
        src="https://links.selectronyx.com/js/form_embed.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        fetchPriority="low"
      />
      <iframe
        key={iframeKey}
        ref={iframeRef}
        src="https://links.selectronyx.com/widget/form/pgQrSjvMA1nGXdFEg4KS"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id={`inline-pgQrSjvMA1nGXdFEg4KS-${id}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead form.EU/.com"
        data-height="491"
        data-layout-iframe-id="inline-pgQrSjvMA1nGXdFEg4KS"
        data-form-id="pgQrSjvMA1nGXdFEg4KS"
        title="Lead form.EU/.com"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; microphone; camera; geolocation"
      />
    </div>
  )
}
