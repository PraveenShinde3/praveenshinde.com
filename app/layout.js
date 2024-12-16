import "./globals.css";
import { ThemeProvider } from "./components/theme-provide";
import SiteHeader from "./components/SiteHeader";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export const metadata = {
  title: "Praveen Shinde - Portfolio",
  description:
    "Explore the personal projects, achievements, and expertise of Praveen Shinde in web development and UI design.",
  keywords: [
    "Praveen Shinde",
    "Portfolio",
    "Web Developer",
    "UI Designer",
    "Next.js",
    "React",
    "Frontend Development",
    "Tailwind CSS",
    "Open Source Projects",
  ],
  author: "Praveen Shinde",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    type: "website",
    url: "https://praveenshinde.com/",
    title: "Praveen Shinde - Portfolio",
    description:
      "Explore the personal projects, achievements, and expertise of Praveen Shinde in web development and UI design.",
    image:
      "https://res.cloudinary.com/dckc5lez0/image/upload/v1734101206/Portfolio_wckv4i.png",
    locale: "en_US",
    site_name: "Praveen Shinde - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@praveens_code",
    creator: "@praveens_code",
    title: "Praveen Shinde - Portfolio",
    description:
      "Explore the personal projects, achievements, and expertise of Praveen Shinde in web development and UI design.",
    image:
      "https://res.cloudinary.com/dckc5lez0/image/upload/v1734101206/Portfolio_wckv4i.png",
  },
  themeColor: "#3178c6", // Adjust based on the site's primary color
  favicon: "/favicon.ico",
  canonical: "https://praveenshinde.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
