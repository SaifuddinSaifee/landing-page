'use client';

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center mb-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-serif text-white my-4 mt-10">
        Excellence Scholarship Programs
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl font-light">
        Rewarding outstanding achievements and dedication in our certification programs.
        Join our community of high achievers.
      </p>
    </motion.div>
  );
} 