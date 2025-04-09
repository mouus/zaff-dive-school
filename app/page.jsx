"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
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
  FaEnvelope,
  FaCalendarAlt,
  FaUsers,
  FaStar,
} from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Add orbital animations
const orbitalAnimations = `
  @keyframes orbit-1 {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(100px, 50px) scale(1.2); }
    100% { transform: translate(0, 0) scale(1); }
  }
  @keyframes orbit-2 {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-80px, -40px) scale(1.5); }
    100% { transform: translate(0, 0) scale(1); }
  }
  @keyframes orbit-3 {
    0% { transform: translate(0, 0) rotate(0); }
    50% { transform: translate(60px, -60px) rotate(180deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
  }
  @keyframes orbit-4 {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(50px, 30px) scale(1.2); }
    66% { transform: translate(-50px, 60px) scale(0.8); }
    100% { transform: translate(0, 0) scale(1); }
  }
  @keyframes orbit-5 {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-40px, -80px) scale(1.3); }
    100% { transform: translate(0, 0) scale(1); }
  }
  @keyframes orbit-6 {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(70px, -20px) scale(1.1); }
    100% { transform: translate(0, 0) scale(1); }
  }
`

// NASA font style
const nasaFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
  
  .nasa-font {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("beginners")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Inject orbital animations and NASA font
    const style = document.createElement("style")
    style.innerHTML = orbitalAnimations + nasaFontStyle
    document.head.appendChild(style)

    // Add Google Fonts link
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(style)
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  // Update the divingCourses object with correct pricing from courses page
  const divingCourses = {
    beginners: {
      title: "For Beginners",
      description:
        "Perfect introductory experiences for those who want to try diving for the first time without committing to a full certification course.",
      image: "/img-10.JPG",
      icon: <FaWater className="h-6 w-6 text-white" />,
      duration: "45-60 minutes",
      price: "$50-$80",
      features: [
        "PADI Bubble Maker (45 min, $50)",
        "PADI Discover Scuba Diving (60 min, $80)",
        "No certification required",
        "All equipment provided",
      ],
    },
    certification: {
      title: "PADI Beginners Courses",
      description:
        "Full certification courses for beginners that include all materials needed to become a certified diver.",
      image: "/manta2.jpg",
      icon: <FaAnchor className="h-6 w-6 text-white" />,
      duration: "2-4 days",
      price: "$300-$550",
      features: [
        "PADI Scuba Diver (2-3 days, $300)",
        "PADI Open Water Diver (3-4 days, $550)",
        "Internationally recognized certification",
        "Complete equipment provided",
      ],
    },
    continuing: {
      title: "PADI Continuing Education",
      description: "Advanced courses for certified divers looking to expand their skills and experience.",
      image: "/whale.jpg",
      icon: <FaLifeRing className="h-6 w-6 text-white" />,
      duration: "2-5 days",
      price: "$150-$600",
      features: [
        "Advanced Open Water Dive (2+ days, $421)",
        "Rescue Diver (5 days, $600)",
        "Specialty Dives ($190 per dive)",
        "Emergency First Response (2 days, $150)",
      ],
    },
    divemaster: {
      title: "Divemaster Course",
      description: "Professional-level training to lead certified divers and assist instructors.",
      image: "/people.jpg",
      icon: <FaUsers className="h-6 w-6 text-white" />,
      duration: "2-11 weeks",
      price: "$1000+",
      features: [
        "PADI Divemaster Course (2-4 weeks, $1000)",
        "PADI Divemaster Internship (3-11 weeks)",
        "Professional certification",
        "Career opportunities in diving",
      ],
    },
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      text: "My diving experience with Scubachannel Fuvahmulah was absolutely incredible! The instructors were knowledgeable and patient, making my first diving experience unforgettable.",
      rating: 5,
    },
    {
      name: "Marco Rossi",
      location: "Italy",
      text: "Swimming with tiger sharks was a dream come true. The team ensured our safety while providing an exhilarating experience. Would definitely recommend!",
      rating: 5,
    },
    {
      name: "Akiko Tanaka",
      location: "Japan",
      text: "The visibility in Fuvahmulah is amazing! Completed my Advanced course here and the instructors were professional and friendly. Can't wait to come back!",
      rating: 5,
    },
  ]

  const galleryImages = ["/ray.jpg", "/people.JPG", "/loneshark.JPG", "/sharktop.JPG", "/shark.JPG", "/img1.jpg"]

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Header Section */}
      <Navbar />

      {/* Background Video */}
      <div className="absolute inset-0 -z-10 w-full h-[768px] bg-black">
        <video autoPlay loop muted playsInline className="object-cover w-full h-full opacity-70">
          <source src="/img77.MP4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section with Orbital Effect */}
      <section className="relative py-42 h-[600px] flex items-center justify-center px-4 overflow-hidden">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} relative z-10`}
        >
          <h1 className="nasa-font text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">
            Discover the Underwater Paradise of Fuvahmulah
          </h1>
          <p className="nasa-font text-xl md:text-2xl text-white mb-8 tracking-wide">
            Experience world-class diving with tiger sharks and vibrant marine life in the pristine waters of the
            Maldives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Explore Courses <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Orbital Elements */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-20 h-20 bg-blue-500/30 rounded-full top-1/4 left-1/4 animate-orbit-1"></div>
          <div className="absolute w-12 h-12 bg-teal-500/30 rounded-full bottom-1/3 right-1/3 animate-orbit-2"></div>
          <div className="absolute w-16 h-16 bg-cyan-500/30 rounded-full top-1/2 right-1/4 animate-orbit-3"></div>
          <div className="absolute w-24 h-24 bg-indigo-500/20 rounded-full bottom-1/4 left-1/3 animate-orbit-4"></div>
          <div className="absolute w-10 h-10 bg-white/20 rounded-full top-1/3 right-1/4 animate-orbit-5"></div>
          <div className="absolute w-14 h-14 bg-blue-400/20 rounded-full bottom-1/2 left-1/4 animate-orbit-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Welcome to Scubachannel Fuvahmulah</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Located in the pristine waters of Fuvahmulah, Maldives, we offer world-class diving experiences and
                professional PADI courses. Our team of experienced instructors is dedicated to providing safe,
                educational, and unforgettable underwater adventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-4">Expert Instructors</h3>
                <p className="text-gray-700">
                  Our team consists of PADI certified professionals with years of experience in the waters of
                  Fuvahmulah.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaWater className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-4">Unique Marine Life</h3>
                <p className="text-gray-700">
                  Fuvahmulah is famous for its tiger sharks, thresher sharks, and diverse marine ecosystem.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAnchor className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-4">Quality Equipment</h3>
                <p className="text-gray-700">
                  We provide top-of-the-line diving equipment from Scubapro to ensure your safety and comfort.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Right Side - Partner Logos (Top Right) */}
        <div className="flex justify-center items-center gap-8">
          {["/dan.png", "/padi.png", "/subapro.png"].map((src, index) => (
            <div key={index} className=" flex">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Partner Logo ${index + 1}`}
                width={128}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Our Diving Courses</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Whether you're a beginner or an experienced diver, we have courses tailored to enhance your skills and
                underwater experience.
              </p>
            </div>

            {/* Course Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(divingCourses).map(([key, course]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    activeTab === key ? "bg-[#0b385b] text-white" : "bg-white text-[#0b385b] hover:bg-gray-200"
                  }`}
                >
                  {course.icon}
                  {course.title}
                </button>
              ))}
            </div>

            {/* Active Course Content */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={divingCourses[activeTab].image || "/placeholder.svg"}
                    alt={divingCourses[activeTab].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-bold text-[#0b385b] mb-2">{divingCourses[activeTab].title}</h3>
                  <p className="text-gray-700 mb-6">{divingCourses[activeTab].description}</p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCalendarAlt className="text-[#0b385b]" />
                      <span className="font-medium">Duration:</span> {divingCourses[activeTab].duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-[#0b385b]">{divingCourses[activeTab].price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-[#0b385b] mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {divingCourses[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    Book This Course <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Dive Site Gallery</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore the breathtaking underwater world of Fuvahmulah through our gallery of dive sites and marine
                life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">Fuvahmulah Dives {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
{/* 
            <div className="text-center mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#0b385b] text-[#0b385b] hover:text-white border-2 border-[#0b385b] font-bold py-3 px-6 rounded-full transition-colors"
              >
                View Full Gallery <FaArrowRight />
              </Link> */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">What Our Divers Say</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Read testimonials from divers who have experienced the underwater wonders of Fuvahmulah with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-[#0b385b]">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#0b385b] text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Diving Adventure?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your diving experience today and discover the underwater wonders of Fuvahmulah with our expert
              guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link href="/contact" className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
                Book Now <FaArrowRight />
              </Link> */}
              <Link
                href="/courses"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Have questions or ready to book your diving adventure? Get in touch with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6">Get In Touch</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    {/* <div className="bg-[#0b385b] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white" />
                    </div> */}
                    <div className="flex gap-2">
                      <h4 className="font-bold text-[#0b385b]">Location:</h4>
                      <p className="text-gray-700">Fuvahmulah Island, Maldives</p>
                    </div>
                  </div>

                  {/* Fix the email display in the contact section */}
                  <div className="flex items-start gap-4">
                    {/* <div className="bg-[rgb(11,56,91)] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white" />
                    </div> */}
                    <div className="flex gap-1 sm:flex-row sm:gap-2">
                      <h4 className="font-bold text-[#0b385b]">Email:</h4>
                      <p className="text-gray-700 break-all">sales@scubachannelfuvahmulah.com</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0b385b] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/share/18u7oE113F/?mibextid=wwXIfr"
                    className="bg-[#0b385b] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="https://www.instagram.com/scubachannelfvm?igsh=MW5vZDJ4ZDZpMGdicg%3D%3D&utm_source=qr"
                    className="bg-[#0b385b] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://x.com/scubachannelfvm?s=21&t=lH-WtqFiIOVaHTDYXc8iUg"
                    className="bg-[#0b385b] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                  >
                    <FaTwitter />
                  </Link>
                  {/* <Link
                    href="#"
                    className="bg-[#0b385b] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                  >
                    <FaYoutube />
                  </Link> */}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-6 rounded-full transition-colors w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
