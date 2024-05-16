import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noëla portfolio",
  description: "Noëla portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <body>{children}</body>
      <Script src="assets/js/modernizr-custom.js" />
      <Script src="assets/js/classie.js" />
      <Script src="assets/js/main.js" />
    </html>
  );
}
