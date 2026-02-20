"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface LeadFormEmbedProps {
  className?: string
  id?: string
  onFormSubmit?: () => void
}

export function LeadFormEmbed({ className = "", id = "default", onFormSubmit }: LeadFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeKey, setIframeKey] = useState(0)

  const resetForm = useCallback(() => {
    setIframeKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    // Load the form embed script once
    const existingScript = document.querySelector(
      'script[src="https://links.selectronyx.com/js/form_embed.js"]'
    )
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://links.selectronyx.com/js/form_embed.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // GoHighLevel / LeadConnector form embeds post messages on form submission
      if (
        event.origin === "https://links.selectronyx.com" &&
        event.data &&
        (typeof event.data === "string" || typeof event.data === "object")
      ) {
        let data = event.data
        if (typeof data === "string") {
          try {
            data = JSON.parse(data)
          } catch {
            // Not JSON, check for known submission strings
            if (data.includes("formSubmitted") || data.includes("form_submitted") || data.includes("submitted")) {
              onFormSubmit?.()
              setTimeout(() => resetForm(), 1500)
              return
            }
          }
        }
        if (
          typeof data === "object" &&
          (data.type === "form:submit" ||
            data.type === "formSubmitted" ||
            data.formSubmitted === true ||
            data.event === "formSubmitted" ||
            data.action === "formSubmitted")
        ) {
          onFormSubmit?.()
          setTimeout(() => resetForm(), 1500)
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [onFormSubmit, resetForm])

  // Also detect submission via iframe URL change (fallback)
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = iframeRef.current
      if (!iframe) return
      try {
        // Check if iframe content changed (cross-origin will throw)
        const doc = iframe.contentDocument || iframe.contentWindow?.document
        if (doc) {
          const body = doc.body?.textContent || ""
          if (body.includes("appreciate") || body.includes("Thank you")) {
            onFormSubmit?.()
            setTimeout(() => resetForm(), 1500)
            clearInterval(interval)
          }
        }
      } catch {
        // Cross-origin - expected, ignore
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [onFormSubmit, resetForm, iframeKey])

  return (
    <div className={className}>
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
        data-form-name="Lead form.EU"
        data-height="491"
        data-layout-iframe-id="inline-pgQrSjvMA1nGXdFEg4KS"
        data-form-id="pgQrSjvMA1nGXdFEg4KS"
        title="Lead form.EU"
      />
    </div>
  )
}
