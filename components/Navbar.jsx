"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border-default bg-bg-primary/80 backdrop-blur-md">
      <div className="container-tight flex items-center justify-between h-16 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-cyan-400 flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
            G
          </span>
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-accent-300 transition-colors">
            GROWTH
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-accent-300" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-primary !px-5 !py-2 !text-sm">
            Free Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
