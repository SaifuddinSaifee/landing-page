'use client';

import { motion } from "framer-motion";
import { Gift, ClipboardCheck, ScrollText } from "lucide-react";

interface ScholarshipCardProps {
  title: string;
  description: string;
  items: string[];
  variant: 'blue' | 'emerald' | 'purple';
}

export function ScholarshipCard({ title, description, items, variant }: ScholarshipCardProps) {
  const getIcon = () => {
    const iconColor = `text-${variant}-400`;
    switch (title) {
      case "Benefits":
        return <Gift className={`w-6 h-6 ${iconColor}`} />;
      case "Requirements":
        return <ClipboardCheck className={`w-6 h-6 ${iconColor}`} />;
      case "Terms":
        return <ScrollText className={`w-6 h-6 ${iconColor}`} />;
      default:
        return null;
    }
  };

  const cardStyles = {
    blue: "bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 border-blue-500/10",
    emerald: "bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 border-emerald-500/10",
    purple: "bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5 border-purple-500/10"
  };

  const dotColor = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    purple: "text-purple-400"
  };

  return (
    <motion.div
      className={`rounded-xl p-8 h-full border ${cardStyles[variant]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-2">
        {getIcon()}
        <h3 className="text-2xl font-serif text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-start">
            <span className={`${dotColor[variant]} mr-2`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
} 