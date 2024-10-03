'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const values = [
  { name: 'Trust', color: 'bg-purple-400' },
  { name: 'Innovation', color: 'bg-green-400' },
  { name: 'Community', color: 'bg-blue-400' },
  { name: 'Transparency', color: 'bg-blue-500' },
  { name: 'Accessibility', color: 'bg-purple-500' },
]

export default function MissionVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="min-fit bg-[#1e1e1e] italic py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Mission & <span className="text-orange-500">Vision</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <motion.div variants={itemVariants} className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Empowering Halal <span className="text-orange-500">Living</span> Together
            </h3>
            <p className="text-gray-300 text-lg">
              At Hflag, we envision a vibrant ecosystem where individuals and communities are empowered to embrace halal living effortlessly. Our mission is to revolutionize the halal marketplace, providing a secure and user-friendly platform that connects consumers with high-quality, halal-certified products and services.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${value.color} text-white font-semibold py-2 px-6 rounded-full text-center`}
              >
                {value.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}