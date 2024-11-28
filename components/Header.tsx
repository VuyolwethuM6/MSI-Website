'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact']

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image src="/images/msi_logo.png" alt="MSI Logo" width={100} height={50} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : 
                      item === 'About' ? '/about' : 
                      item === 'Services' ? '/services' : 
                      item === 'Gallery' ? '/gallery' :
                      item === 'Contact' ? '/contact' :
                      `#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-red-200'}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Info and Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+27437262171" className={`text-sm ${isScrolled ? 'text-gray-600 hover:text-red-600' : 'text-white hover:text-red-200'} transition-colors`}>
              <PhoneIcon className="h-5 w-5 inline mr-2" />
              +27 43 726 2171
            </a>
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="#donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md transition-colors duration-200 z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={backdropVariants}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 md:hidden shadow-xl"
              >
                <div className="flex flex-col h-full">
                  {/* Menu Items Container */}
                  <div className="flex-1 overflow-y-auto py-8">
                    <div className="px-6 space-y-6">
                      {/* Navigation Items */}
                      {navItems.map((item, index) => (
                        <Link
                          key={item}
                          href={item === 'Home' ? '/' : 
                                item === 'About' ? '/about' : 
                                item === 'Services' ? '/services' : 
                                item === 'Gallery' ? '/gallery' :
                                item === 'Contact' ? '/contact' :
                                `#${item.toLowerCase()}`}
                          className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info and Donate Section */}
                  <div className="border-t border-gray-100 p-6 space-y-4">
                    <a 
                      href="tel:+27437262171" 
                      className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <PhoneIcon className="h-5 w-5 mr-3" />
                      <span className="text-lg">+27 43 726 2171</span>
                    </a>
                    
                    <Button 
                      asChild 
                      className="w-full justify-center text-lg bg-red-600 text-white hover:bg-red-700"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="#donate">Donate Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
