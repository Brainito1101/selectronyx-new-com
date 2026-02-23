import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions - Selectronyx",
  description: "Terms and Conditions for using Selectronyx website and services.",
}

export default function TermsAndConditionsPage() {
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
            {"Terms & Conditions"}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 23/02/2026</p>

          <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
            <p>
              {"Welcome to Selectronyx (\u201CCompany\u201D, \u201Cwe\u201D, \u201Cour\u201D, \u201Cus\u201D). By accessing or using "}
              <a href="https://www.selectronyx.com/" className="text-primary underline hover:text-primary/80">
                https://www.selectronyx.com/
              </a>
              {" (the \u201CWebsite\u201D), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Website."}
            </p>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Use of Website</h2>
              <p>
                Selectronyx provides information, tools, and insights related to electronic component risk, compliance, and supply-chain decision support. The content on this Website is for general informational and business purposes only and does not constitute legal, regulatory, or professional advice.
              </p>
              <p className="mt-3">
                You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else{"'"}s use of the Website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Intellectual Property</h2>
              <p>
                All content on this Website, including text, graphics, logos, product descriptions, frameworks, and software-related materials, is the intellectual property of Selectronyx or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, modify, distribute, or commercially exploit any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Accuracy of Information</h2>
              <p>
                While we strive to keep the information on the Website accurate and up to date, Selectronyx makes no warranties or representations regarding the completeness, accuracy, or reliability of any content. Any reliance you place on such information is strictly at your own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Third-Party Links</h2>
              <p>
                The Website may contain links to third-party websites or services. These links are provided for convenience only. Selectronyx has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Selectronyx shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of, or inability to use, the Website or reliance on any information provided.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the Website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the applicable jurisdiction where Selectronyx operates, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Contact</h2>
              <p>
                For any questions regarding these Terms & Conditions, please contact us at:{" "}
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
