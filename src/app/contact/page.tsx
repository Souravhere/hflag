'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPaperPlane, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: 'I am interested in learning more about Hflag and how it can benefit me.'
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create the email subject and body
    const subject = encodeURIComponent('Contact Form Submission')
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
      `Last Name: ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Comment: ${formData.comment}`
    )

    // Redirect to mailto link
    window.location.href = `mailto:jeff@yellow-labs.net?subject=${subject}&body=${body}`

    // Optionally alert the user
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="min-h-screen italic bg-[#1e1e1e] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact <span className="text-orange-500 text-glow-orange">Us</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-12">
          We love to hear from you. Please fill out the form below, and we get back to you as soon as possible.
        </motion.p>
        {/* Top content for trust-building */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">We Are Here to Help</h2>
          <p className="text-lg text-gray-300 mb-4">
            At Hflag, we value your feedback and are committed to providing excellent service. 
            If you have questions, suggestions, or just want to connect, dont hesitate to reach out!
          </p>
        </motion.div>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                className="mt-1 p-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="mt-1 p-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="mt-1 p-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-300">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder="Tell us your thoughts..."
              className="mt-1 p-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </motion.button>
          </div>
        </motion.form>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-300 mb-2">
            Email: <a href="mailto:jeff@yellow-labs.net" className="text-orange-500">jeff@yellow-labs.net</a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/hflag" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://facebook.com/hflag" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com/hflag" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </motion.div>

        {/* Bottom content for trust-building */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Matters</h2>
          <p className="text-gray-300">
            We respect your privacy and will never share your information with third parties. 
            Your feedback is essential to us!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
