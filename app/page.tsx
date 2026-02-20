"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { LoginFormPopup } from "@/components/login-form-popup"
import { ThankYouPopup } from "@/components/thank-you-popup"

export default function Home() {
  const [showFormAlert, setShowFormAlert] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const alertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleGetStartedClick = () => {
    setShowFormAlert(true)
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current)
    alertTimerRef.current = setTimeout(() => {
      setShowFormAlert(false)
    }, 10000)
  }

  useEffect(() => {
    return () => {
      if (alertTimerRef.current) clearTimeout(alertTimerRef.current)
    }
  }, [])

  const handleLoginClick = () => {
    setShowLoginForm(true)
  }

  const handleFormSubmit = useCallback(() => {
    setFormSubmitted(true)
    setShowLoginForm(false)
    setShowThankYou(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header onLoginClick={handleLoginClick} formSubmitted={formSubmitted} />
      <main className="flex-1">
        <HeroSection
          onGetStartedClick={handleGetStartedClick}
          formSubmitted={formSubmitted}
          onFormSubmit={handleFormSubmit}
          showFormAlert={showFormAlert}
        />
        <FeaturesSection />
        <BenefitsSection />
        <CtaSection onFormSubmit={handleFormSubmit} />
      </main>
      <Footer />
      <LoginFormPopup isOpen={showLoginForm} onClose={() => setShowLoginForm(false)} onFormSubmit={handleFormSubmit} />
      <ThankYouPopup isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
    </div>
  )
}
