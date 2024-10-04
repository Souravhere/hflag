'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExchangeAlt, FaLock, FaCrown, FaMobileAlt } from 'react-icons/fa'
import { PieChart } from 'react-minimal-pie-chart'

const tokenUtilities = [
  {
    icon: FaExchangeAlt,
    title: 'Medium of Exchange',
    description: 'Use Hflag tokens to purchase halal-certified products within the Hflag ecosystem. Enjoy streamlined transactions and convenient ethical consumption.',
  },
  {
    icon: FaLock,
    title: 'Staking Opportunities',
    description: 'Stake your Hflag tokens to earn rewards and support the network. Contribute to platform stability and enjoy long-term benefits.',
  },
  {
    icon: FaCrown,
    title: 'Access to Exclusive Features',
    description: 'Gain priority access to new product launches, special promotions, and community events as a Hflag token holder.',
  },
  {
    icon: FaMobileAlt,
    title: 'Integration with Hflag Dapp',
    description: 'Seamlessly use Hflag tokens within the Hflag Dapp for various decentralized services aligned with halal living.',
  },
]

const tokenDistribution = [
  { title: 'Sale', value: 30, color: '#FF6384' },
  { title: 'Ecosystem', value: 20, color: '#36A2EB' },
  { title: 'Team & Advisor', value: 15, color: '#FFCE56' },
  { title: 'Marketing', value: 15, color: '#4BC0C0' },
  { title: 'Operation', value: 10, color: '#9966FF' },
  { title: 'Reserve', value: 10, color: '#FF9F40' },
]

export default function page() {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-12">
          Hflag Token <span className="text-orange-500">Utility</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tokenUtilities.map((utility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <utility.icon className="text-4xl text-orange-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{utility.title}</h2>
              <p className="text-gray-300">{utility.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Token <span className="text-orange-500">Details</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Name</h3>
              <p className="text-orange-500">Hflag</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
              <p className="text-orange-500">BSC</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Symbol</h3>
              <p className="text-orange-500">Hflag</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Total Supply</h3>
              <p className="text-orange-500">3,000,000,000</p>
            </div>
          </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Token <span className="text-orange-500">Distribution</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <PieChart
              data={tokenDistribution}
              lineWidth={60}
              paddingAngle={2}
              rounded
              label={({ dataEntry }) => `${dataEntry.value}%`}
              labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif',
                fill: '#fff',
              }}
              labelPosition={75}
            />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            {tokenDistribution.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                <span className="text-gray-300">{item.title}: {item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}