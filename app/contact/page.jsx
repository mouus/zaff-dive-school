"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaArrowRight,
    FaChevronDown,
    FaChevronUp,
    FaCalendarAlt,
} from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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

    useEffect(() => {
        setIsVisible(true)
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
            details: ["Scubachannel Fuvahmulah", "Fuvahmulah Island", "Maldives"],
        },
        {
            icon: <FaPhone className="text-white" />,
            title: "Phone Numbers",
            details: ["+960 123 4567", "+960 765 4321"],
        },
        {
            icon: <FaEnvelope className="text-white" />,
            title: "Email Us",
            details: ["sales@scubachannelfuvahmulah.com", "info@scubachannelfuvahmulah.com"],
        },
    ]

    const faqs = [
        {
            id: "faq-1",
            question: "How can I book a diving course?",
            answer:
                "You can book a diving course by filling out the contact form on this page, calling us directly, or sending us an email. We'll get back to you within 24 hours to confirm your booking and provide further instructions.",
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
                <div className="relative w-full h-[768px]">
                    <Image
                        src="/shark-4.jpg"
                        alt="Underwater Background"
                        fill
                        className="object-cover opacity-50"
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center px-4">
                <div
                    className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-white mb-8">
                        Have questions about our diving courses or want to book your next underwater adventure? Get in touch with
                        our team today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact-form"
                            className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                        >
                            Send a Message <FaArrowRight />
                        </a>
                        <Link
                            href="/courses"
                            className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
                        >
                            View Courses
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-white">
                {/* Contact Information Cards */}
                <section className="py-16 px-4">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Get In Touch</h2>
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

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors w-full flex items-center justify-center"
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
                                    </form>
                                )}
                            </div>

                            {/* Map and Business Hours */}
                            <div className="space-y-8">
                                {/* Map */}
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <div className="aspect-video relative rounded-md overflow-hidden">
                                        <Image
                                            src="/island.jpg"
                                            alt="Map of Fuvahmulah"
                                            fill
                                            className="object-cover transition-transform duration-300 transform hover:scale-105"
                                        />
                                        {/* <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Interactive map would be displayed here</p>
                    </div> */}
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-[#0b385b] text-white p-3 rounded-full">
                                            <FaCalendarAlt className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0b385b]">Business Hours</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        {businessHours.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0"
                                            >
                                                <span className="font-medium text-gray-800">{item.day}</span>
                                                <span className="text-gray-700">{item.hours}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Social Media */}
                                <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-[#0b385b] text-white p-3 rounded-full">
                                            <FaInstagram className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0b385b]">Connect With Us</h3>
                                    </div>

                                    <p className="text-gray-700 mb-6">
                                        Follow us on social media for the latest updates, underwater photos, and special offers.
                                    </p>

                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <Link
                                            href="#"
                                            className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                                        >
                                            <FaFacebookF size={20} />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                                        >
                                            <FaInstagram size={20} />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                                        >
                                            <FaTwitter size={20} />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-[#0a2e4a] transition-colors"
                                        >
                                            <FaYoutube size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 px-4">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Frequently Asked Questions</h2>
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
                                            className={`px-6 overflow-hidden transition-all duration-300 ${openFaqs[faq.id] ? "max-h-96 pb-4" : "max-h-0"
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
                            <a
                                href="#contact-form"
                                className="inline-flex items-center gap-2 bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors"
                            >
                                Ask Us Directly <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Emergency Contact Section */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="bg-[#0b385b] rounded-xl shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                                <div className="p-8 md:p-12 text-white">
                                    <h2 className="text-3xl font-bold mb-4">Need Urgent Assistance?</h2>
                                    <p className="text-white/90 mb-6">
                                        For emergency bookings or urgent inquiries, please contact our emergency hotline. We're available
                                        24/7 to assist you.
                                    </p>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <FaPhone className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/80">Emergency Hotline</p>
                                            <p className="text-xl font-bold">+960 999 8888</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="tel:+9609998888"
                                        className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-6 rounded-full transition-colors"
                                    >
                                        Call Now <FaArrowRight />
                                    </Link>
                                </div>
                                {/* <div className="relative h-64 md:h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Emergency Contact"
                    fill
                    className="object-cover"
                  />
                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 bg-[#0b385b] text-white">
                    <div className="max-w-screen-xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Diving Adventure?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Book your diving course today and discover the underwater wonders of Fuvahmulah with our expert
                            instructors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact-form"
                                className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                            >
                                Contact Us Now <FaArrowRight />
                            </a>
                            <Link
                                href="/courses"
                                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
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
                            <h2 className="text-2xl font-bold text-[#0b385b]">Our Partners</h2>
                        </div>
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

                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

