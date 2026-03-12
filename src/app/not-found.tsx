import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center py-32">
        <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
