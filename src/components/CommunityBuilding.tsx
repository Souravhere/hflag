'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiBarChartBoxLine, RiShieldLine, RiFileList2Line, RiVideoLine, RiNodeTree, RiGlobalLine } from 'react-icons/ri'

const communityFeatures = [
  {
    icon: RiBarChartBoxLine,
    title: 'Engagement',
    description: 'Community building fosters active participation among users, encouraging them to engage with the Hflag ecosystem more meaningfully.',
    color: 'bg-purple-600',
  },
  {
    icon: RiShieldLine,
    title: 'Trust',
    description: 'By cultivating a strong sense of community, Hflag can build trust and loyalty among its members. When users feel connected and valued.',
    color: 'bg-blue-600',
  },
  {
    icon: RiFileList2Line,
    title: 'Feedback',
    description: 'A robust community serves as a valuable source of feedback and insights. By encouraging open communication and discussions.',
    color: 'bg-green-600',
  },
  {
    icon: RiVideoLine,
    title: 'Educational',
    description: 'Community building allows Hflag to educate its members about blockchain technology, halal certification, and the projects goals.',
    color: 'bg-blue-600',
  },
  {
    icon: RiNodeTree,
    title: 'Ecosystem',
    description: 'A well-engaged community contributes to the sustainability of the Hflag ecosystem. As members actively participate in governance.',
    color: 'bg-green-600',
  },
  {
    icon: RiGlobalLine,
    title: 'Global Outreach',
    description: 'By fostering a diverse and inclusive community, Hflag can reach users from various backgrounds and regions.',
    color: 'bg-purple-600',
  },
]

export default function CommunityBuilding() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] italic  px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Community <span className="text-glow-orange">Building</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} rounded-full p-3 inline-block mb-4`}>
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}