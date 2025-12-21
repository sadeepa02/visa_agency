import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // <-- Import Google Font
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-montserrat", // optional for CSS variable
});

export const metadata: Metadata = {
  title: "SIT International Education",
  icons: {
    icon: "/favicon.ico",
  },
  description: "SIT International Education - Your Gateway to Studying in Russia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat grainy-light antialiased`}>
        {children}
        <Toaster richColors closeButton theme="light" />
      </body>
    </html>
  );
}

