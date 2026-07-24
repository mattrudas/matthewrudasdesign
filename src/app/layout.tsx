import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

// Roboto Flex is the variable font used throughout the Figma design.
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://matthewrudas.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role} at ${site.company}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.name} is a ${site.role.toLowerCase()} at ${site.company}. Selected product, brand, and design-systems work.`,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.name} — ${site.role} at ${site.company}`,
    description: `Selected work by ${site.name}, ${site.role.toLowerCase()} at ${site.company}.`,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role} at ${site.company}`,
    description: `Selected work by ${site.name}, ${site.role.toLowerCase()} at ${site.company}.`,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoFlex.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          {/* Ensure content is visible if JS is unavailable */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
