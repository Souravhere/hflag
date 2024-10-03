'use client'

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const roadmapData = [
    {
      quarter: '2024 Q4',
      color: 'bg-orange-500',
      items: [
        'Team Formation',
        'Company Establishment',
        'Website Launch',
        'Token Issuance',
        'Community Building',
        'Business Plan & Whitepaper',
        'Marketing Events',
      ],
    },
    {
      quarter: '2025 Q1',
      color: 'bg-green-500',
      items: [
        'Exchange Listing Efforts',
        'Partnership Building',
        'Service Development',
      ],
    },
    {
      quarter: '2025 Q2',
      color: 'bg-blue-500',
      items: [
        'Global Partnerships',
        'Beta Service Launch',
        'User Onboarding Expansion',
      ],
    },
    {
      quarter: '2025 Q3',
      color: 'bg-purple-500',
      items: [
        'Service Expansion & Upgrades',
        'Service Stabilization',
      ],
    },
    {
      quarter: '2025 Q4',
      color: 'bg-orange-500',
      items: [
        'Dapp Development',
        'Dapp Expansion',
        'Global Expansion',
      ],
    },
  ];
  

export default function Roadmap() {
  const { scrollYProgress } = useScroll();
  const drawProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen italic bg-[#1e1e1e] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Road <span className="text-orange-500 text-glow-orange">Map</span>
        </h2>

        {/* Roadmap Timeline */}
        <div className="relative flex flex-col lg:flex-row items-start justify-center">
          {/* SVG Line for Timeline */}
          <motion.div
            className="absolute left-0 lg:left-1/2 sm:-mt-[120px] rounded-full -mt-[60px] ml-2 top-0 w-1 lg:w-2 h-full bg-gradient-to-b from-orange-500 to-blue-500 lg:transform lg:-translate-x-1/2"
            style={{ scaleY: drawProgress }}
          />

          {/* Roadmap Items */}
          <div className="w-full sm:ml-0 ml-24">
            {roadmapData.map((quarter, index) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Quarter Section */}
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`${quarter.color} text-white font-bold py-2 px-4 rounded-lg inline-block mb-4`}
                  >
                    {quarter.quarter}
                  </motion.div>

                  <ul className={`list-disc ${index % 2 === 0 ? 'lg:list-inside ' : 'lg:ml-6'} text-gray-300`}>
                    {quarter.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Circle Indicator */}
                <motion.div
                  className="w-6 h-6 rounded-full bg-white sm:absolute hidden left-0 lg:left-1/2 transform lg:-translate-x-1/2"
                  style={{ scale: drawProgress }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
