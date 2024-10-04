'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const sections = [
  {
    title: "Executive Summary",
    content: "Hflag is revolutionizing the halal marketplace by creating a comprehensive ecosystem that connects consumers with high-quality halal-certified products and services. Our platform leverages blockchain technology to ensure transparency, trust, and efficiency in every transaction. This whitepaper outlines our vision, technology, token economics, and roadmap for creating a global, decentralized halal economy."
  },
  {
    title: "Introduction to Hflag",
    content: "Hflag addresses the growing demand for ethical and responsible consumption in the halal market. Our platform offers a seamless shopping experience where users can easily purchase halal products using Hflag tokens. By integrating blockchain technology, we provide unparalleled transparency and trust in the sourcing and certification of halal products."
  },
  {
    title: "Market Analysis",
    content: "The global halal market is experiencing rapid growth, with projections indicating a market size of $5 trillion by 2025. This growth is driven by increasing Muslim populations, rising awareness of halal products among non-Muslim consumers, and the expanding range of halal-certified goods and services. Hflag is positioned to capitalize on this growth by offering a comprehensive, technology-driven solution to connect consumers with halal products."
  },
  {
    title: "Hflag Ecosystem",
    content: "The Hflag ecosystem consists of several interconnected components:\n\n1. Hflag Market: A decentralized marketplace for halal-certified products.\n2. Hflag Wallet: A secure digital wallet for managing Hflag tokens and transactions.\n3. Hflag Dapp: A decentralized application offering additional services and features.\n4. Hflag Token: The native cryptocurrency powering the Hflag ecosystem."
  },
  {
    title: "Blockchain Technology",
    content: "Hflag utilizes blockchain technology to ensure transparency, security, and efficiency in all transactions. Our blockchain solution provides:\n\n1. Immutable record-keeping of product certifications and supply chain data.\n2. Smart contracts for automated, trustless transactions.\n3. Decentralized governance for community-driven decision-making.\n4. Enhanced security and privacy for user data and transactions."
  },
  {
    title: "Token Economics",
    content: "The Hflag token (HFLG) is the backbone of our ecosystem. Key aspects of our token economics include:\n\n1. Total Supply: 1,000,000,000 HFLG\n2. Token Distribution: 40% public sale, 20% ecosystem development, 15% team and advisors, 15% marketing and partnerships, 10% reserve\n3. Token Utility: Medium of exchange, staking rewards, governance participation, access to exclusive features"
  },
  {
    title: "Roadmap",
    content: "Our roadmap outlines the key milestones for Hflag's development and growth:\n\n2024 Q2: Platform beta launch and initial token sale\n2024 Q4: Full platform launch and expansion of product offerings\n2025 Q2: Integration of AI-powered recommendation system\n2025 Q4: Launch of Hflag DeFi services\n2026 Q2: Global expansion and partnerships with major halal certification bodies"
  },
  {
    title: "Team and Advisors",
    content: "Hflag is led by a team of experienced professionals in blockchain technology, e-commerce, and halal industry experts. Our advisors include renowned scholars in Islamic finance and halal certification, ensuring that our platform adheres to the highest standards of compliance and ethics."
  },
  {
    title: "Conclusion",
    content: "Hflag represents a paradigm shift in the halal marketplace, offering a transparent, efficient, and user-friendly platform for ethical consumption. By leveraging blockchain technology and a robust token economy, we are poised to become the leading global platform for halal products and services, driving innovation and growth in this rapidly expanding market."
  }
]

export default function WhitePaperPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

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

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  const handleDownload = () => {
    // Path to the whitepaper in the public directory
    const fileUrl = '/Hflag-white-paper.pdf';
  
    // This will trigger the download of the PDF file
    window.open(fileUrl, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen bg-[#1e1e1e] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-8">
          Hflag <span className="text-orange-500 text-glow-orange">Whitepaper</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-12">
          Discover the revolutionary vision and technology behind Hflag's halal ecosystem
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <button
            onClick={handleDownload}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <FaDownload className="mr-2" />
            Download Full Whitepaper
          </button>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-6 bg-gray-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition duration-300"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {expandedSection === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSection === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 text-gray-300"
              >
                <p className="whitespace-pre-line">{section.content}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}