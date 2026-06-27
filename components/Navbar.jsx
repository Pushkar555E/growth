"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">
      <nav 
        className="container-tight flex items-center justify-between py-4 min-h-[5rem]" 
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
            className="w-40 sm:w-52 md:w-64 h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
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

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            href="/contact" 
            id="nav-cta-audit" 
            className="btn-primary !px-3 sm:!px-4 !py-1.5 !text-[10px] sm:!text-xs !rounded-md uppercase tracking-wider font-semibold whitespace-nowrap"
          >
            Free Audit
          </Link>
          
          <button 
            className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col py-2 px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium uppercase tracking-widest py-4 border-b border-slate-50 last:border-0 ${
                    isActive ? "text-amber-500 font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
