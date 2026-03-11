"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { COMPANY_NAME, PHONE } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? "h-0" : "h-10"}`}>
        <div className="bg-primary-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10 text-sm">
            <span className="hidden sm:block text-gray-300">Serving all of Palm Beach County, FL</span>
            <div className="flex items-center gap-6">
              <a href={`mailto:info@ajcrenovations.com`} className="text-gray-300 hover:text-white transition-colors">
                info@ajcrenovations.com
              </a>
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="text-accent font-semibold">
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link
            href="/"
            className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            <span className="text-accent">AJC</span> Renovations
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-2.5 rounded text-sm uppercase tracking-wider transition-all hover:shadow-lg"
            >
              Free Estimate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
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
          <nav className="md:hidden pb-6 pt-2 flex flex-col gap-1 bg-white rounded-b-xl shadow-xl -mx-4 px-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-accent py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-lg transition-colors text-center mt-2"
            >
              Call {PHONE}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
