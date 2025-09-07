"use client";
import { useState } from "react";

export default function AmcRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // Example: call your ASP.NET Core API endpoint
      const res = await fetch("http://localhost:5000/api/amc-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("⚠️ Server error. Try again later.");
    }
  };

  return (
    <div className="flex flex-col py-20 min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg mx-auto ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Request AMC Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company / Business Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Request
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
