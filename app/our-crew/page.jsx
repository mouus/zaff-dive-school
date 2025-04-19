"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaInstagram, FaEnvelope, FaArrowRight, FaAward, FaShip, FaWater, FaWhatsapp } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// NASA font style
const nasaFontStyle = `
  @font-face {
    font-family: 'NASA';
    src: url('/font/Nasa.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  .font-nasa {
    font-family: 'NASA', sans-serif !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
  }
`

export default function CrewPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    setIsVisible(true)

    // Inject NASA font style
    const style = document.createElement("style")
    style.innerHTML = nasaFontStyle
    document.head.appendChild(style)

    return () => {
      // Find and remove the style element
      const styleElements = document.querySelectorAll("style")
      styleElements.forEach((el) => {
        if (el.innerHTML.includes(".font-nasa") && document.head.contains(el)) {
          try {
            document.head.removeChild(el)
          } catch (error) {
            console.log("Style element already removed")
          }
        }
      })
    }
  }, [])

  // Crew data
  const crewMembers = [
    {
      id: 6,
      name: "Nishan",
      role: "Captain",
      category: "staff",
      image: "/team-4.jpg",
      bio: "A highly skilled boat captain with nearly 11 years of experience, Nishan's deep knowledge of Maldivian waters ensures smooth and safe journeys for all our guests. As a certified rescue diver, he adds an extra layer of safety and expertise to every adventure.",
      certifications: ["Certified Rescue Diver", "Maritime Navigation"],
      experience: "11 years",
      social: {
        email: "info@scubachannelfuvahmulah.com",
      },
      expertise: ["Navigation", "Weather Patterns", "Emergency Response"],
    },
    {
      id: 7,
      name: "Alzum",
      role: "Assistant Captain",
      category: "staff",
      image: "/team-5.jpg",
      bio: "A former Maldivian Defense Force marine, Alzum is a highly trained emergency first responder and rescue expert. With years of experience in hospitality, he ensures the safety and comfort of all our guests while delivering top-tier service.",
      certifications: ["Emergency First Responder", "Hospitality Management"],
      experience: "Several years",
      social: {
        email: "info@scubachannelfuvahmulah.com",
      },
      expertise: ["Emergency Response", "Guest Relations", "Safety Protocols"],
    },
    {
      id: 8,
      name: "Rafhan",
      role: "Crew Member",
      category: "staff",
      image: "/team-2.jpg",
      bio: "An experienced food and beverage professional with a background in five-star resorts, Rafhan brings refined hospitality skills to our team. His attention to detail and guest-focused service ensure a premium onboard experience.",
      certifications: ["Hospitality Service"],
      experience: "Several years",
      social: {
        email: "info@scubachannelfuvahmulah.com",
      },
      expertise: ["Food & Beverage", "Guest Service", "Hospitality"],
    },
    {
      id: 9,
      name: "Nafiz",
      role: "Crew Member",
      category: "staff",
      image: "/crew-2.jpg",
      bio: "Nafiz is a dedicated member of our crew, contributing to the smooth operation of our diving excursions.",
      certifications: ["Basic Safety Training"],
      experience: "Ongoing",
      social: {
        email: "info@scubachannelfuvahmulah.com",
      },
    },
    {
      id: 10,
      name: "Samir",
      role: "Crew Member",
      category: "staff",
      image: "/crew-1.jpg",
      bio: "Samir is part of our dedicated crew team, helping to ensure our guests have a safe and enjoyable diving experience.",
      certifications: ["Basic Safety Training"],
      experience: "Ongoing",
      social: {
        email: "info@scubachannelfuvahmulah.com",
      },
    },
  ]

  const filteredCrewMembers =
    activeFilter === "all" ? crewMembers : crewMembers.filter((member) => member.category === activeFilter)

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Header Section */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="relative w-full h-[568px]">
          <Image src="/sharktop.JPG" alt="Underwater Background" fill className="object-cover opacity-50" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[68vh] flex items-center justify-center px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-nasa text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">Our Crew</h1>
          <p className="font-nasa text-xl md:text-2xl text-white mb-8 tracking-wide">
            Meet the passionate team behind Scubachannel Fuvahmulah's exceptional diving experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#team-section"
              className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Meet The Team <FaArrowRight />
            </a>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        {/* Team Introduction */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Our Expert Team</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our team consists of experienced dive professionals who are passionate about the underwater world and
                committed to providing safe, educational, and unforgettable diving experiences.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShip className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-2">Professional Instructors</h3>
                <p className="text-3xl font-bold text-[#0b385b]">10+</p>
                <p className="text-gray-700 mt-2">Years of combined experience</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-2">PADI Certified</h3>
                <p className="text-3xl font-bold text-[#0b385b]">100%</p>
                <p className="text-gray-700 mt-2">Professional certification</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaWater className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-2">Dive Experience</h3>
                <p className="text-3xl font-bold text-[#0b385b]">5000+</p>
                <p className="text-gray-700 mt-2">Dives completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section id="team-section" className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The passionate individuals who make your diving experience safe, educational, and unforgettable.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeFilter === "all" ? "bg-[#0b385b] text-white" : "bg-white text-[#0b385b] hover:bg-gray-200"
                }`}
              >
                All Team Members
              </button>
              {/* <button
                onClick={() => setActiveFilter("instructor")}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeFilter === "instructor"
                    ? "bg-[#0b385b] text-white"
                    : "bg-white text-[#0b385b] hover:bg-gray-200"
                }`}
              >
                Instructors
              </button>
              <button
                onClick={() => setActiveFilter("guide")}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeFilter === "guide" ? "bg-[#0b385b] text-white" : "bg-white text-[#0b385b] hover:bg-gray-200"
                }`}
              >
                Dive Guides
              </button> */}
              <button
                onClick={() => setActiveFilter("staff")}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeFilter === "staff" ? "bg-[#0b385b] text-white" : "bg-white text-[#0b385b] hover:bg-gray-200"
                }`}
              >
                Support Staff
              </button>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCrewMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-80">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#0b385b] mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-gray-700 mb-4 line-clamp-3">{member.bio}</p>

                    <div className="mb-4">
                      <p className="font-bold text-[#0b385b] mb-2">Certifications:</p>
                      <ul className="space-y-1">
                        {member.certifications &&
                          member.certifications.map((cert, index) => (
                            <li key={index} className="text-gray-700">
                              {cert}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {member.expertise && (
                      <div className="mb-4">
                        <p className="font-bold text-[#0b385b] mb-2">Areas of Expertise:</p>
                        <p className="text-gray-700">{member.expertise.join(", ")}</p>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[#0b385b]">
                        Experience: <span className="font-normal text-gray-700">{member.experience}</span>
                      </p>
                      <div className="flex gap-3">
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            className="text-[#0b385b] hover:text-[#0a2e4a]"
                            aria-label={`${member.name}'s Instagram`}
                          >
                            <FaInstagram size={20} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="text-[#0b385b] hover:text-[#0a2e4a]"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <FaLinkedin size={20} />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="text-[#0b385b] hover:text-[#0a2e4a]"
                            aria-label={`Email ${member.name}`}
                          >
                            <FaEnvelope size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        {/* <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-[#0b385b] rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="font-nasa text-3xl font-bold mb-4">Join Our Team</h2>
                  <p className="text-white/90 mb-6">
                    Are you passionate about diving and want to share the underwater wonders of Fuvahmulah with others?
                    We're always looking for talented individuals to join our crew.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-white mt-1 flex-shrink-0" />
                      <span>PADI certified dive professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-white mt-1 flex-shrink-0" />
                      <span>Passionate about marine conservation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-white mt-1 flex-shrink-0" />
                      <span>Customer-focused with excellent communication skills</span>
                    </li>
                  </ul>
                  <Link
                    href="/contact?subject=Job%20Application"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    Apply Now <FaArrowRight />
                  </Link>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image src="/people.jpg" alt="Join Our Team" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-6">Dive With Our Experts</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to explore the underwater wonders of Fuvahmulah with our experienced team? Book your diving
              adventure today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Explore Courses <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-[#0b385b]/10 text-[#0b385b] border-2 border-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
                  {/* WhatsApp Button */}
                  <a
              href="https://wa.me/9607930760"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp size={28} />
            </a>

      {/* Footer */}
      <Footer />
    </div>
  )
}
