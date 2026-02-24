"use client"

interface CtaBannerSectionProps {
  onRequestDemo?: () => void
  onTrySampleData?: () => void
}

export function CtaBannerSection({ onRequestDemo, onTrySampleData }: CtaBannerSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-14 text-center sm:px-12 sm:py-20"
          style={{
            backgroundImage: "linear-gradient(135deg, #0F172A 0%, #1BABA1 100%)",
          }}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />

          <h2 className="relative text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Ready to transform your
            <br />
            hardware intelligence?
          </h2>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestDemo}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Request a Demo
            </button>
            {/* <button
              onClick={onTrySampleData}
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg"
            >
              Try Sample Data
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
