'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate } from 'react-icons/fa'
import { IoGlobeOutline } from 'react-icons/io5'
import { GiTrophyCup } from 'react-icons/gi'

const features = [
  {
    icon: FaCertificate,
    title: 'Halal Certified',
    description: 'Hflag Market offers globally certified halal products.',
    color: 'text-purple-500',
  },
  {
    icon: IoGlobeOutline,
    title: 'Global Access',
    description: 'Hflag Market rewards users with tokens for purchases.',
    color: 'text-blue-500',
  },
  {
    icon: GiTrophyCup,
    title: 'Reward',
    description: 'Hflag Market rewards users with tokens for purchases.',
    color: 'text-green-500',
  },
]

export default function WelcomeComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-12">
          Welcome to <span className="text-glow-orange">HFLAG</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <feature.icon className={`text-4xl ${feature.color}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${feature.color}`}>{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}