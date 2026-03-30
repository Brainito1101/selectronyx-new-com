import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Feature Founder's Note Card - Refined 2nd Reference Style */}
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-[2rem] border border-primary/10 bg-background p-8 sm:p-12 shadow-[0_15px_40px_rgba(27,171,161,0.08)] lg:p-14">
            
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
              
              {/* Content (Left) */}
              <div className="order-2 flex flex-1 flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                
                {/* Logo Placeholder (matching ref style) */}
                <div className="mb-6 flex items-center gap-2 opacity-80">
                   <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                   </div>
                   <span className="text-sm font-bold tracking-tight text-foreground uppercase">Selectronyx</span>
                </div>

                {/* Quote Text - Minimized font and length as requested */}
                <blockquote className="mb-6 max-w-lg text-base font-medium leading-relaxed text-foreground sm:text-lg lg:text-xl lg:leading-[1.5]">
                  "Selectronyx was born during my time at ASML to bridge the gap in fragmented BOM data. We built FairSpec to give hardware teams the automated, audit-ready intelligence I wish I'd had."
                </blockquote>

                {/* Signature */}
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-foreground sm:text-base">
                     Ian
                  </p>
                  <p className="text-[11px] font-bold tracking-wider text-primary uppercase">
                    Founder & CEO (EX-ASML)
                  </p>
                </div>
              </div>

              {/* Profile Image (Right) - Flipped as per 2nd reference */}
              <div className="order-1 shrink-0 lg:order-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/5 shadow-lg sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                  <Image
                    src="https://res.cloudinary.com/dspez5cnn/image/upload/v1774868323/Frame_317_zocqtg.png"
                    alt="Ian - Founder & CEO"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 256px"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>

            {/* Subtle Star Rating in content */}
            <div className="absolute right-12 top-10 flex gap-0.5 opacity-40 lg:right-auto lg:left-[calc(50%+4rem)] lg:top-14">
                {[...Array(0)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
