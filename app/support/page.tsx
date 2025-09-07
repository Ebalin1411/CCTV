"use client";
import { useState } from "react";

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I install Smart CCTV at my home or business?",
      answer:
        "Our team provides professional installation. You can book a free site survey and we will guide you on camera placement, wiring, and monitoring setup.",
    },
    {
      question: "Can I view my CCTV footage on mobile?",
      answer:
        "Yes, our CCTV system supports Android & iOS apps so you can view live feeds and recordings anytime, anywhere.",
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer:
        "Yes, our support team is available 24/7 via phone, email, or WhatsApp to assist with any issues.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">CCTV Secure Solutions Support</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get help with installation, troubleshooting, and support for your home
          & business CCTV systems.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm bg-white dark:bg-gray-800"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-900 dark:text-gray-100 font-medium"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-3 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Form */}
      <section className="max-w-2xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contact Support
        </h2>
        <form className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <textarea
            placeholder="Describe your issue..."
            rows={4}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Quick Support Links */}
      <section className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              📞 Call Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">+91 98765 43210</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              ✉️ Email
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              support@smartcctv.com
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              💬 WhatsApp
            </h3>
            <p className="text-gray-700 dark:text-gray-300">+91 98765 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
}
