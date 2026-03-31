"use client"

import { LeadFormEmbed } from "@/components/lead-form-embed"
import { usePageContext } from "@/components/page-context"

export function HeroFormIsland() {
  const { showFormAlert, submitForm } = usePageContext()

  return (
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
  )
}
