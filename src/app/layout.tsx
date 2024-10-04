import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Hflag - Empowering Halal Living with Blockchain Technology",
  description: "Hflag is a Web3 platform that promotes halal living through blockchain technology, offering token rewards, staking, Dapps, games, and community-driven initiatives.",
  openGraph: {
    title: "Hflag - Empowering Halal Living with Blockchain Technology",
    description: "Explore the Hflag platform, empowering halal living with innovative blockchain solutions, token rewards, and a strong community.",
    url: "https://www.hflag.io",
    siteName: "Hflag",
    images: [
      {
        url: "https://hflag.vercel.app/open-graph.png", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Hflag - Empowering Halal Living with Blockchain Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HflagOfficial", // Replace with your Twitter handle if available
    title: "Hflag - Empowering Halal Living with Blockchain Technology",
    description: "Join Hflag, a Web3 platform that offers blockchain-powered solutions for halal living, token rewards, and community engagement.",
    images: ["https://hflag.vercel.app/open-graph.png"],
  },
  alternates: {
    canonical: "https://www.hflag.io",
    languages: {
      en: "https://www.hflag.io/en",
    },
  },
};

// JSON-LD schema for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hflag",
  "url": "https://www.hflag.io",
  "logo": "https://www.hflag.io/logo.png", // Replace with your logo URL
  "sameAs": [
    "https://www.facebook.com/hflag",
    "https://twitter.com/hflag",
    "https://www.instagram.com/hflag",
  ],
  "description": "Hflag is a Web3 platform promoting halal living through blockchain technology, offering token rewards, staking, Dapps, and community-driven initiatives.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@hflag.io", // Replace with your support email
    "contactType": "Customer Support",
    "areaServed": "Global",
    "availableLanguage": ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hflag is a Web3 platform promoting halal living through blockchain, offering token rewards, staking, and community-driven initiatives." />
        <meta name="keywords" content="halal, Web3, blockchain, token rewards, staking, Dapps, community, Hflag" />
        <meta name="author" content="Hflag" />
        <meta charSet="UTF-8" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hflag - Empowering Halal Living with Blockchain Technology" />
        <meta property="og:description" content="Explore the Hflag platform, empowering halal living with blockchain technology and token rewards." />
        <meta property="og:url" content="https://www.hflag.io" />
        <meta property="og:site_name" content="Hflag" />
        <meta property="og:image" content="https://hflag.vercel.app/open-graph.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HflagOfficial" />
        <meta name="twitter:title" content="Hflag - Empowering Halal Living with Blockchain Technology" />
        <meta name="twitter:description" content="Join Hflag, a Web3 platform offering blockchain-powered halal living solutions." />
        <meta name="twitter:image" content="https://hflag.vercel.app/open-graph.png" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
