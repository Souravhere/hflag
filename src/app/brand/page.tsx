'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDownload, FaNewspaper, FaImage, FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const pressReleases = [
  {
    title: "Hflag Launches Revolutionary Halal Marketplace",
    date: "2024-01-15",
    summary: "Hflag introduces a groundbreaking blockchain-based platform for halal products and services.",
    content: "Today, Hflag announced the launch of its innovative halal marketplace, leveraging blockchain technology to ensure transparency and trust in the halal supply chain. This platform aims to revolutionize how consumers access and purchase halal-certified products globally..."
  },
  {
    title: "Hflag Token Sale Exceeds Expectations",
    date: "2024-03-01",
    summary: "The initial token sale for Hflag (HFLG) tokens has concluded with overwhelming success.",
    content: "Hflag is pleased to announce that its initial token sale has concluded, raising over $50 million in just 48 hours. This exceptional response from the community demonstrates the strong demand for a reliable, blockchain-based halal ecosystem..."
  },
  {
    title: "Hflag Partners with Major Halal Certification Bodies",
    date: "2024-05-10",
    summary: "Strategic partnerships formed to enhance the credibility and reach of the Hflag platform.",
    content: "In a move to further strengthen its position in the halal market, Hflag has announced partnerships with several leading halal certification bodies worldwide. These collaborations will ensure that all products listed on the Hflag marketplace meet the highest standards of halal compliance..."
  }
]

const brandAssets = [
  { name: "Hflag Logo Pack", type: "image", url: "/logo.png" },
  { name: "Brand Guidelines", type: "document", url: "/Hflag-white-paper.pdf" },
  { name: "Promotional Images", type: "image", url: "/logo.png" },
  { name: "Hflag Whitepaper", type: "document", url: "/Hflag-white-paper.pdf" },
]

export default function BrandPressPage() {
  const [expandedRelease, setExpandedRelease] = useState<number | null>(null)

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

  const toggleRelease = (index: number) => {
    setExpandedRelease(expandedRelease === index ? null : index)
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen bg-[#1e1e1e] italic text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-8">
          Brand & <span className="text-orange-500 text-glow-orange">Press</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-12">
          Explore Hflag's brand assets and latest press releases. Stay up-to-date with our journey in revolutionizing the halal marketplace.
        </motion.p>

        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Press Releases</h2>
          {pressReleases.map((release, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-6 bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleRelease(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold">{release.title}</h3>
                  <p className="text-sm text-gray-400">{release.date}</p>
                </div>
                {expandedRelease === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expandedRelease === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 text-gray-300"
                >
                  <p className="font-semibold mb-2">{release.summary}</p>
                  <p>{release.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6">Brand Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center"
              >
                {asset.type === 'image' ? <FaImage className="text-4xl text-orange-500 mb-4" /> : <FaFileAlt className="text-4xl text-orange-500 mb-4" />}
                <h3 className="text-lg font-semibold mb-2">{asset.name}</h3>
                <motion.a
                  href={asset.url}
                  download
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="mr-2" />
                  Download
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mt-16">
          <h2 className="text-3xl font-bold mb-6">About Hflag</h2>
          <p className="text-gray-300 mb-4">
            Hflag is a pioneering blockchain-based platform dedicated to revolutionizing the halal marketplace. By leveraging cutting-edge technology, we aim to create a transparent, efficient, and trustworthy ecosystem for halal products and services. Our mission is to empower consumers and businesses alike, fostering a global community committed to ethical and halal practices.
          </p>
          <p className="text-gray-300">
            Founded in 2024, Hflag has quickly become a leader in the intersection of blockchain technology and the halal industry. Our innovative approach combines rigorous halal certification processes with the immutability and transparency of blockchain, ensuring that every product on our platform meets the highest standards of halal compliance.
          </p>
        </motion.section>
      </div>
    </motion.div>
  )
}