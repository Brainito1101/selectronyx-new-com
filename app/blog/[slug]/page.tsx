import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import { getBlogPost, blogPosts } from "@/lib/blog-data"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Selectronyx`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Selectronyx"
              width={160}
              height={40}
              className="h-6 w-auto sm:h-8"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          {/* Title */}
          <h1 className="mt-6 text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Hero Image */}
          <div className="mt-8 overflow-hidden rounded-xl bg-secondary">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={800}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="mt-10 flex flex-col gap-6">
            {post.content.map((section, i) => (
              <div key={i} className="flex flex-col gap-4">
                {section.heading && (
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="flex flex-col gap-2 pl-5">
                    {section.bullets.map((bullet, k) => (
                      <li
                        key={k}
                        className="list-disc text-sm leading-relaxed text-muted-foreground marker:text-primary sm:text-base"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 rounded-xl bg-secondary p-6 sm:p-8">
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              Ready to make smarter electronics decisions?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Join the waitlist for early access to Selectronyx and start
              evaluating electronics with clarity and confidence.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-md"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
              }}
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
