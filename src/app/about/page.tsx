'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShoppingCart, FaLock, FaCoins, FaGamepad, FaUsers, FaBullseye, FaRocket } from 'react-icons/fa';

const sections = [
  {
    title: 'Hflag Platform',
    icon: FaShoppingCart,
    content:
      'Hflag is an innovative platform dedicated to transforming the halal marketplace by offering a comprehensive ecosystem that connects consumers with high-quality halal-certified products and services. Our Hflag Market serves as a central hub, featuring a diverse range of halal products, ensuring that users have easy access to everything they need while promoting ethical choices in their consumption habits.',
  },
  {
    title: 'Blockchain Technology',
    icon: FaLock,
    content:
      'Leveraging advanced blockchain technology, Hflag ensures transparency and trust throughout the purchasing process, allowing consumers to verify the authenticity and sourcing of every product. Our commitment to quality is reflected in our rigorous vetting of suppliers, ensuring that every item meets stringent halal standards.',
  },
  {
    title: 'Hflag Tokens & Wallet',
    icon: FaCoins,
    content:
      'The Hflag Wallet allows users to manage their Hflag tokens effectively, facilitating smooth transactions and conversions into points for purchasing products. Hflag tokens serve as a medium for purchasing halal products, engaging in community activities, and accessing exclusive features within the ecosystem.',
  },
  {
    title: 'Staking & Rewards',
    icon: FaCoins,
    content:
      'Staking is a key feature of the Hflag ecosystem, allowing users to earn rewards while supporting the network. By participating in staking, users can contribute to the security and efficiency of the platform while receiving additional Hflag tokens as a return on their investment.',
  },
  {
    title: 'Hflag Dapp',
    icon: FaGamepad,
    content:
      'Hflag includes a unique Dapp that enhances user interaction, offering decentralized services that align with halal living. This application provides users with tools and features that promote a more engaged and connected community, further enriching the overall experience of using the Hflag platform.',
  },
  {
    title: 'Mini Games',
    icon: FaGamepad,
    content:
      'We have integrated mini games into our ecosystem, allowing users to earn Hflag rewards while participating in fun and interactive activities. These games not only provide entertainment but also incentivize users to engage more with the platform.',
  },
  {
    title: 'Community Building',
    icon: FaUsers,
    content:
      'By creating a vibrant community, we aim to empower individuals to embrace halal living while connecting them with others who share similar values. Community building is at the heart of Hflag, as we believe that fostering relationships among users enhances their experience and promotes a shared commitment to ethical consumption.',
  },
];

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen bg-[#1e1e1e] italic text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-orange-500">Hflag</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black rounded-lg p-6 shadow-lg transition-transform transform hover:shadow-2xl hover:bg-gray-700"
            >
              <section.icon className="text-4xl text-orange-500 mb-4 transition-transform duration-300 transform group-hover:rotate-6" />
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-300">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our <span className="text-orange-500">Mission & Vision</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-shadow duration-300">
            <FaBullseye className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-300">
              To create a trusted, innovative ecosystem that empowers individuals and communities to embrace halal living through seamless access to
              high-quality halal-certified products and services. We aspire to lead the way in promoting ethical consumption by leveraging advanced
              technology, fostering community engagement, and championing transparency.
            </p>
          </div>
          <div className="bg-black rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-shadow duration-300">
            <FaRocket className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Revolutionize the halal marketplace with a secure, user-friendly platform.</li>
              <li>Ensure the highest standards of quality, transparency, and ethical sourcing.</li>
              <li>Leverage blockchain technology to foster trust and accountability.</li>
              <li>Build a vibrant community through engagement, education, and rewards.</li>
              <li>Continuously innovate and expand our offerings to enhance user experience.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
