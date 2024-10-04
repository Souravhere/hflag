'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaSearch, FaCube, FaExchangeAlt, FaWallet, FaChartLine } from 'react-icons/fa'

const explorerSections = [
  {
    title: "Blockchain Overview",
    icon: FaCube,
    content: "The Hflag blockchain is designed for high performance, security, and scalability. It utilizes a Proof-of-Stake consensus mechanism to ensure energy efficiency and rapid transaction processing. Our blockchain supports smart contracts, enabling the development of decentralized applications (dApps) that cater to the halal ecosystem."
  },
  {
    title: "Transactions",
    icon: FaExchangeAlt,
    content: "Hflag's blockchain processes transactions with lightning speed and minimal fees. Each transaction is cryptographically secured and immutably recorded on the blockchain. Users can enjoy near-instant confirmations for their Hflag token transfers and smart contract interactions."
  },
  {
    title: "Wallets",
    icon: FaWallet,
    content: "The Hflag ecosystem supports various wallet types, including web wallets, mobile wallets, and hardware wallets. These wallets allow users to securely store, send, and receive Hflag tokens. Advanced features such as multi-signature support and integration with decentralized finance (DeFi) protocols are also available."
  },
  {
    title: "Smart Contracts",
    icon: FaChartLine,
    content: "Smart contracts on the Hflag blockchain enable the creation of trustless, automated agreements. These contracts power various features of our ecosystem, including decentralized exchanges, yield farming, and governance mechanisms. Developers can easily deploy and interact with smart contracts using our comprehensive SDK and documentation."
  }
]

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('')
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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In the future, this would trigger a search in the blockchain explorer
    alert(`Searching for: ${searchQuery}`)
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
          Hflag <span className="text-orange-500 text-glow-orange">Explorer</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-12">
          Explore the Hflag blockchain, track transactions, and discover the power of our ecosystem.
        </motion.p>

        <motion.form 
          variants={itemVariants} 
          onSubmit={handleSearch}
          className="mb-12 max-w-3xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by address, transaction hash, or block number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600"
            >
              <FaSearch size={24} />
            </button>
          </div>
        </motion.form>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {explorerSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <section.icon className="text-4xl text-orange-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-300">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-300 mb-4">
            After the Hflag token launch, this explorer will be updated with real-time blockchain statistics, including:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Total number of transactions</li>
            <li>Current block height</li>
            <li>Network hash rate</li>
            <li>Active wallet addresses</li>
            <li>Token circulation and distribution</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}