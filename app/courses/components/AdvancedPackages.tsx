'use client';

import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUp } from 'lucide-react';
import { fadeInUp } from "./utils";
import { CoursePackage, certificationDescriptions, certificationCodes } from "./types";

const advancedPackages: CoursePackage[][] = [
  [
    { title: "Azure + AI + Security", certs: ["Cloud", "AI", "SC"] },
    { title: "Azure + AI + Data", certs: ["Cloud", "AI", "DP"] },
  ],
  [
    { title: "Azure + AI + Power Platform", certs: ["Cloud", "AI", "PL"] },
    { title: "Azure + AI + Microsoft 365", certs: ["Cloud", "AI", "MS"] }
  ]
];

export function AdvancedPackages() {
  const scrollToEliteAdvantages = () => {
    const eliteSection = document.getElementById('elite-career-advantages');
    if (eliteSection) {
      eliteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="mb-24"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-white mb-4">
          Advanced Certification Packages
        </h2>
        <p className="text-gray-400 text-lg">
          Specialized combinations for focused career paths
        </p>
      </div>

      <motion.div
        className="relative"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-8 text-white shadow-xl">
          <div className="flex items-center space-x-3 flex-wrap gap-y-2 mb-8">
            <Badge className="bg-gray-100 text-gray-900 px-4 py-1 font-medium">
              Advanced Package
            </Badge>
            <span className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">3 Week Program</span>
            <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium flex items-center">
              <span className="mr-1">✨</span> Includes 3 free certification exam vouchers (worth $297) with your course purchase
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800 mb-4">
            {advancedPackages.map((packageGroup, groupIndex) => (
              <div key={groupIndex} className={`space-y-6 ${groupIndex === 1 ? 'pt-8 md:pt-0 md:pl-8' : 'pb-8 md:pb-0 md:pr-8'}`}>
                {packageGroup.map((package_, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-2xl font-serif text-white mb-4">
                      {package_.title}
                    </h3>

                    <ul className="space-y-3">
                      {package_.certs.map((cert) => (
                        <li key={cert} className="flex items-center space-x-3 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" />
                          <span>{certificationDescriptions[cert]}<span className="text-blue-400">{certificationCodes[cert]}</span></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm text-center mb-8">* Students can opt for any one of these packages</p>

          <button 
            onClick={scrollToEliteAdvantages}
            className="w-full text-center py-3 text-gray-400 hover:text-gray-300 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span className="text-sm">Elite Career Advantages included</span>
            <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
            <div>
              <span className="text-3xl font-serif text-white">
                $3,499 USD
              </span>
              <p className="text-gray-400 mt-2">Including 3 certifications exam fees</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
} 