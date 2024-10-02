'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Token', path: '/token' },
  { name: 'WhitePaper', path: '/whitepaper' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowHeader(false)
        } else {
          setShowHeader(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className="bg-[#3D3737]/70 backdrop-blur-md h-fit italic shadow-md fixed top-0 left-0 w-full z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.path} isActive={pathname === item.path}>
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <motion.button
              className="md:hidden z-20 text-white" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <IoMdClose  size={28}/> : <CiMenuFries size={28}/> }
            </motion.button>

            <Link href="/contact" className="hidden md:block">
              <motion.div
                className="bg-[#D55123] text-white px-6 py-2 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: '#FF6B35' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.div>
            </Link>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden bg-[#3D3737] py-4 fixed top-[60px] left-0 w-full h-screen flex flex-col"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="flex flex-col space-y-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        closed: { y: 20, opacity: 0 },
                        open: { y: 0, opacity: 1 },
                      }}
                    >
                      <NavLink href={item.path} isActive={pathname === item.path} mobile>
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{
                      closed: { y: 20, opacity: 0 },
                      open: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link href="/contact" className="block text-center bg-[#D55123] text-white mx-4 my-2 px-6 py-3 rounded-lg hover:bg-[#FF6B35] transition-colors">
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
  mobile?: boolean
}

function NavLink({ href, isActive, children, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        mobile ? 'block py-3 px-4 text-center text-xl' : 'inline-block'
      } relative font-medium transition-colors hover:text-[#FF6B35] text-lg ${
        isActive ? 'text-[#FF6B35]' : 'text-white'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6B35]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  )
}
