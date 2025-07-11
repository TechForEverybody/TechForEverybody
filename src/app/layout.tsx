import Footer from "@/layouts/main/Footer";
import "../styles/globals.css"
import Provider from "./provider";
import Header from "@/layouts/main/Header";
import { ThemeProvider } from 'next-themes';
import Script from "next/script";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en"
            className="dark"
            style={{ colorScheme: "light" }}
            suppressHydrationWarning={true}
            data-lt-installed={true}
        >
            <head>
                <link rel="preload" href="/TechForEverybody.svg" as="image" />
                <link rel="icon" href="/TechForEverybody.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/TechForEverybody.svg" />
                <link rel="shortcut icon" href="/TechForEverybody.svg" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="description" content="Shivkumar Chauhan’s portfolio: Full-Stack development (React, Next.js, Node.js), AI/ML, Data Science, DevOps. Explore projects, blogs, and get in touch." />
                <meta name="keywords" content="Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Python, AI, Machine Learning, Data Science, Portfolio, Web Development, MERN Stack, GraphQL, DevOps, Docker, Cloud Computing, TechForEverybody, Shivkumar Chauhan" />
                <meta name="author" content="Shivkumar Chauhan" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google-site-verification" content="your-google-site-verification-code" />
                <meta name="msvalidate.01" content="your-bing-site-verification-code" />
                <meta name="yandex-verification" content="your-yandex-site-verification-code" />

                <link rel="canonical" href="https://techforeverybody.org" />
                <Script id="ld-org" type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'TechForEverybody',
                        url: 'https://techforeverybody.org',
                        logo: 'https://techforeverybody.org/TechForEverybody.svg',
                        sameAs: [
                            'https://github.com/TechForEverybody',
                            'https://linkedin.com/in/shiva995'
                        ]
                    })}
                </Script>
                <Script id="ld-website" type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        url: 'https://techforeverybody.org',
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: 'https://techforeverybody.org/search?q={search_term_string}',
                            'query-input': 'required name=search_term_string'
                        }
                    })}
                </Script>
            </head>
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
                        <Footer/>
                    </Provider>
                </ThemeProvider>

            </body>
        </html>
    )
}
