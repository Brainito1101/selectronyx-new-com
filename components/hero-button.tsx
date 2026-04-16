"use client"

import { usePageContext } from "@/components/page-context"

export function HeroButton() {
  const { formSubmitted, triggerFormAlert } = usePageContext()

  const handleClick = () => {
    if (formSubmitted) {
      window.open("https://app.selectronyx.com/", "_blank", "noopener,noreferrer")
    } else {
      triggerFormAlert()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm"
      style={{
        backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
      }}
    >
      Run a Free BOM Audit
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  )
}
