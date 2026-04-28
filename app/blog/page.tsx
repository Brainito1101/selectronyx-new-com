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

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
  Stay informed with the Selectronyx Blog, covering electronics compliance, BOM management, and component lifecycle insights. Learn to manage RoHS and REACH requirements, track obsolescence, and make smarter hardware decisions.
            </p>
          </div>

          {/* ✅ ADD THIS SEO CONTENT */}
          <div className="mt-8 max-w-3xl mx-auto text-left">

  <p className="mb-4 text-muted-foreground">
    The <strong>Selectronyx Blog</strong> shares insights on electronics compliance, BOM management, and component lifecycle risks. Learn how to handle regulations like RoHS and REACH while improving hardware decision-making.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">
    What You’ll Learn
  </h2>

  <ul className="list-disc pl-6 mb-4 text-muted-foreground">
    <li>BOM compliance and regulatory strategies</li>
    <li>Component obsolescence and lifecycle tracking</li>
    <li>Sustainable and reliable electronics sourcing</li>
    <li>Total Cost of Ownership (TCO) insights</li>
  </ul>

  <p className="mb-6 text-muted-foreground">
    Selectronyx helps teams reduce risk, ensure compliance, and build smarter, data-driven procurement strategies.
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
