import "./globals.css";

export const metadata = {
  title: "Growth Agency",
  description: "Growth Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
