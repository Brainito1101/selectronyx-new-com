import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Electronics Compliance Blog | BOM, RoHS & Lifecycle Tips",
  description:
    "Stay ahead of electronics compliance. Read expert articles on BOM risk,  RoHS, REACH, component obsolescence, PCN tracking, and total cost of ownership.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          
          {/* Page Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Latest Insights
            </h1>

            {/* ✅ UPDATED PARAGRAPH */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Stay informed with the Selectronyx Blog, where we share expert insights on electronics compliance, BOM (Bill of Materials) management, and component lifecycle intelligence. Learn how to navigate global regulations like RoHS and REACH, track component obsolescence, and make smarter, data-driven decisions for sustainable and efficient hardware procurement.
            </p>
          </div>

          {/* ✅ ADD THIS SEO CONTENT */}
          <div className="mx-auto mt-10 max-w-3xl text-muted-foreground text-sm leading-relaxed">
            
            <p className="mb-4">
              The Selectronyx Blog is designed to help organizations understand and manage the growing complexity of electronics compliance and supply chain risk. With increasing regulatory pressure and rapid component lifecycle changes, businesses need a structured approach to BOM intelligence and procurement decision-making.
            </p>

            <p className="mb-4">
              Selectronyx enables teams to monitor compliance with global standards such as RoHS and REACH, track component obsolescence, and evaluate electronic components based on sustainability, reliability, and total cost of ownership (TCO). These insights help reduce risk, improve transparency, and support long-term strategic planning.
            </p>

            <h2 className="text-base font-semibold mt-6 mb-2">
              What You’ll Learn
            </h2>

            <ul className="list-disc pl-6 mb-4">
              <li>BOM compliance strategies aligned with global regulations</li>
              <li>Component lifecycle management and obsolescence tracking</li>
              <li>Evaluating electronic components for sustainability and performance</li>
              <li>Understanding Total Cost of Ownership (TCO) in hardware decisions</li>
              <li>Reducing risks in global electronics supply chains</li>
            </ul>

            <h2 className="text-base font-semibold mt-6 mb-2">
              Why Selectronyx
            </h2>

            <p className="mb-6">
              Selectronyx combines compliance intelligence, supplier insights, and lifecycle data into a single platform, helping organizations make informed decisions with confidence. By integrating risk analysis and sustainability metrics, Selectronyx supports the development of more resilient and compliant electronics ecosystems.
            </p>

          </div>

          {/* Blog Cards */}
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="flex">
                <article className="group flex flex-1 cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary hover:shadow-lg">
                  {/* Image */}
                  <div className="p-5 pb-0 sm:p-6 sm:pb-0">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        width={600}
                        height={360}
                        className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs text-muted-foreground">
                      {post.date}
                      <span className="mx-2">{"•"}</span>
                      {post.readTime}
                    </p>
                    <h2 className="mt-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-base">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
