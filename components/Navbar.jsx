"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaBars, FaTimes } from "react-icons/fa"

// NASA font style
const nasaFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
  
  .nasa-font {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

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

  // Load NASA font
  useEffect(() => {
    // Inject NASA font style
    const style = document.createElement("style")
    style.innerHTML = nasaFontStyle
    document.head.appendChild(style)

    // Add Google Fonts link
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
    document.head.appendChild(link)

    return () => {
      // Check if elements exist and are children of document.head before removing
      if (style && style.parentNode === document.head) {
        document.head.removeChild(style)
      }
      if (link && link.parentNode === document.head) {
        document.head.removeChild(link)
      }
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-[#0b385b]/95 shadow-lg" : "bg-black/30"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left Side - Logo & Name */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">
              <Image
                src="/logo.JPG"
                alt="Scubachannel Logo"
                width={60}
                height={60}
                className="rounded-full md:w-[80px] md:h-[80px]"
              />
            </Link>
            <p className="nasa-font text-lg sm:text-2xl md:text-3xl font-bold text-white hidden sm:block tracking-wider">
              <span className="text-white">Scubachannel</span> Fuvahmulah
            </p>
            <p className="nasa-font text-lg font-bold text-white sm:hidden tracking-wider">
              <span className="text-white">Scubachannel</span>
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex space-x-6 text-white text-lg nasa-font tracking-wider">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/courses" className="hover:text-gray-300 transition-colors">
                Courses
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaYoutube />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#0b385b] z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex flex-col items-center gap-6 py-8 text-white text-xl nasa-font tracking-wider">
            <Link href="/" className="hover:text-gray-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/courses"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons - Mobile */}
          <div className="flex justify-center gap-8 mt-8">
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaYoutube size={24} />
            </Link>
          </div>

          <div className="mt-auto p-6 text-center text-white/70 nasa-font">
            <p>© {new Date().getFullYear()} Scubachannel Fuvahmulah</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
