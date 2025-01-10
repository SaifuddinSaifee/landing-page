'use client';

import { motion } from "framer-motion";
import { Scale, ScrollText, ShieldAlert } from "lucide-react";

export function EligibilitySection() {
  const legalTerms = [
    "All scholarship participants must sign terms within 48 hours",
    "EliteClass reserves right to terminate eligibility",
    "Disputes resolved through arbitration in Mountain View, CA",
    "Benefits are non-transferable and non-exchangeable",
    "Tax implications are recipient's responsibility"
  ];

  const complianceViolations = [
    "Academic dishonesty or cheating",
    "Harassment or misconduct",
    "Misuse of EliteClass resources",
    "Violation of program policies",
    "Breach of professional conduct"
  ];

  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.div
        className="bg-zinc-900 rounded-xl p-8"
      >
        <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-3">
          <Scale className="w-8 h-8 text-blue-400" />
          Legal & Compliance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-white mb-4 flex items-center gap-2">
              <ScrollText className="w-5 h-5 text-blue-400" />
              Legal Terms
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {legalTerms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-blue-400" />
              Compliance Violations
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {complianceViolations.map((violation) => (
                <li key={violation}>{violation}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 