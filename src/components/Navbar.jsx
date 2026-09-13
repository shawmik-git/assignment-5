import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 focus-ring rounded-lg">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7A45" />
            <stop offset="50%" stopColor="#FF3D8F" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect x="4" y="20" width="24" height="6" rx="2" fill="url(#logoGrad)" />
        <rect x="7" y="13" width="18" height="6" rx="2" fill="url(#logoGrad)" opacity="0.75" />
        <rect x="10" y="6" width="12" height="6" rx="2" fill="url(#logoGrad)" opacity="0.55" />
      </svg>
      <span className="font-display text-lg font-bold text-gradient">Dev Stack</span>
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Mobile: hamburger left */}
        <button
          className="focus-ring rounded-lg p-1 text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        
        <div className="md:flex-none">
          <Logo />
        </div>

       
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="focus-ring rounded text-sm text-ink-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center gap-3">
          <button className="focus-ring hidden rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:text-ink sm:inline-block">
            Sign In
          </button>
          <button className="btn-gradient focus-ring rounded-full px-4 py-2 text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-line bg-base px-6 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring block rounded-lg px-2 py-2 text-sm text-ink-muted transition hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-1 sm:hidden">
            <button className="focus-ring block w-full rounded-lg px-2 py-2 text-left text-sm text-ink-muted hover:bg-surface-2 hover:text-ink">
              Sign In
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
