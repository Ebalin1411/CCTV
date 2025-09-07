// app/products/page.tsx (Next.js 13+ with App Router)
"use client";

import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "CCTV Camera",
    description: "High-definition night vision CCTV camera.",
    price: "₹4,999",
    image: "/cctv1.jpg",
  },
  {
    id: 2,
    name: "DVR System",
    description: "Secure DVR with 1TB storage for recording.",
    price: "₹7,499",
    image: "/cctv3.jpg",
  },
  {
    id: 3,
    name: "Installation Service",
    description: "Professional CCTV installation and setup.",
    price: "₹1,999",
    image: "/cctv4.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 lg:px-20">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1">
                {product.description}
              </p>
              <p className="text-lg font-bold text-blue-600 mt-3">
                {product.price}
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
