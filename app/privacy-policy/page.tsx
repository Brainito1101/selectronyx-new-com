import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Selectronyx",
  description: "Privacy Policy for Selectronyx website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 23/02/2026</p>

          <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
            <p>
              Selectronyx respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our Website.
            </p>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Information We Collect</h2>
              <p>We may collect limited personal information when you:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-5">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Fill out a contact form
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Request a demo or consultation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Subscribe to updates or communications
                </li>
              </ul>
              <p className="mt-3">
                This information may include your name, email address, company name, job title, and any details you voluntarily provide.
              </p>
              <p className="mt-3">
                We may also collect non-personal information such as browser type, device information, IP address, and usage data for analytics and performance improvement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">How We Use Information</h2>
              <p>We use collected information to:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-5">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Respond to inquiries and requests
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Provide product updates, insights, or relevant communications
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Improve Website functionality and user experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Support internal analytics and business operations
                </li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Cookies and Analytics</h2>
              <p>
                The Website may use cookies or similar tracking technologies to understand how visitors interact with the site. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Data Security</h2>
              <p>
                We implement reasonable administrative and technical measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Third-Party Services</h2>
              <p>
                We may use trusted third-party tools (such as analytics or CRM platforms) to operate and improve our services. These providers are obligated to handle data responsibly and in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or request deletion of your personal information. You may also opt out of non-essential communications at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle data, please contact us at:{" "}
                <a href="mailto:info@selectronyx.com" className="text-primary underline hover:text-primary/80">
                  info@selectronyx.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
