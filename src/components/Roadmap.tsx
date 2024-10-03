'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const roadmapData = [
  {
    quarter: '2024 Q4',
    color: 'bg-orange-500',
    items: [
      'Team Formation: Assemble the Hflag project team.',
      'Company Establishment: Form the Hflag corporation.',
      'Website Launch: Launch the official Hflag website.',
      'Token Issuance: Issue and distribute the Hflag token.',
      'Community Building: Grow the Hflag community.',
      'Business Plan & Whitepaper: Develop the blockchain business plan and create Whitepaper 1.0.',
      'Marketing Events: Initiate marketing events for Hflag.',
    ],
  },
  {
    quarter: '2025 Q1',
    color: 'bg-green-500',
    items: [
      'Exchange Listing Efforts: Begin efforts to list Hflag on exchanges.',
      'Building Partnerships: Establish key partnerships.',
      'Service Development: Develop the Hflag service.',
    ],
  },
  {
    quarter: '2025 Q2',
    color: 'bg-blue-500',
    items: [
      'Global Partnership Efforts: Pursue global partnerships.',
      'Beta Service Launch: Launch the beta version of Hflags service.',
      'User Onboarding Expansion: Expand user onboarding efforts.',
    ],
  },
  {
    quarter: '2025 Q3',
    color: 'bg-purple-500',
    items: [
      'Service Expansion and Upgrades: Expand and upgrade the service.',
      'Service Stabilization: Ensure service stability.',
    ],
  },
  {
    quarter: '2025 Q4',
    color: 'bg-orange-500',
    items: [
      'Dapp Service Development: Develop Dapp services.',
      'Dapp Service Expansion: Expand Dapp services.',
      'Global Expansion: Focus on global expansion.',
    ],
  },
]

export default function Roadmap() {
  const { scrollYProgress } = useScroll()
  const drawProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="min- italic bg-[#1e1e1e] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Road <span className="text-orange-500">Map</span>
        </h2>
        
        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2"
            style={{ scaleY: drawProgress }}
          />
          
          {roadmapData.map((quarter, index) => (
            <motion.div
              key={quarter.quarter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-4 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`${quarter.color} text-white font-bold py-2 px-4 rounded-lg inline-block mb-4`}
                >
                  {quarter.quarter}
                </motion.div>
                <ul className={`list-disc ${index % 2 === 0 ? 'md:list-inside' : 'md:ml-6'} text-gray-300`}>
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
              <div className="w-4 h-4 rounded-full bg-white absolute left-1/2 top-0 transform -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}