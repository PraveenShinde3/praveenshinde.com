import "./globals.css";
import { ThemeProvider } from "./components/theme-provide";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: "Praveen Shinde",
  description: "Praveen Shinde Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="text-foreground flex justify-center">
            <div className="container tracking-wide px-96">
              <div className="py-20 px-8 ">
                <SiteHeader />
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
