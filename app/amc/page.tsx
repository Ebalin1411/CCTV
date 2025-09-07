import Link from "next/link";
import React from "react";
import AmcRequestForm from "../amcRequest/page";

const page = () => {
  return (
    <div className="flex flex-col py-20 min-h-screen">
      {" "}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Reliable CCTV AMC Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Enjoy peace of mind with hassle-free maintenance. Our expert team
          ensures your CCTV systems are always up and running.
        </p>
        <Link
          href="/amcRequest"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          Request AMC Plan
        </Link>
        <AmcRequestForm />
      </section>
    </div>
  );
};

export default page;
