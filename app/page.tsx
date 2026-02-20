"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FormAlertModal } from "@/components/form-alert-modal"
import { ThankYouPopup } from "@/components/thank-you-popup"

export default function Home() {
  const [showAlert, setShowAlert] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleButtonClick = () => {
    setShowAlert(true)
  }

  const handleFormSubmit = useCallback(() => {
    setFormSubmitted(true)
    setShowThankYou(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header onLoginClick={handleButtonClick} formSubmitted={formSubmitted} />
      <main className="flex-1">
        <HeroSection
          onGetStartedClick={handleButtonClick}
          formSubmitted={formSubmitted}
          onFormSubmit={handleFormSubmit}
        />
        <FeaturesSection />
        <BenefitsSection />
        <CtaSection onFormSubmit={handleFormSubmit} />
      </main>
      <Footer />
      <FormAlertModal isOpen={showAlert} onClose={() => setShowAlert(false)} />
      <ThankYouPopup isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
    </div>
  )
}
