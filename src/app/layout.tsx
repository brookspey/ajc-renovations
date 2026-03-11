import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_NAME } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Home Renovation Services in Palm Beach County`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "AJC Renovations provides professional kitchen renovation, bathroom renovation, flooring, painting, and drywall services across Palm Beach County, FL. Free estimates available.",
  keywords: [
    "home renovation Palm Beach County",
    "kitchen renovation West Palm Beach",
    "bathroom renovation Jupiter",
    "painting services Palm Beach County",
    "drywall contractor Wellington",
    "floor renovation Delray Beach",
    "home remodeling Boynton Beach",
  ],
  openGraph: {
    title: `${COMPANY_NAME} | Home Renovation Services in Palm Beach County`,
    description:
      "Professional home renovation services throughout Palm Beach County. Kitchen, bathroom, flooring, painting, and drywall. Free estimates.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
