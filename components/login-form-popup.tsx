"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { LeadFormEmbed } from "@/components/lead-form-embed"

interface LoginFormPopupProps {
  isOpen: boolean
  onClose: () => void
  onFormSubmit?: () => void
}

export function LoginFormPopup({ isOpen, onClose, onFormSubmit }: LoginFormPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-background shadow-2xl animate-in fade-in zoom-in-95"
        style={{ maxHeight: "calc(100dvh - 24px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="shrink-0 px-4 pt-5">
          <h3 className="text-center text-base font-bold text-foreground sm:text-lg">
            Please submit the form
          </h3>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <LeadFormEmbed className="h-[491px] w-full" id="login-popup" onFormSubmit={onFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}
