"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  Services: [
    { id: "footer-link-webdev", label: "Website Development", href: "/services" },
    { id: "footer-link-seo", label: "Website SEO", href: "/services" },
    { id: "footer-link-social", label: "Social Media Management", href: "/services" },
    { id: "footer-link-ads", label: "Paid Advertising", href: "/services" },
  ],
  Company: [
    { id: "footer-link-about", label: "About Us", href: "/about" },
    { id: "footer-link-pricing", label: "Pricing", href: "/pricing" },
    { id: "footer-link-industries", label: "Industries", href: "/industries" },
    { id: "footer-link-contact", label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { id: "footer-link-privacy", label: "Privacy Policy", href: "#" },
    { id: "footer-link-terms", label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/[0.02] bg-[#060814] py-16" aria-label="Agency Footer">
      <div className="container-tight grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" id="footer-logo" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-sm text-black">
              G
            </span>
            <span className="font-bold text-sm uppercase tracking-[0.2em] text-white">
              Growth
            </span>
          </Link>
          <p className="body-sm text-xs leading-relaxed max-w-xs">
            We build custom responsive web assets, technical SEO setups, and high conversion Meta/Google paid pipelines.
          </p>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-text-primary">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.id}>
                    <Link
                      id={link.id}
                      href={link.href}
                      className={`text-xs transition-colors duration-200 ${
                        isActive ? "text-amber-400 font-semibold" : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-tight border-t border-white/[0.02] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="body-sm text-xs text-text-tertiary">
          © {new Date().getFullYear()} Growth Agency. All rights reserved.
        </p>
        <p className="body-sm text-xs text-text-tertiary">
          Engineered for high conversion.
        </p>
      </div>
    </footer>
  );
}
