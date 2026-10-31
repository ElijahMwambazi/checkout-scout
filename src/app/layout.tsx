import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Checkout Scout",
  description: "Check local prices before you buy."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
