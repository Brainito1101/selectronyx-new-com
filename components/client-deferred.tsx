"use client"

import dynamic from "next/dynamic"

// These dynamic imports are now inside a Client Component, so ssr: false is allowed.
const FaqSection = dynamic(() => import("@/components/faq-section").then(mod => mod.FaqSection), {
  ssr: false, 
  loading: () => <div className="h-[300px] w-full animate-pulse bg-muted/20" />
})

const CtaBannerSection = dynamic(() => import("@/components/cta-banner-section").then(mod => mod.CtaBannerSection), {
  ssr: false, 
  loading: () => <div className="h-64 w-full animate-pulse bg-muted/20" />
})

export function FaqSectionDeferred() {
    return <FaqSection />
}

export function CtaBannerSectionDeferred() {
    return <CtaBannerSection />
}
