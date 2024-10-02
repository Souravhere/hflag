'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineArrowOutward } from "react-icons/md";

const orangeTexts = [
  "Liiving",
  "Coommunity",
  "Maarketplace",
  "Innnovation"
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % orangeTexts.length)
        setIsTyping(true)
        setDisplayText('')  // Reset displayText for the new word
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-[#1E1E1E] italic min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animating the circular background divs */}
      <motion.div 
        className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D55123] rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" 
        animate={{ x: [-10, 10], y: [10, -10] }} 
        transition={{ duration: 3, yoyo: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -top-10 -right-10 w-64 h-64 bg-[#D55123] rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" 
        animate={{ x: [10, -10], y: [-10, 10] }} 
        transition={{ duration: 3, yoyo: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Halal <br /> {' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTextIndex}
              className="text-[#D55123] block h-10 my-3 w-full text-glow-orange"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {isTyping && (
                <TypeWriter text={orangeTexts[currentTextIndex]} displayText={displayText} setDisplayText={setDisplayText} />
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
          Uniting a <span className='text-[#D55123]'>Global Community.</span>
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

function TypeWriter({ text, displayText, setDisplayText }: { text: string, displayText: string, setDisplayText: React.Dispatch<React.SetStateAction<string>> }) {
  useEffect(() => {
    let i = displayText.length
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text, displayText, setDisplayText])

  return <>{displayText}</>
}
