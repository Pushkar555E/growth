"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { id: "footer-link-webdev", label: "Website Development", href: "/services/web-development" },
    { id: "footer-link-seo", label: "Website SEO", href: "/services/seo" },
    { id: "footer-link-social", label: "Social Media Management", href: "/services/social-media" },
    { id: "footer-link-ads", label: "Paid Advertising", href: "/services/paid-advertising" },
  ],
  Company: [
    { id: "footer-link-about", label: "About Us", href: "/about" },
    { id: "footer-link-proof", label: "Case Studies", href: "/case-studies" },
    { id: "footer-link-pricing", label: "Pricing", href: "/pricing" },
    { id: "footer-link-industries", label: "Industries", href: "/industries" },
    { id: "footer-link-faq", label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/[0.02] bg-[#0f172a] py-16" aria-label="Agency Footer">
      <div className="container-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
        
        {/* Brand - 3 cols */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" id="footer-logo" className="flex items-center gap-2 group w-max">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img 
                src="/logo.jpeg" 
                alt="Conversion X Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fb = document.getElementById("footer-logo-fallback");
                  if (fb) fb.classList.remove("hidden");
                }}
              />
              <span 
                id="footer-logo-fallback" 
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-sm text-black hidden"
              >
                C
              </span>
            </div>
            <span className="font-bold text-sm uppercase tracking-[0.2em] text-white">
              Conversion X
            </span>
          </Link>
          <p className="body-sm text-xs leading-relaxed max-w-xs font-light text-text-secondary">
            We build custom responsive web assets, technical SEO setups, and high conversion Meta/Google paid campaigns.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-text-secondary hover:text-white hover:border-white/[0.12] transition-all duration-200" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-text-secondary hover:text-white hover:border-white/[0.12] transition-all duration-200" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-text-secondary hover:text-white hover:border-white/[0.12] transition-all duration-200" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-text-secondary hover:text-white hover:border-white/[0.12] transition-all duration-200" aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-1.016-1.07-1.815-2.085-2.087-1.834-.49-9.196-.49-9.196-.49s-7.363 0-9.196.49c-1.016.272-1.814 1.071-2.087 2.087-.49 1.834-.49 9.196-.49 9.196s0 7.362.49 9.196c.273 1.016 1.07 1.815 2.086 2.086 1.833.49 9.196.49 9.196.49s7.363 0 9.196-.49c1.015-.271 1.813-1.07 2.086-2.086.49-1.834.49-9.196.49-9.196s0-7.362-.49-9.196zm-14.654 11.236v-10.8l6.452 5.4-6.452 5.4z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Columns - 4 cols total */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="lg:col-span-2 space-y-4">
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

        {/* Direct Contacts - 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-text-primary">
            Contacts
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href="mailto:hello@conversionx.in" className="text-xs text-text-secondary hover:text-white transition-colors">
                hello@conversionx.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a
                href="https://wa.me/916290819569"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-text-secondary hover:text-white transition-colors"
              >
                +91 62908 19569
              </a>
            </li>
          </ul>
        </div>

        {/* Mini CTA Block - 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-5 rounded-lg bg-white/[0.01] border border-white/[0.03] space-y-3">
            <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-white">Ready to grow?</h5>
            <p className="text-[10px] text-text-secondary font-light leading-relaxed">Let&apos;s map an outcomes blueprint.</p>
            <Link href="/contact" className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 hover:text-amber-300 transition-colors">
              Book a Call <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="container-tight border-t border-white/[0.02] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="body-sm text-xs text-text-tertiary">
          © {new Date().getFullYear()} Conversion X. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-text-tertiary">
          <a href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-text-secondary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
