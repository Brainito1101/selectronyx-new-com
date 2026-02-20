"use client"

import { X } from "lucide-react"

interface FormAlertModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FormAlertModal({ isOpen, onClose }: FormAlertModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-background p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
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

          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            Access Required
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Please submit the form to access the AIM.
          </p>

          <button
            onClick={onClose}
            className="mt-2 w-full rounded-lg px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
            }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
