import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "CCTV Installation",
      description:
        "Professional setup and configuration of CCTV systems for home & business security.",
      icon: "📹",
    },
    {
      title: "24/7 Monitoring",
      description:
        "Round-the-clock surveillance and monitoring services to ensure complete safety.",
      icon: "🛡️",
    },
    {
      title: "Annual Maintenance (AMC)",
      description:
        "Hassle-free annual maintenance contracts to keep your security systems running smoothly.",
      icon: "🔧",
    },
    {
      title: "Remote Access Setup",
      description:
        "Secure cloud and mobile access to your CCTV feeds, anytime, anywhere.",
      icon: "🌐",
    },
    {
      title: "System Upgrade",
      description:
        "Upgrade your existing CCTV system to the latest technology for better performance.",
      icon: "⚡",
    },
    {
      title: "Support & Troubleshooting",
      description:
        "Quick support and repair services to resolve issues and minimize downtime.",
      icon: "🤝",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col py-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our CCTV Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Smart CCTV Solutions for Home & Business – Secure, Reliable, and
          Affordable.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need a Custom CCTV Solution?
        </h2>
        <p className="mb-6">
          Contact us today for a free consultation or request AMC service.
        </p>
        <Link
          href="/amcRequest"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Request AMC
        </Link>
      </section>
    </main>
  );
}
