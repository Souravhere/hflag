'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaRegHandPaper, FaBalanceScale, FaRegClipboard } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const termsSections = [
  {
    title: 'Introduction',
    icon: <FaFileContract className="text-orange-500 text-4xl" />,
    content: `Welcome to Hflag! These Terms and Conditions outline the rules and regulations for the use of our platform. By accessing or using our services, you agree to abide by these terms. If you do not agree with any part of these terms, you must not use our services.`,
  },
  {
    title: 'Eligibility',
    icon: <FaRegHandPaper className="text-blue-500 text-4xl" />,
    content: `To use our services, you must be at least 18 years of age or have parental consent. By using Hflag, you represent that you meet the eligibility requirements and agree to comply with these terms.`,
  },
  {
    title: 'User Responsibilities',
    icon: <FaBalanceScale className="text-green-500 text-4xl" />,
    content: `As a user of Hflag, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    title: 'Intellectual Property',
    icon: <FaRegClipboard className="text-red-500 text-4xl" />,
    content: `All content, trademarks, and other intellectual property associated with Hflag are owned by us or our licensors. You may not use, reproduce, distribute, or create derivative works from any content without our express permission.`,
  },
  {
    title: 'Limitation of Liability',
    icon: <FaFileContract className="text-orange-500 text-4xl" />,
    content: `Hflag and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or other damages arising from your use of our services or reliance on any information provided.`,
  },
  {
    title: 'Governing Law',
    icon: <FaRegHandPaper className="text-blue-500 text-4xl" />,
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Hflag operates. Any disputes arising from these terms shall be resolved in the courts of that jurisdiction.`,
  },
];

const TermsAndConditionsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1e1e1e] py-20 italic text-white p-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Terms and <span className='text-orange-500 text-glow-orange'>Conditions</span></h1>

      {termsSections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
        >
          <div className="flex items-center mb-4">
            {section.icon}
            <h2 className="text-2xl font-semibold ml-4">{section.title}</h2>
          </div>
          <p className="text-gray-300">{section.content}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TermsAndConditionsPage;
