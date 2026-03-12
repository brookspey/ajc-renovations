"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE } from "@/lib/constants";

export default function MobileCTA() {
  const pathname = usePathname();

  // Don't show on the contact page — user is already there
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 safe-area-pb">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wider"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-primary-dark font-bold py-3 rounded-lg text-sm uppercase tracking-wider"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
