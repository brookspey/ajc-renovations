import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
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
  metadataBase: new URL("https://ajcrenovations.com"),
  title: {
    default: `${COMPANY_NAME} | Home Renovation Services in Palm Beach County`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "AJC Renovations provides professional kitchen renovation, bathroom renovation, flooring, painting, and drywall services across Palm Beach County, FL. Free estimates available.",
  alternates: {
    canonical: "/",
  },
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
    siteName: COMPANY_NAME,
    locale: "en_US",
    url: "https://ajcrenovations.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "AJC Renovations — Home Renovation Services in Palm Beach County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Home Renovation Services in Palm Beach County`,
    description:
      "Professional home renovation services throughout Palm Beach County. Kitchen, bathroom, flooring, painting, and drywall. Free estimates.",
    images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=630&fit=crop&q=80"],
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
        <MobileCTA />
      </body>
    </html>
  );
}
