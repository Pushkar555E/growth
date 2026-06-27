import "./globals.css";

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
      </head>
      <body className="min-h-screen bg-[#060814] text-white font-sans antialiased overflow-x-hidden selection:bg-amber-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
