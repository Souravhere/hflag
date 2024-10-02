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
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) return; // Wait for typing to finish before starting the next word
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % orangeTexts.length);
      setDisplayText(''); // Reset displayText for the new word
      setIsTyping(true); // Start typing the new word
    }, 1000); // Time for the complete cycle of typing + erasing

    return () => clearInterval(interval);
  }, [isTyping]);

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
              <TypeWriter text={orangeTexts[currentTextIndex]} isTyping={isTyping} setIsTyping={setIsTyping} />
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
      <p>{displayText}</p> {/* Displaying the text */}
    </div>
  )
}

function TypeWriter({ text, isTyping, setIsTyping }: { 
    text: string; 
    isTyping: boolean; 
    setIsTyping: (value: boolean) => void; 
}) {
  const [displayText, setLocalDisplayText] = useState('')

  useEffect(() => {
    let i = 0;
    let isErasing = false; // Track if we are erasing
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (!isErasing) {
          // Typing
          if (i < text.length) {
            setLocalDisplayText((prevText) => prevText + text.charAt(i));
            i++;
          } else {
            isErasing = true; // Start erasing after typing is done
          }
        } else {
          // Erasing
          if (i > 0) {
            setLocalDisplayText((prevText) => prevText.slice(0, -1));
            i--;
          } else {
            isErasing = false; // Reset to typing mode
            setIsTyping(false); // Indicate typing is done
          }
        }
      }
    }, isErasing ? 150 : 200); // Adjusted speed for typing vs erasing

    return () => clearInterval(typingInterval);
  }, [text, isTyping, setIsTyping]);

  return <>{displayText}</>;
}
