'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaCoins, FaLock, FaUsers } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';

const tokenFeatures = [
  {
    icon: FaCoins,
    title: 'Earn and Spend',
    description: 'Earn tokens through transactions and spend them on exclusive products and services.',
  },
  {
    icon: FaLock,
    title: 'Exclusive Access',
    description: 'Unlock premium features and content available only to token holders.',
  },
  {
    icon: FaUsers,
    title: 'Community Engagement',
    description: 'Participate in governance and shape the future of the Hflag ecosystem.',
  },
];

export default function HflagTokens() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once when in view
    threshold: 0.1,    // How much of the element should be in view before triggering
  });

  // Container animation (stagger children appearance)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15, // Stagger each child’s appearance
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-[#1e1e1e] py-16 px-4 sm:px-6 italic lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="bg-emerald-700 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="p-8 sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Unlock the Power of Hflag Tokens!
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-emerald-100">
                Discover how Hflag tokens enhance your experience! Earn and spend tokens through transactions, access exclusive features, and engage with a vibrant community. Join us in building a thriving ecosystem where every interaction contributes to your halal journey.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-orange-500 hover:bg-orange-400 transition-colors duration-300"
                >
                  Learn About Hflag Tokens
                  <MdOutlineArrowOutward className="ml-3 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {tokenFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-orange-500 text-white mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-xl text-gray-300">
            Ready to start your journey with Hflag Tokens?
          </p>
          <Link
            href="/token"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 transition-colors duration-300"
          >
            Get Started Now
            <MdOutlineArrowOutward className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
fe