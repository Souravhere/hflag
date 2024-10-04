'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClipboardCheck, FaRegPaperPlane, FaGavel } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const sections = [
  {
    title: 'LEGAL DISCLAIMER',
    icon: <FaShieldAlt className="text-orange-500 text-4xl" />,
    content: `This white paper is intended for informational purposes only and does not constitute financial advice or an offer of securities. It includes forward-looking statements that are subject to change and does not guarantee any investment returns. Readers are responsible for complying with local regulations and should understand the risks involved. HFLAG and its affiliates disclaim any liability for damages resulting from the use of this information.`,
  },
  {
    title: 'No Offer of Securities',
    icon: <FaClipboardCheck className="text-blue-500 text-4xl" />,
    content: `This white paper is provided for informational purposes only and does not constitute an offer to sell, a solicitation to purchase, or an endorsement of any securities, financial products, or investments. HFLAG and its related entities are not offering any securities or investment products and do not provide investment, legal, or tax advice. Potential investors should seek their own independent advice before making any decisions related to the information provided in this document.`,
  },
  {
    title: 'Forward-Looking Statements',
    icon: <FaRegPaperPlane className="text-green-500 text-4xl" />,
    content: `This white paper may contain forward-looking statements that reflect HFLAG’s current expectations regarding future events, including the development and deployment of the HFLAG platform, tokenomics, and other project-related matters. These statements are subject to risks and uncertainties that could cause actual results to differ materially from those anticipated. HFLAG makes no representations or warranties regarding the accuracy or completeness of such forward-looking statements.`,
  },
  {
    title: 'Regulatory Compliance',
    icon: <FaGavel className="text-red-500 text-4xl" />,
    content: `The regulatory environment surrounding blockchain technology and cryptocurrency is complex and evolving. HFLAG is committed to complying with all applicable laws and regulations; however, the legal and regulatory status of blockchain projects, including tokenized assets, varies by jurisdiction. It is the responsibility of the reader to understand and comply with local laws and regulations that may affect their participation in HFLAG.`,
  },
  {
    title: 'No Guarantee of Returns',
    icon: <FaShieldAlt className="text-orange-500 text-4xl" />,
    content: `Investing in HFLAG tokens or any related digital assets carries risks, including the potential loss of the entire investment. HFLAG does not guarantee any specific outcomes or returns, and investors should be aware of the volatile nature of cryptocurrency markets. Any past performance of similar projects or assets is not indicative of future results.`,
  },
  {
    title: 'Limitation of Liability',
    icon: <FaGavel className="text-red-500 text-4xl" />,
    content: `HFLAG, its officers, employees, and affiliates shall not be held liable for any direct, indirect, incidental, consequential, or other damages arising from the use or reliance on the information provided in this white paper. This limitation of liability applies to the fullest extent permitted by applicable law.`,
  },
];

const PrivacyPolicyPage = () => {
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
      className="min-h-screen bg-[#1e1e1e] italic py-20 text-white p-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Privacy and <span className='text-orange-500 text-glow-orange'>Policy</span></h1>

      {sections.map((section, index) => (
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

export default PrivacyPolicyPage;
