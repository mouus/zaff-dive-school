"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaInstagram, FaFacebookF, FaTwitter, FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import localFont from "next/font/local"
import { motion, AnimatePresence } from "framer-motion"

// Import NASA font
const nasaFont = localFont({
  src: "../public/font/Nasa.ttf",
  variable: "--font-nasa",
})

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav") && !event.target.closest("button")) {
        setIsMenuOpen(false)
      }

      if (activeDropdown && !event.target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen, activeDropdown])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Diving",
      href: "#",
      dropdown: true,
      items: [
        { name: "Courses", href: "/courses" },
        // { name: "Dive Sites", href: "/dive-sites" },
        // { name: "Specialty Programs", href: "/specialty" },
      ],
    },
    { name: "Our Crew", href: "/our-crew" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Transfer", href: "/transfer" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-b from-[#0b385b]/95 to-[#0b385b]/85 backdrop-blur-md py-2"
          : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Side - Logo & Name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="relative group">
              <div className="absolute inset-0 rounded-full bg-blue-400/20 group-hover:bg-blue-400/30 blur-md transition-all duration-300 -z-10"></div>
              <Image
                src="/logo.JPG"
                alt="Scubachannel Logo"
                width={60}
                height={60}
                className="rounded-full md:w-[65px] md:h-[65px] border-2 border-white/20 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="flex flex-col">
              <p
                className={`${nasaFont.className} text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wider uppercase leading-tight`}
              >
                <span className="text-white">Scubachannel</span>
              </p>
              <p className="text-xs md:text-sm text-blue-200 tracking-wider uppercase">Fuvahmulah, Maldives</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name} className="relative dropdown-container">
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`px-4 py-2 text-white flex items-center gap-1 rounded-md transition-colors hover:bg-white/10 ${
                          activeDropdown === link.name ? "bg-white/10" : ""
                        }`}
                      >
                        {link.name}
                        <FaChevronDown
                          className={`h-3 w-3 transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-48 bg-[#0b385b]/95 backdrop-blur-md rounded-md overflow-hidden shadow-lg border border-white/10"
                          >
                            <div className="py-1">
                              {link.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-white rounded-md transition-colors hover:bg-white/10 block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Social & Book Now */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/18u7oE113F/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/scubachannelfvm?igsh=MW5vZDJ4ZDZpMGdicg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/scubachannelfvm?s=21&t=lH-WtqFiIOVaHTDYXc8iUg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </Link>
            </div>

            <Link
               href="https://wa.me/9607930760"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-b from-[#0b385b] to-[#072a44] z-40 lg:hidden pt-20 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              <nav className="flex flex-col items-start gap-2 py-8 text-white px-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="w-full">
                    {link.dropdown ? (
                      <div className="w-full">
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className="flex items-center justify-between w-full py-3 border-b border-white/10 text-xl"
                        >
                          <span>{link.name}</span>
                          <FaChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              activeDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-white/5 rounded-md mt-1 mb-2"
                            >
                              {link.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-3 text-white/80 hover:text-white border-b border-white/5 last:border-0"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block w-full py-3 border-b border-white/10 text-xl"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Book Now Button - Mobile */}
              <div className="px-6 mt-4">
                <Link
                  href="/booking"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 w-full block text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>

              {/* Social Icons - Mobile */}
              <div className="flex justify-center gap-8 mt-12">
                <Link
                  href="https://www.facebook.com/share/18u7oE113F/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Facebook"
                >
                  <FaFacebookF size={24} />
                </Link>
                <Link
                  href="https://www.instagram.com/scubachannelfvm?igsh=MW5vZDJ4ZDZpMGdicg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="https://x.com/scubachannelfvm?s=21&t=lH-WtqFiIOVaHTDYXc8iUg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </Link>
              </div>

              <div className="mt-auto p-6 text-center text-white/70">
                <p>© {new Date().getFullYear()} Scubachannel Fuvahmulah</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
