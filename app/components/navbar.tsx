'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // icons

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-100">
      <nav className="w-full bg-gray-900 text-white dark:text-white fixed top-0 left-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              CCTV<span className="text-yellow-500">Secure</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link href="/#" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-yellow-500 transition">
              Products
            </Link>
            <Link href="/services" className="hover:text-yellow-500 transition">
              Services
            </Link>
            <Link href="/amc" className="hover:text-yellow-500 transition">
              AMC
            </Link>
            <Link href="/support" className="hover:text-yellow-500 transition">
              Support
            </Link>
            <Link href="/login" className="hover:text-yellow-500 transition">
              Login/Register
            </Link>
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex space-x-4 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className=" fixed top-2 right-0  h-full  shadow-lg z-50 flex flex-col p-6 space-y-6 items-center"
            >
              <button
                className="sd:hidden self-end "
                onClick={() => setOpen(false)}
              >
                <X size={28} />
              </button>
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                <Link
                  href="/#"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500"
                >
                  Products
                </Link>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500"
                >
                  Services
                </Link>
                <Link
                  href="/amc"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500"
                >
                  AMC
                </Link>
                <Link
                  href="/support"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500"
                >
                  Support
                </Link>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500"
                >
                  Login/Register
                </Link>
              </nav>

              <div className="flex space-x-4  mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-500"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-500"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-500"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
