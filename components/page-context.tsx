"use client"

import { createContext, useContext, useState, useCallback, ReactNode, useRef, useEffect } from "react"
import dynamic from "next/dynamic"

// Only load popups when they're actually needed (triggered by user)
const LoginFormPopup = dynamic(
  () => import("@/components/login-form-popup").then(mod => mod.LoginFormPopup), 
  { 
    ssr: false,
    loading: () => null // Don't show placeholder for modal
  }
)

const ThankYouPopup = dynamic(
  () => import("@/components/thank-you-popup").then(mod => mod.ThankYouPopup), 
  { 
    ssr: false,
    loading: () => null // Don't show placeholder for modal
  }
)

interface PageContextType {
  showFormAlert: boolean
  formSubmitted: boolean
  triggerFormAlert: () => void
  openLogin: () => void
  submitForm: () => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageStateProvider({ children }: { children: ReactNode }) {
  const [showFormAlert, setShowFormAlert] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const alertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const triggerFormAlert = useCallback(() => {
    setShowFormAlert(true)
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current)
    alertTimerRef.current = setTimeout(() => {
      setShowFormAlert(false)
    }, 10000)
  }, [])

  const openLogin = useCallback(() => {
    setShowLoginForm(true)
  }, [])

  const submitForm = useCallback(() => {
    setFormSubmitted(true)
    setShowLoginForm(false)
    setShowThankYou(true)
  }, [])

  useEffect(() => {
    return () => {
      if (alertTimerRef.current) clearTimeout(alertTimerRef.current)
    }
  }, [])

  return (
    <PageContext.Provider value={{ showFormAlert, formSubmitted, triggerFormAlert, openLogin, submitForm }}>
      {children}
      {/* Only render popup components when needed to reduce initial JS payload */}
      {showLoginForm && <LoginFormPopup isOpen={showLoginForm} onClose={() => setShowLoginForm(false)} onFormSubmit={submitForm} />}
      {showThankYou && <ThankYouPopup isOpen={showThankYou} onClose={() => setShowThankYou(false)} />}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = useContext(PageContext)
  if (!context) throw new Error("usePageContext must be used within PageStateProvider")
  return context
}
