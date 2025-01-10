'use client';

import { motion } from "framer-motion";
import { commonFeatures } from "./features";
import { getIcon } from "./utils";
import { fadeInUp, staggerChildren } from "./utils";

export function CommonBenefits() {
  return (
    <motion.section 
      id="elite-career-advantages"
      className="mb-24"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-white mb-4">
          Elite Career Advantages
        </h2>
        <p className="text-gray-400 text-lg">
          Unlock these exclusive benefits with any certification package
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerChildren}
      >
        {commonFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-full backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-6 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-gray-800">
                  {getIcon(feature.icon, "w-6 h-6 text-blue-200")}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
} 