"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaPlane,
  FaShip,
  FaArrowRight,
  FaCalendarAlt,
  FaInfoCircle,
  FaMoneyBillWave,
  FaClock,
  FaSuitcase,
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

export default function TransferPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openAccordions, setOpenAccordions] = useState({})

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

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Header Section */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="relative w-full h-[568px]">
          <Image src="/fvm-3.JPG" alt="Fuvahmulah Island" fill className="object-cover opacity-50" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[68vh] flex items-center justify-center px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-nasa text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">
            Travel & Transfers
          </h1>
          <p className="font-nasa text-xl md:text-2xl text-white mb-8 tracking-wide">
            Everything you need to know about getting to Fuvahmulah Island
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#flight-info"
              className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Flight Information <FaArrowRight />
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
        {/* Overview Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Getting to Fuvahmulah</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Fuvahmulah is accessible via domestic flights and ferry services. We can help arrange your
                transportation to ensure a smooth journey to our island paradise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPlane className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-4 text-center">Domestic Flights</h3>
                <p className="text-gray-700">
                  The most convenient way to reach Fuvahmulah is by domestic flight from Malé International Airport.
                  Maldivian Airlines operates daily flights to Fuvahmulah Airport (FVM).
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShip className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-4 text-center">Ferry Services</h3>
                <p className="text-gray-700">
                  RTL Scheduled Ferry operates speed boat services between Addu (Feydhoo), Fuvahmulah, and Vaadhoo
                  (Huvadhoo), providing an alternative transportation option.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#0b385b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaMoneyBillWave className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b385b] mb-4 text-center">Ticket Booking</h3>
                <p className="text-gray-700">
                  We are an authorized ticket seller for Maldivian Airlines and can arrange your domestic flights at
                  rates up to 30% lower than booking directly with airlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Domestic Flights Section */}
        <section id="flight-info" className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Domestic Flights</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Maldivian Airlines is the primary carrier operating flights between Malé and Fuvahmulah. We can help
                arrange your domestic flights at discounted rates.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6">Flight Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#0b385b] mb-4 flex items-center gap-2">
                      <FaInfoCircle /> General Information
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Average flying time: 80 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Daily flights: 3 to 4 flights per day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Operated by: Maldivian Airlines (National Airline)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>We offer rates 30% lower than booking directly with airlines</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0b385b] mb-4 flex items-center gap-2">
                      <FaMoneyBillWave /> Fares & Baggage
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>
                          Divers fare one way Malé - Fuvahmulah: $149.00 per adult / $125 per child / free for infants
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Non-divers: Additional service commission of USD 30 per person</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Baggage allowance: 25kg checked baggage + 5kg hand luggage per person</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Excess baggage: $4.3 per kilogram (subject to GST)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-[#0b385b] mb-4 flex items-center gap-2">
                    <FaClock /> Check-in Information
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <span>Check-in begins two hours before departure time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <span>Latest check-in: One hour before departure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <span>Child fare applies to ages 2-12 years; infant fare applies to children under 2 years</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-[#0b385b] mb-4 flex items-center gap-2">
                    <FaSuitcase /> Booking Requirements
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <span>Copy of your passport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <span>
                        International flight ticket details (to ensure domestic flight times remain unchanged)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                      <span>Preferred domestic flight times</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flight Schedules */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6 flex items-center gap-2">
                  <FaCalendarAlt /> Daily Flight Schedules
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0b385b] text-white">
                        <th className="p-4 text-left">Route</th>
                        <th className="p-4 text-left">Flight Number</th>
                        <th className="p-4 text-left">Departure</th>
                        <th className="p-4 text-left">Arrival</th>
                        <th className="p-4 text-left">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">Malé (MLE) to Fuvahmulah (FVM)</td>
                        <td className="p-4">124</td>
                        <td className="p-4">15:05</td>
                        <td className="p-4">16:30</td>
                        <td className="p-4">Daily</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">Fuvahmulah (FVM) to Malé (MLE)</td>
                        <td className="p-4">125</td>
                        <td className="p-4">16:55</td>
                        <td className="p-4">18:20</td>
                        <td className="p-4">Daily</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">Fuvahmulah (FVM) to Malé (MLE)</td>
                        <td className="p-4">129</td>
                        <td className="p-4">05:10</td>
                        <td className="p-4">06:20</td>
                        <td className="p-4">Tuesday / Friday / Sunday</td>
                      </tr>
                      <tr>
                        <td className="p-4">Malé (MLE) to Fuvahmulah (FVM)</td>
                        <td className="p-4">128</td>
                        <td className="p-4">23:35</td>
                        <td className="p-4">01:00</td>
                        <td className="p-4">Monday / Thursday / Saturday</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-700 italic">
                    <FaInfoCircle className="inline-block mr-2 text-blue-500" />
                    Flight schedules are subject to change. We recommend booking your flights in advance, especially
                    during peak season (December to April).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ferry Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Ferry Services</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                RTL Scheduled Ferry operates speed boat services between Addu, Fuvahmulah, and Vaadhoo, providing an
                alternative transportation option.
              </p>
            </div>

            {/* Fuvahmulah - Addu Ferry */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6 flex items-center gap-2">
                  <FaShip /> Fuvahmulah - Addu Ferry Schedule
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0b385b] text-white">
                        <th className="p-4 text-left">Departure</th>
                        <th className="p-4 text-left">Stop</th>
                        <th className="p-4 text-left">Arrival</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">GN. Fuvahmulah 07:00</td>
                        <td className="p-4">S. Hulhulhumeedhoo 08:00</td>
                        <td className="p-4">S. Feydhoo 08:25</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">S. Feydhoo 10:00</td>
                        <td className="p-4">S. Hulhulhumeedhoo 10:20</td>
                        <td className="p-4">GN. Fuvahmulah 11:25</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">GN. Fuvahmulah 10:30</td>
                        <td className="p-4">S. Hulhulhumeedhoo 11:30</td>
                        <td className="p-4">S. Feydhoo 11:55</td>
                      </tr>
                      <tr>
                        <td className="p-4">S. Feydhoo 16:00</td>
                        <td className="p-4">S. Hulhulhumeedhoo 16:20</td>
                        <td className="p-4">GN. Fuvahmulah 17:25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Fuvahmulah - Vaadhoo Ferry */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6 flex items-center gap-2">
                  <FaShip /> Fuvahmulah - GDH. Vaadhoo Ferry Schedule
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0b385b] text-white">
                        <th className="p-4 text-left">Departure</th>
                        <th className="p-4 text-left">Arrival</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">GN. Fuvahmulah 06:15</td>
                        <td className="p-4">GDH. Vaadhoo 07:50</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">GDH. Vaadhoo 08:15</td>
                        <td className="p-4">GN. Fuvahmulah 09:50</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4">GN. Fuvahmulah 14:00</td>
                        <td className="p-4">GDH. Vaadhoo 15:35</td>
                      </tr>
                      <tr>
                        <td className="p-4">GDH. Vaadhoo 16:10</td>
                        <td className="p-4">GN. Fuvahmulah 17:45</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-700 italic">
                    <FaInfoCircle className="inline-block mr-2 text-blue-500" />
                    RTL ferry schedules may change or be postponed due to bad weather conditions or for maintenance
                    purposes. If you are planning to travel, it's best to check for updates from the official RTL
                    website:
                    <a
                      href="http://www.rtl.mv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      www.rtl.mv
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Private Speed Boat */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6 flex items-center gap-2">
                  <FaShip /> Private Speed Boat Transfer
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-[#0b385b] mb-4">Addu - Fuvahmulah</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Route: Addu (S.Feydhoo jetty) - Fuvahmulah (Harbour)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Duration: 60 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Price: $500.00 (maximum 10 persons)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-[#0b385b] mb-4">Huvadhoo - Fuvahmulah</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Route: Huvadhoo (Gdh. Vaadhoo jetty) - Fuvahmulah (Harbour)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Duration: 80 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Price: $1000.00 (maximum 10 persons)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-700 italic">
                    <FaInfoCircle className="inline-block mr-2 text-blue-500" />
                    Private speed boat transfers require 48 hours advance reservation. Please contact us to arrange your
                    private transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Male Airport Map Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Malé Airport Information</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Velana International Airport (MLE) in Malé is your gateway to the Maldives and the starting point for
                your journey to Fuvahmulah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-6">Airport Transfer Tips</h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#0b385b] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b385b] mb-1">Arrival at Malé International Airport</h4>
                      <p className="text-gray-700">
                        After clearing immigration and customs, proceed to the domestic terminal.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-[#0b385b] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b385b] mb-1">Domestic Terminal Transfer</h4>
                      <p className="text-gray-700">
                        The domestic terminal is within walking distance from the international terminal.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-[#0b385b] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b385b] mb-1">Check-in Process</h4>
                      <p className="text-gray-700">
                        Check-in at the Maldivian Airlines counter with your ID and booking reference.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-[#0b385b] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b385b] mb-1">Arrival at Fuvahmulah</h4>
                      <p className="text-gray-700">
                        Upon arrival at Fuvahmulah Airport, our team will meet you and transfer you to your
                        accommodation.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <p className="text-gray-700">
                    We recommend allowing at least 3 hours between your international arrival and domestic departure to
                    ensure a smooth transfer process.
                  </p>
                </div>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/male-air.jpg" alt="Malé Airport Map" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">
                How to Book Your Transfer
              </h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Let us handle your transportation arrangements to ensure a smooth journey to Fuvahmulah.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#0b385b] mb-3 text-center">Contact Us</h4>
                    <p className="text-gray-700 text-center">
                      Send us your travel details including dates, number of travelers, and preferred transportation
                      method.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#0b385b] mb-3 text-center">Receive Quote</h4>
                    <p className="text-gray-700 text-center">
                      We'll provide you with transportation options and pricing based on your requirements.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#0b385b] mb-3 text-center">Confirmation</h4>
                    <p className="text-gray-700 text-center">
                      Once confirmed, we'll book your transportation and send you all the details you need for your
                      journey.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/contact?subject=Transfer%20Booking"
                    className="inline-flex items-center gap-2 bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    Book Your Transfer <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#0b385b] text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="font-nasa text-3xl md:text-4xl font-bold mb-6">Ready to Visit Fuvahmulah?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us help you arrange your transportation to the Tiger Shark Capital of the World. Contact us today to
              book your flights and transfers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Contact Us <FaArrowRight />
              </Link>
              <Link
                href="/courses"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Explore Diving Courses
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
