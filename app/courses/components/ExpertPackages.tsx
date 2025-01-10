'use client';

import { Badge } from "@/app/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowUp, Flag } from 'lucide-react';
import { expertFeatures } from "./features";
import { fadeInUp } from "./utils";
import { FeatureCard } from "./FeatureCard";
import { CoursePackage, certificationDescriptions, certificationCodes } from "./types";
import { useRef } from "react";

const expertPackages: CoursePackage[] = [
  { title: "Azure + AI + Data + Power Platform", certs: ["Cloud", "AI", "DP", "PL"] },
  { title: "Azure + AI + Microsoft 365 + Security", certs: ["Cloud", "AI", "MS", "SC"] }
];

export function ExpertPackages() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const scrollToEliteAdvantages = () => {
    const eliteSection = document.getElementById('elite-career-advantages');
    if (eliteSection) {
      eliteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="mb-24"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-white mb-4">
          Expert Microsoft Certification Packages
        </h2>
        <p className="text-gray-400 text-lg">
          Advanced certifications with exclusive Microsoft benefits
        </p>
      </div>

      <motion.div
        className="relative"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Popular Flag */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="absolute -right-3 top-6 z-10"
        >
          <div className="relative">
            {/* Main flag */}
            <div className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-l-lg shadow-lg">
              <Flag className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">Most Popular</span>
            </div>
            {/* Folded part */}
            <div 
              className="absolute top-full right-0"
              style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '8px 8px 0 0',
                borderColor: 'rgb(30 64 175) transparent transparent transparent'
              }}
            />
          </div>
        </motion.div>

        <div className="backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-8 text-white shadow-xl">
          <div className="flex items-center space-x-3 flex-wrap gap-y-2 mb-8">
            <Badge className="bg-gray-100 text-gray-900 px-4 py-1 font-medium">
              Expert Package
            </Badge>
            <span className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">4 Week Program</span>
            <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium flex items-center">
              <span className="mr-1">✨</span> Includes 4 free certification exam vouchers (worth $396) with your course purchase
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800 mb-4">
            {expertPackages.map((package_, index) => (
              <div key={index} className={`space-y-6 ${index === 1 ? 'pt-8 md:pt-0 md:pl-8' : 'pb-8 md:pb-0 md:pr-8'}`}>
                <h3 className="text-2xl font-serif text-white">
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

          <p className="text-gray-400 text-sm text-center mb-8">* Students can opt for either one of these packages</p>

          <button 
            onClick={scrollToEliteAdvantages}
            className="w-full text-center py-3 text-gray-400 hover:text-gray-300 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span className="text-sm">Elite Career Advantages included</span>
            <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="border-t border-gray-800 pt-8">
            <div className="space-y-6">
              <h4 className="font-serif text-lg text-white text-center">Expert Exclusive Benefits:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertFeatures.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} variant="expert" />
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-3xl font-serif text-white">
                  $4,499 USD
                </span>
                <p className="text-gray-400 mt-2">Including 4 certifications exam fees</p>
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
        </div>
      </motion.div>
    </motion.section>
  );
} 