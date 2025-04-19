"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaWhatsapp,
} from "react-icons/fa"
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

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [openFaqs, setOpenFaqs] = useState({})

  // WhatsApp message template
  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Scubachannel Fuvahmulah! I'm interested in learning more about your diving services.`,
    )
  }

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "general",
      })
    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-white" />,
      title: "Our Location",
      details: ["Zindha, husnuheenamagu, funaadu", "Fuvahmulah Island", "Maldives"],
    },
    {
      icon: <FaPhone className="text-white" />,
      title: "Phone Numbers",
      details: ["+960 7930760"],
    },
    {
      icon: <FaEnvelope className="text-white" />,
      title: "Email Us",
      details: ["sales@scubachannelfuvahmulah.com"],
    },
  ]

  const faqs = [
    {
      id: "faq-1",
      question: "How can I book a diving course?",
      answer:
        "You can book a diving course by filling out the contact form on this page, calling us directly, sending us an email, or messaging us on WhatsApp. We'll get back to you within 24 hours to confirm your booking and provide further instructions.",
    },
    {
      id: "faq-2",
      question: "What information do you need for a booking?",
      answer:
        "To process your booking, we need your full name, contact information, preferred course or diving package, and your planned dates of visit. If you have any specific requirements or questions, please include those as well.",
    },
    {
      id: "faq-3",
      question: "Do you offer airport transfers?",
      answer:
        "Yes, we offer airport transfers from Fuvahmulah Airport to your accommodation. Please let us know your flight details when booking, and we'll arrange transportation for you at an additional cost.",
    },
    {
      id: "faq-4",
      question: "Can I reschedule my diving course?",
      answer:
        "Yes, you can reschedule your diving course with at least 7 days' notice without any penalty. For changes made within 7 days of your scheduled start date, a rescheduling fee may apply. Please contact us as soon as possible if you need to make changes to your booking.",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 2:00 PM" },
  ]

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Header Section */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="relative w-full h-[568px] md:h-screen">
          <Image src="/shark-hue.jpg" alt="Underwater Background" fill className="object-cover opacity-50" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-24 pb-12 md:py-0 md:h-[60vh] flex items-center justify-center px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-nasa text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">Contact Us</h1>
          <p className="font-nasa text-xl md:text-2xl text-white mb-8 tracking-wide">
            Have questions about our diving courses or want to book your next underwater adventure? Get in touch with
            our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Send a Message <FaArrowRight />
            </a>
            <a
              href={`https://wa.me/9607930760?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        {/* Contact Information Cards */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b385b] mb-4">{item.title}</h3>
                  <div className="space-y-2">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section id="contact-form" className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Fill out the form below and our team will get back to you as soon as possible to help with your inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6">Send Us a Message</h3>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-100 text-green-700 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-green-700">Message Sent Successfully!</h4>
                    </div>
                    <p className="mb-4">
                      Thank you for contacting Scubachannel Fuvahmulah. We've received your inquiry and will get back to
                      you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-[#0b385b] font-medium hover:underline flex items-center gap-1"
                    >
                      Send another message <FaArrowRight size={12} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">{submitError}</div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                          placeholder="Your Phone (optional)"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="open-water">Open Water Course</option>
                        <option value="advanced">Advanced Diver Course</option>
                        <option value="rescue">Rescue Diver Course</option>
                        <option value="divemaster">Divemaster Course</option>
                        <option value="specialty">Specialty Courses</option>
                        <option value="tiger-shark">Tiger Shark Diving</option>
                        <option value="fun-dive">Fun Dives</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex-1 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <FaArrowRight />
                          </span>
                        )}
                      </button>
                      <a
                        href={`https://wa.me/9607930760?text=${generateWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  </form>
                )}
              </div>

              {/* Map and Business Hours */}
              <div>
                {/* Map */}
                <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-[#0b385b] mb-4">Fuvahmulah Island Map</h3>
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/shark-map.jpg"
                      alt="Map of Fuvahmulah"
                      fill
                      className="object-fill w-full transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>

                {/* Second Map */}
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-[#0b385b] mb-4">Diving Spots Map</h3>
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/island.jpg"
                      alt="Diving Spots Map"
                      fill
                      className="object-fill w-full transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0b385b] mb-4">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className="text-gray-700">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer Information Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Travel & Transfers</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Information on how to reach Fuvahmulah Island and our transfer services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-3 text-center">Step 1: International Flight</h3>
                <p className="text-gray-700">
                  Book your international flight to Malé International Airport (Velana International Airport, MLE). Many
                  international airlines operate flights to the Maldives from major cities worldwide.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-3 text-center">Step 2: Domestic Flight</h3>
                <p className="text-gray-700">
                  From Malé, take a domestic flight to Fuvahmulah Airport (FVM). Flights are operated by Maldivian
                  (Island Aviation) and Manta Air. The flight takes approximately 1 hour. We can assist with booking
                  your domestic flight.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-3 text-center">Step 3: Airport Pickup</h3>
                <p className="text-gray-700">
                  Our team will meet you at Fuvahmulah Airport and transfer you to your accommodation. This service is
                  complimentary for all our guests. Just provide us with your flight details in advance.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0b385b] mb-4">Transfer Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Airport Transfers:</span> Complimentary pickup and drop-off at
                        Fuvahmulah Airport
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Dive Site Transportation:</span> Daily transfers to all dive sites
                        included in your package
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Island Excursions:</span> Transportation for island tours and
                        activities can be arranged
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Special Requests:</span> Custom transportation needs can be
                        accommodated with advance notice
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b385b] mb-4">Important Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Flight Delays:</span> Please inform us of any changes to your flight
                        schedule
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Luggage:</span> Standard domestic flight luggage allowance is 20kg +
                        5kg hand luggage
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Transit Time:</span> Allow at least 3 hours between international
                        and domestic flights
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Assistance:</span> Our team can help with any questions about your
                        journey to Fuvahmulah
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center gap-2 bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Contact Us About Transfers <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about contacting us and booking our services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Custom FAQ Accordion */}
              <div className="w-full">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex justify-between items-center w-full px-6 py-4 text-left font-bold text-[#0b385b]"
                    >
                      <span>{faq.question}</span>
                      {openFaqs[faq.id] ? (
                        <FaChevronUp className="text-[#0b385b] flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-[#0b385b] flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openFaqs[faq.id] ? "max-h-96 pb-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-700 mb-4">Don't see your question here?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Ask Us Directly <FaArrowRight />
                </a>
                <a
                  href={`https://wa.me/9607930760?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  <FaWhatsapp /> Ask via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-[#0b385b] rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="font-nasa text-3xl font-bold mb-4">Need Urgent Assistance?</h2>
                  <p className="text-white/90 mb-6">
                    For emergency bookings or urgent inquiries, please contact our emergency hotline. We're available
                    24/7 to assist you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FaPhone className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Emergency Hotline</p>
                        <p className="text-xl font-bold">+960 7930760</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FaWhatsapp className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">WhatsApp</p>
                        <p className="text-xl font-bold">+960 7930760</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="tel:+9607930760"
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      <FaPhone /> Call Now
                    </Link>
                    <a
                      href={`https://wa.me/9607930760?text=${encodeURIComponent("URGENT: I need immediate assistance with...")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      <FaWhatsapp /> WhatsApp Now
                    </a>
                  </div>
                </div>
                <div className="hidden md:block h-full">
                  <div className="h-full relative">
                    <Image src="/shark-hue.jpg" alt="Emergency Contact" fill className="object-cover opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#0b385b] text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="font-nasa text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Diving Adventure?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your diving course today and discover the underwater wonders of Fuvahmulah with our expert
              instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Contact Us Now <FaArrowRight />
              </a>
              <a
                href={`https://wa.me/9607930760?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
              <Link
                href="/courses"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto"
              >
                View Our Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-nasa text-2xl font-bold text-[#0b385b]">Our Partners</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["/dan.png", "/padi.png", "/subapro.png", "/mares.jpg"].map((src, index) => (
                <div key={index} className="flex">
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
          </div>
        </section>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/9607930760?text=${generateWhatsAppMessage()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-16 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Footer */}
      <Footer />
    </div>
  )
}
