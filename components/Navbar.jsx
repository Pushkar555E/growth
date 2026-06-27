"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "nav-services", label: "Services", href: "/services" },
  { id: "nav-industries", label: "Industries", href: "/industries" },
  { id: "nav-pricing", label: "Pricing", href: "/pricing" },
  { id: "nav-blog", label: "Blog", href: "/blog" },
  { id: "nav-about", label: "About", href: "/about" },
  { id: "nav-faq", label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">
      <nav 
        className="container-tight flex items-center justify-between h-20" 
        aria-label="Global Navigation"
      >
        {/* Logo */}
        <Link 
          href="/" 
          id="nav-logo" 
          className="flex items-center group focus:outline-none"
        >
          <img 
            src="/Horizontal_logo.png" 
            alt="Growth Nest" 
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
          />
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
                  isActive ? "text-amber-500 font-semibold" : "text-slate-500 hover:text-slate-900"
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
