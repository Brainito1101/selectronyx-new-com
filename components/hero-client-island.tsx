"use client"

import { ArrowRight } from "lucide-react"
import { LeadFormEmbed } from "@/components/lead-form-embed"
import { usePageContext } from "@/components/page-context"

export function HeroClientIsland() {
  const { showFormAlert, formSubmitted, triggerFormAlert, submitForm } = usePageContext()

  const handleClick = () => {
    if (formSubmitted) {
      window.open("https://app.selectronyx.com/", "_blank", "noopener,noreferrer")
    } else {
      triggerFormAlert()
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm"
            style={{
              backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
            }}
          >
            Create Free Account
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>

        {/* Stats - Moving these to Server side in the main component for efficiency */}
      </div>

      <div className="flex w-full max-w-sm flex-col gap-3 lg:w-[380px]">
        {showFormAlert && (
          <div className="w-full animate-in fade-in slide-in-from-top-2 rounded-xl border border-yellow-400 bg-yellow-50 px-4 py-3 text-center shadow-lg">
            <p className="text-sm font-semibold text-yellow-800 sm:text-base">
              Please submit the form
            </p>
          </div>
        )}
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
          <LeadFormEmbed className="h-[500px] w-full" id="hero" onFormSubmit={submitForm} />
        </div>
      </div>
    </>
  )
}
