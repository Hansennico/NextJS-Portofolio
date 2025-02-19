import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Default page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-black">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
