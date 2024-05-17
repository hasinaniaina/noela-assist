import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
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
      <body>
        <div className="absolute  w-screen h-screen z-30" id="mask">
          <div className="mask-left-right-holder flex w-full h-full">
            <div className="mask-left h-full w-[50%] bg-custom-blue" id="mask-left"></div>
            <div className="mask-right h-full w-[50%] bg-custom-fonceBlue" id="mask-right"></div>
          </div>
          <img src="assets/images/logo.png"  alt="noela logo" id="logo" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%]" />
        </div>
        {children}
        <Toaster />
      </body>
      <Script src="assets/js/modernizr-custom.js" />
      <Script src="assets/js/classie.js" />
      <Script src="assets/js/main.js" />
    </html>
  );
}
