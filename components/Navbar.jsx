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
        className="container-tight flex items-center justify-between h-16" 
        aria-label="Global Navigation"
      >
        {/* Logo */}
        <Link 
          href="/" 
          id="nav-logo" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
                      <img 
              src="/logo.jpeg" 
              alt="Growth Nest Logo" 
              className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                const fb = document.getElementById("nav-logo-fallback");
                if (fb) fb.classList.remove("hidden");
              }}
            />
            <span 
              id="nav-logo-fallback" 
              className="absolute inset-0 rounded-lg flex items-center justify-center font-extrabold text-[10px] text-white group-hover:scale-[1.03] transition-transform duration-300 hidden"
              style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
            >
              GN
            </span>
          </div>
                    <span className="font-bold text-sm uppercase tracking-[0.2em] text-slate-900 group-hover:text-amber-500 transition-colors duration-300">
            Growth Nest
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
