import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  onLoginClick?: () => void
  formSubmitted?: boolean
}

export function Header({ onLoginClick, formSubmitted }: HeaderProps) {
  const handleClick = () => {
    if (formSubmitted) {
      window.open("https://app.selectronyx.com/", "_blank", "noopener,noreferrer")
    } else {
      onLoginClick?.()
    }
  }
  return (
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
        <button
          onClick={handleClick}
          className="shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-md sm:rounded-lg sm:px-5 sm:py-2 sm:text-sm"
          style={{
            backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
          }}
        >
          Login to App
        </button>
      </div>
    </header>
  )
}
