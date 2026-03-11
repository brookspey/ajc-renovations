"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/peyton@tryastor.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          We&apos;ve received your request and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-dark font-semibold transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* FormSubmit.co config */}
      <input type="hidden" name="_subject" value="New Renovation Estimate Request - AJC Renovations" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="First Name"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="Last Name"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="Email"
          required
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="Phone"
          required
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
          Service Needed
        </label>
        <select
          id="service"
          name="Service Needed"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
        >
          <option value="">Select a service...</option>
          <option value="Kitchen Renovation">Kitchen Renovation</option>
          <option value="Bathroom Renovation">Bathroom Renovation</option>
          <option value="Floor Renovation">Floor Renovation</option>
          <option value="Indoor Painting">Indoor Painting</option>
          <option value="Outdoor Painting">Outdoor Painting</option>
          <option value="Drywall">Drywall</option>
          <option value="Pool Enclosure Restoration">Pool Enclosure Restoration</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="Project Details"
          rows={5}
          placeholder="Tell us about your project — what you're looking to do, approximate timeline, budget range, etc."
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all resize-vertical bg-gray-50 hover:bg-white"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@ajcrenovations.com" className="underline font-semibold">info@ajcrenovations.com</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-base uppercase tracking-wider transition-all hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
