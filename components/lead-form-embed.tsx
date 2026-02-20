"use client"

import { useEffect } from "react"

export function LeadFormEmbed({ className = "", id = "default" }: { className?: string; id?: string }) {
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

  return (
    <div className={className}>
      <iframe
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
