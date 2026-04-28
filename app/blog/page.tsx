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

            {/* ✅ Paragraph 1 */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explore the Selectronyx Blog for insights on electronics compliance, BOM management, and component lifecycle.
            </p>

            {/* ✅ Paragraph 2 */}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Learn to manage RoHS and REACH, track component obsolescence, reduce risk, and make smarter hardware decisions.
            </p>

          </div>

          {/* ✅ CENTERED BLOCK + LEFT LIST */}
          <div className="mt-6 max-w-2xl mx-auto text-center">

            <ul className="list-disc list-inside text-left mx-auto w-fit text-muted-foreground text-sm space-y-1">
              <li>BOM compliance strategies</li>
              <li>Lifecycle & obsolescence tracking</li>
              <li>Sustainable sourcing</li>
              <li>Total Cost of Ownership (TCO) insights</li>
            </ul>

          </div>

        </div>
      </main>
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
