import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { 
    FaWater, 
    FaAnchor, 
    FaLifeRing, 
    FaInstagram, 
    FaArrowRight, 
    FaFacebookF, 
    FaTwitter, 
    FaYoutube, 
    FaMapMarkerAlt, 
    FaPhone, 
    FaEnvelope,
    FaCalendarAlt,
    FaUsers,
    FaStar
  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b385b] text-white py-12 px-4">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-[60px] h-[60px]">
              <Image src="/logo.JPG" alt="Scubachannel Logo" fill className="rounded-full object-cover" />
            </div>
            <p className="text-xl font-bold">
              Scubachannel Fuvahmulah
            </p>
          </div>
          <p className="text-gray-300 mb-4">
            Your premier diving center in Fuvahmulah, Maldives, offering unforgettable underwater experiences and professional PADI courses.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/share/18u7oE113F/?mibextid=wwXIfr" className="text-white hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/scubachannelfvm?igsh=MW5vZDJ4ZDZpMGdicg%3D%3D&utm_source=qr" className="text-white hover:text-gray-300 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="https://x.com/scubachannelfvm?s=21&t=lH-WtqFiIOVaHTDYXc8iUg" className="text-white hover:text-gray-300 transition-colors">
              <FaTwitter />
            </Link>
            {/* <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaYoutube />
            </Link> */}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
            </li>
            {/* <li>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
            </li> */}
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Courses</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/courses/open-water" className="text-gray-300 hover:text-white transition-colors">Open Water Diver</Link>
            </li>
            <li>
              <Link href="/courses/advanced" className="text-gray-300 hover:text-white transition-colors">Advanced Diver</Link>
            </li>
            <li>
              <Link href="/courses/rescue" className="text-gray-300 hover:text-white transition-colors">Rescue Diver</Link>
            </li>
            <li>
              <Link href="/courses/specialty" className="text-gray-300 hover:text-white transition-colors">Specialty Courses</Link>
            </li>
            <li>
              <Link href="/courses/instructor" className="text-gray-300 hover:text-white transition-colors">Instructor Courses</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" />
              <span className="text-gray-300">Zindha, husnuheenamagu, funaadu, Fuvahmulah Island, Maldives</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="text-white mt-1 flex-shrink-0" />
              <span className="text-gray-300">+960 7930760</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-white mt-1 flex-shrink-0" />
              <span className="text-gray-300">sales@scubachannelfuvahmulah.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} Southern channel Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer