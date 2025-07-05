import type { Metadata } from "next"
import "../styles/globals.css"
import Provider from "./provider";
import Header from "@/layouts/main/Header";
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "Shivkumar Chauhan — Full-Stack Engineer | TechForEverybody",
  description:
    "Portfolio of Shivkumar Chauhan, a Full-Stack Engineer specializing in React, Next.js, Node.js, AWS and embedded IoT solutions. Explore projects, blog posts and contact information on TechForEverybody.",
  keywords: [
    "Shivkumar Chauhan",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "IoT",
    "Portfolio",
    "TechForEverybody",
    "Web Development"
  ],
  openGraph: {
    title: "Shivkumar Chauhan — Full-Stack Engineer",
    description:
      "Discover the work and projects of Shivkumar Chauhan: React & Next.js apps, Node.js backends, AWS deployments and ESP32-based IoT demos.",
    url: "https://techforeverybody.org/",
    siteName: "TechForEverybody",
    images: [
      {
        url: "https://techforeverybody.org/TechForEverybody.png",
        height: 630,
        alt: "TechForEverybody — Shivkumar Chauhan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivkumar Chauhan — Full-Stack Engineer",
    description:
      "Portfolio of Shivkumar Chauhan: React, Next.js, Node.js, AWS & IoT projects. See demos, code samples, and get in touch.",
    images: ["https://techforeverybody.org/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        data-lt-installed={true}
        className="min-h-screen"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Provider>
            <Header />
            {children}
          </Provider>
        </ThemeProvider>

      </body>
    </html>
  )
}
