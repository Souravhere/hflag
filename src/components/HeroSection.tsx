'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineArrowOutward } from "react-icons/md";

const orangeTexts = [
  "Living",
  "Community",
  "Marketplace",
  "Innovation"
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % orangeTexts.length)
        setIsTyping(true)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-[#1E1E1E] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D55123] rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D55123] rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Halal{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTextIndex}
              className="text-[#D55123] inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {isTyping && (
                <TypeWriter text={orangeTexts[currentTextIndex]} />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Uniting a Global Community.
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover a global marketplace for halal-certified products, built on
          transparency, innovation, and ethical choices.
        </motion.p>
        <motion.button
          className="bg-[#D55123] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center mx-auto hover:bg-[#FF6B35] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Know More
          <MdOutlineArrowOutward className="ml-2" size={20} />
        </motion.button>
      </div>
    </div>
  )
}

function TypeWriter({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text])

  return <>{displayText}</>
}