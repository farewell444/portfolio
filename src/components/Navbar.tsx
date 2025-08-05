import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="font-bold text-lg hover:text-primary transition-colors">
          MyPortfolio
        </Link>
        <nav className="flex items-center gap-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}