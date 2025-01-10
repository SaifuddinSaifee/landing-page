'use client';

import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp } from "./utils";
import { CheckCircle2, ArrowUp } from 'lucide-react';

export function PremiumPackage() {
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
      <div className="relative">
        <div className="backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-8 text-white shadow-xl">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 flex-wrap gap-y-2">
              <Badge className="bg-blue-100 text-blue-900 px-4 py-1 font-medium">Premium Package</Badge>
              <span className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">2 Week Program</span>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif text-white mb-3">Azure Cloud + AI Fundamentals</h2>
              <p className="text-lg text-gray-400">
                Master Microsoft Azure and AI with our most comprehensive certification package
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Certifications Covered</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <span className="text-white font-medium">Microsoft Azure Fundamentals (AZ-900)</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Master cloud concepts, Azure services, security, privacy, compliance, trust, pricing, and support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <span className="text-white font-medium">Microsoft Azure AI Fundamentals (AI-900)</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Learn AI workloads, machine learning, computer vision, natural language processing, and responsible AI practices
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <p className="text-blue-200 text-sm">
                  ✨ Includes 2 free certification exam vouchers (worth $198) with your course purchase
                </p>
              </div>
            </div>

            <button 
              onClick={scrollToEliteAdvantages}
              className="w-full text-center py-3 text-gray-400 hover:text-gray-300 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span className="text-sm">Elite Career Advantages included</span>
              <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-3xl font-serif text-white">$2,499 USD</span>
                <p className="text-gray-400 mt-2">Including 2 certifications exam fees</p>
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
      </div>
    </motion.section>
  );
} 