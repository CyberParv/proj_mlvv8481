'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4"
      aria-label="Hero section with welcome message"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Modern Restaurant</h1>
        <p className="text-xl max-w-xl mx-auto">
          Enjoy a fine dining experience with fresh ingredients and excellent
          service.
        </p>
      </motion.div>
    </section>
  );
}
