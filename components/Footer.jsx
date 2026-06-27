"use client";

import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Website Development", href: "/services" },
    { label: "Website SEO", href: "/services" },
    { label: "Social Media Management", href: "/services" },
    { label: "Paid Advertising", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary py-16">
      <div className="container-tight grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-cyan-400 flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
              G
            </span>
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-accent-300 transition-colors">
              GROWTH
            </span>
          </Link>
          <p className="body-sm">
            We don't run ads. We build businesses that customers can't ignore. Transparent, data-driven growth.
          </p>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-text-primary">
              {title}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-tight border-t border-border-default mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="body-sm text-xs">
          © {new Date().getFullYear()} Growth Agency. All rights reserved.
        </p>
        <p className="body-sm text-xs">
          Built with speed, accuracy, and precision.
        </p>
      </div>
    </footer>
  );
}
