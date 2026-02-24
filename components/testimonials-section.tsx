import Image from "next/image"

const testimonials = [
  {
    quote:
      "Selectronyx gave us a defensible structure for hardware evaluation. We're no longer relying on fragmented vendor claims.",
    name: "Head of Strategic Procurement",
    role: "Global Technology Firm",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "FairSpec helped us align sourcing decisions with ESG accountability in a way our board understands.",
    name: "Director of Sustainability",
    role: "Enterprise Organization",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "The scoring clarity reduced internal debate and accelerated approvals.",
    name: "IT Procurement Lead",
    role: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-xl bg-background p-6"
            >
              {/* Quote mark */}
              <span
                className="text-4xl font-bold leading-none"
                style={{ color: "#1BABA1", opacity: 0.3 }}
              >
                {"\u201C\u201C"}
              </span>
              <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-foreground sm:text-base">
                {`"${item.quote}"`}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  {item.role && (
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
