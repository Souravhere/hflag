'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import Image from 'next/image';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'WhitePaper', href: '/whitepaper' },
      { name: 'Brand & Press', href: '/brand' },
      { name: 'Explorer', href: '/explorer' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

const socialIcons = [
  { Icon: FaTelegramPlane, href: 'https://t.me/hflag' },
  { Icon: RiTwitterXFill , href: 'https://instagram.com/hflag' }
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-[#1e1e1e] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 italic md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <span className="text-2xl font-bold">HFLAG</span>
          </Link>
          <p className="text-sm text-gray-400 mb-4">
            Empowering Halal Living with Global Access and Community.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#F97316' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {footerSections.map((section) => (
          <motion.div key={section.title} variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <motion.span
                      whileHover={{ x: 5, color: '#F97316' }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()} HFLAG. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
