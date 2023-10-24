import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/theme-provide";
import SiteHeader from "./components/SiteHeader";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Praveen Shinde",
  description: "Praveen Shinde Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="text-foreground">
            <SiteHeader />
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
