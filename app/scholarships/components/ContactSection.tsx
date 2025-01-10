'use client';

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.div
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <h2 className="text-3xl font-serif text-white mb-4">Get in Touch</h2>
      <p className="text-gray-400">
        For scholarship-related queries, contact us at{' '}
        <a href="mailto:scholarships@eliteclass.pro" className="text-blue-400 hover:text-blue-300">
          scholarships@eliteclass.pro
        </a>
      </p>
    </motion.div>
  );
} 