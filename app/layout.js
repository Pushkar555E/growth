import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://growthnest.in"),
  title: {
    default: "Growth Nest — Digital Marketing Agency",
    template: "%s | Growth Nest",
  },
  description: "Growth Nest helps local businesses grow with performance-driven custom websites, local SEO, social media management, and high-ROAS paid ad campaigns.",
  keywords: [
    "Digital Marketing Agency",
    "Growth Nest",
    "Local Business Marketing",
    "Performance Marketing",
    "Next.js Web Development",
    "Technical SEO Services",
    "Google Map Pack Optimization",
    "Meta Ads Management",
    "High Conversion Websites",
    "Social Media Management",
  ],
  authors: [{ name: "Growth Nest Team" }],
  creator: "Growth Nest",
  publisher: "Growth Nest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Growth Nest — Digital Marketing Agency",
    description: "We engineer custom websites, high-rank local SEO, and Meta/Google acquisition paths that grow local businesses.",
    url: "https://growthnest.in",
    siteName: "Growth Nest",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Nest — Digital Marketing Agency",
    description: "Custom websites, local SEO, and high-ROAS paid ads for local businesses that want measurable growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager - Head */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M5DX6BV7');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-cyan-400/20 selection:text-slate-900">
        {/* Google Tag Manager - Body (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5DX6BV7"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
