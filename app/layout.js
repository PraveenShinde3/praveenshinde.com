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
        <meta name="title" content="Praveen Shinde - Portfolio" />
        <meta
          name="description"
          content="Explore the personal projects and achievements of Praveen Shinde."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://praveenshinde.com/" />
        <meta property="og:title" content="Praveen Shinde - Portfolio" />
        <meta
          property="og:description"
          content="Explore the personal projects and achievements of Praveen Shinde."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dckc5lez0/image/upload/v1734101206/Portfolio_wckv4i.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/praveens_code" />
        <meta property="twitter:title" content="Praveen Shinde - Portfolio" />
        <meta
          property="twitter:description"
          content="Explore the personal projects and achievements of Praveen Shinde."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dckc5lez0/image/upload/v1734101309/Frame_49_1_o5mudn.png"
        />
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
