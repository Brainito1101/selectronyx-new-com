"use client"

import { useEffect } from "react"

interface FormAlertModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FormAlertModal({ isOpen, onClose }: FormAlertModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 1300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4">
      <div className="w-full max-w-sm animate-in fade-in zoom-in-95 rounded-2xl bg-background p-6 text-center shadow-2xl sm:p-8">
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)" }}
          >
            <svg
              className="h-7 w-7 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground">Please submit the form.</h3>
        </div>
      </div>
    </div>
  )
}
