import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo-footer.png"
            alt="Selectronyx"
            width={160}
            height={40}
            className="h-7 w-auto sm:h-8"
          />
        </Link>
        <p className="text-xs text-[#94A3B8] sm:text-sm">
          &copy; 2026 Selectronyx. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
