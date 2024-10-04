'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExchangeAlt, FaLock, FaCrown, FaMobileAlt } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
    title: 'Exclusive Features',
    description: 'Priority access to new product launches, special promotions, and community events as a Hflag token holder.',
  },
  {
    icon: FaMobileAlt,
    title: 'Integration with Hflag Dapp',
    description: 'Use Hflag tokens in the Hflag Dapp for various decentralized services aligned with halal living.',
  },
];

const tokenDistribution = [
  { title: 'Sale', value: 30, color: '#FF6384' },
  { title: 'Ecosystem', value: 20, color: '#36A2EB' },
  { title: 'Team & Advisors', value: 15, color: '#FFCE56' },
  { title: 'Marketing', value: 15, color: '#4BC0C0' },
  { title: 'Operation', value: 10, color: '#9966FF' },
  { title: 'Reserve', value: 10, color: '#FF9F40' },
];

export default function HflagTokenPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const chartOptions = {
    chart: {
      type: 'pie',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    labels: tokenDistribution.map((item) => item.title),
    colors: tokenDistribution.map((item) => item.color),
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 380,
          },
        },
      },
    ],
  };

  const chartSeries = tokenDistribution.map((item) => item.value);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
      }}
      className="min-h-screen bg-[#1e1e1e] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hflag Token Utility Section */}
        <motion.h1 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-4xl md:text-5xl font-bold text-center mb-12">
          Hflag Token <span className="text-orange-500">Utility</span>
        </motion.h1>
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tokenUtilities.map((utility, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <utility.icon className="text-4xl text-orange-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{utility.title}</h2>
              <p className="text-gray-300">{utility.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Token Distribution Section */}
        <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Token <span className="text-orange-500">Distribution</span>
        </motion.h2>
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <Chart options={chartOptions} series={chartSeries} type="pie" height="320" />
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

        {/* Hflag Token Rewards Section */}
        <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Hflag Token <span className="text-orange-500">Rewards</span>
        </motion.h2>
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Leaderboard and Competitive Incentives</h3>
          <p className="text-gray-300 mb-6">
            Players earn ranking points based on performance, and those who reach the top of the leaderboard receive exclusive in-game items and token bonuses.
          </p>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Monthly Competitions</h3>
          <p className="text-gray-300 mb-6">
            Monthly competitions offer winners premium perks such as large token prizes, rare ingredients, and more.
          </p>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">In-Game Items & Collectibles</h3>
          <p className="text-gray-300 mb-6">
            Players can collect rare halal-certified ingredients or special tools during gameplay. Some items are only available during special events.
          </p>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Hflag Ecosystem Utilization</h3>
          <p className="text-gray-300">
            Hflag tokens can be redeemed in the Hflag Market, and managed through the Hflag Wallet for halal-certified purchases.
          </p>
        </motion.div>

        {/* Team Competitions and Seasonal Events */}
        <motion.h3 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-xl font-semibold text-orange-500 mb-4 text-center">
          Team-Based Competitions & Seasonal Events
        </motion.h3>
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-gray-300 text-center">
          Participate in community-driven BBQ challenges and seasonal events, fostering teamwork and earning collective rewards.
        </motion.div>
      </div>
    </motion.div>
  );
}
