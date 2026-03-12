interface FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold text-primary mb-8">
        Frequently Asked Questions
      </h3>
      <div className="divide-y divide-gray-200 rounded-xl bg-gray-50 overflow-hidden">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-bold text-gray-900 hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <svg
                className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
