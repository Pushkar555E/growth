import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://growthagency.com"),
  title: {
    default: "Growth Agency — Premium Digital Growth & Performance Engine",
    template: "%s | Growth Agency",
  },
  description: "We don't run generic ads. We engineer responsive websites, local SEO blueprints, and high-converting paid acquisition funnels for local businesses.",
  keywords: [
    "Digital Growth Agency",
    "Local Business Marketing",
    "Performance Marketing",
    "Next.js Developer Agency",
    "Technical SEO Services",
    "Google Map Pack Optimization",
    "Meta Ads Management",
    "High Conversion Websites",
  ],
  authors: [{ name: "Growth Team" }],
  creator: "Growth Team",
  publisher: "Growth Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Growth Agency — Premium Digital Growth & Performance Engine",
    description: "We don't run generic ads. We engineer custom web systems, high rank local SEO, and Meta/Google acquisition paths.",
    url: "https://growthagency.com",
    siteName: "Growth Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Agency — Premium Digital Growth Engine",
    description: "We build custom websites and target marketing funnels that local customers can't ignore.",
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
    <html lang="en" className="dark scroll-smooth">
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
      <body className="min-h-screen bg-[#0f172a] text-white font-sans antialiased overflow-x-hidden selection:bg-amber-500/20 selection:text-white">
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
