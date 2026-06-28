import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";

const appFont = Nunito({
  variable: "--font-app",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Science Lab — IGCSE Year 11",
  description:
    "Interactive Edexcel IGCSE Biology, Chemistry & Physics study guide and question bank for Year 11.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Science Lab",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1226",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${appFont.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <StoreProvider>
          <AppGate>{children}</AppGate>
        </StoreProvider>
      </body>
    </html>
  );
}
