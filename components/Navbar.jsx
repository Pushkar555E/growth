"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "nav-services", label: "Services", href: "/services" },
  { id: "nav-industries", label: "Industries", href: "/industries" },
  { id: "nav-pricing", label: "Pricing", href: "/pricing" },
  { id: "nav-blog", label: "Blog", href: "/blog" },
  { id: "nav-about", label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.02] bg-[#0b0f19]/70 backdrop-blur-xl">
      <nav 
        className="container-tight flex items-center justify-between h-16" 
        aria-label="Global Navigation"
      >
        {/* Logo */}
        <Link 
          href="/" 
          id="nav-logo" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-sm text-black group-hover:scale-[1.03] transition-transform duration-300">
            G
          </span>
          <span className="font-bold text-sm uppercase tracking-[0.2em] text-white group-hover:text-amber-400 transition-colors duration-300">
            Growth
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                id={link.id}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-amber-400" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            id="nav-cta-audit" 
            className="btn-primary !px-4 !py-1.5 !text-xs !rounded-md uppercase tracking-wider font-semibold"
          >
            Free Audit
          </Link>
        </div>
      </nav>
    </header>
  );
}
