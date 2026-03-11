"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY_NAME, PHONE } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight">
            {COMPANY_NAME}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-5 py-2 rounded-lg transition-colors"
            >
              {PHONE}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-primary-light pt-4 flex flex-col gap-3">
            <Link href="/" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/services" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/about" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-5 py-2 rounded-lg transition-colors text-center mt-2"
            >
              Call {PHONE}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
