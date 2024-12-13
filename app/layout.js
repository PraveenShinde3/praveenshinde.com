import "./globals.css";
import { ThemeProvider } from "./components/theme-provide";
import SiteHeader from "./components/SiteHeader";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export const metadata = {
  title: "Praveen Shinde",
  description: "Praveen Shinde Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Praveen Shinde - Portfolio</title>
        <meta
          name="description"
          content="Welcome to Praveen Shinde's personal website, showcasing projects, blogs, and achievements."
        />
        <meta
          name="keywords"
          content="Praveen Shinde, portfolio, web development, programming, projects"
        />
        <meta name="author" content="Praveen Shinde" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Praveen Shinde - Portfolio" />
        <meta
          property="og:description"
          content="Explore the personal projects and achievements of Praveen Shinde."
        />
        <meta
          property="og:image"
          content="https://praveenshinde.com/og-image.jpg"
        />
        <meta property="og:url" content="https://praveenshinde.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praveen Shinde - Portfolio" />
        <meta
          name="twitter:description"
          content="Discover the portfolio and blogs of Praveen Shinde."
        />
        <meta
          name="twitter:image"
          content="https://praveenshinde.com/twitter-image.jpg"
        />
        <meta name="twitter:creator" content="@praveens_code" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="text-foreground flex justify-center">
            <div className="container tracking-wide  sm:px-8 md:px-12 lg:px-40 xl:px-60 2xl:px-96">
              <div className="py-20 md:px-8 ">
                <SiteHeader />
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
