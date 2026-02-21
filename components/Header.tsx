'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Modern Restaurant
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="#menu" className="text-gray-700 hover:text-gray-900">
            Menu
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="#reservations" className="text-gray-700 hover:text-gray-900">
            Reservations
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden px-4 pb-4"
        >
          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Menu
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="#reservations"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Reservations
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Contact
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
