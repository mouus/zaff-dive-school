"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaWater,
  FaAnchor,
  FaLifeRing,
  FaArrowRight,
  FaCalendarAlt,
  FaCheck,
  FaGraduationCap,
  FaSwimmer,
  FaShip,
  FaFish,
  FaCamera,
  FaCompass,
  FaChevronDown,
  FaChevronUp,
  FaDollarSign,
  FaHotel,
  FaWhatsapp,
} from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Add NASA font style
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

export default function CoursesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("openwater")
  const [openAccordions, setOpenAccordions] = useState({})
  const [openFaqs, setOpenFaqs] = useState({})
  const [activePriceTab, setActivePriceTab] = useState("individual")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
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

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Updated course categories based on client's information
  const courseCategories = [
    {
      id: "openwater",
      title: "Open Water",
      icon: <FaWater className="h-6 w-6" />,
      description:
        "The world's most popular diving course that qualifies you to dive independently with a buddy to 18 meters/60 feet.",
      courses: [
        {
          title: "PADI Open Water Diver",
          duration: "3 - 4 days",
          price: "$550",
          description:
            "The world's most popular dive course that qualifies you to dive independently with a buddy to 18 meters/60 feet.",
          requirements: ["Age 10+ years", "Able to swim 200 meters", "Float/tread water for 10 minutes", "Good health"],
          includes: [
            "All learning materials",
            "Knowledge development sessions",
            "5 confined water dives",
            "4 open water dives",
            "PADI certification upon completion",
          ],
          skills: [
            "Dive planning",
            "Equipment assembly and care",
            "Underwater navigation",
            "Buoyancy control",
            "Emergency procedures",
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "Advanced Open Water",
      icon: <FaAnchor className="h-6 w-6" />,
      description: "Expand your diving knowledge with 5 adventure dives, including deep and navigation dives.",
      courses: [
        {
          title: "Advanced Open Water Dive",
          duration: "minimum 2 days",
          price: "$421",
          description: "Expand your diving knowledge with 5 adventure dives, including deep and navigation dives.",
          requirements: ["Open Water Diver certification", "Good health"],
          includes: ["Learning materials", "5 adventure dives", "PADI certification upon completion"],
          skills: [
            "Deep diving techniques",
            "Underwater navigation",
            "Peak performance buoyancy",
            "Specialized diving activities",
          ],
        },
      ],
    },
    {
      id: "efr",
      title: "EFR & Rescue",
      icon: <FaLifeRing className="h-6 w-6" />,
      description: "Learn essential first aid, CPR skills, and how to prevent and manage diving emergencies.",
      courses: [
        {
          title: "Emergency First Response (EFR)",
          duration: "Minimum 2 days",
          price: "$150",
          description: "Learn essential first aid and CPR skills required for the Rescue Diver course.",
          requirements: ["No prior experience needed", "Age 10+ years"],
          includes: ["Learning materials", "Practical skills sessions", "EFR certification upon completion"],
          skills: ["Primary care (CPR)", "Secondary care (first aid)", "AED use", "Emergency management"],
        },
        {
          title: "Rescue Diver",
          duration: "5 days",
          price: "$600",
          description:
            "Learn to prevent and manage problems and handle dive emergencies. A challenging but rewarding course.",
          requirements: ["Advanced Open Water Diver", "EFR certification within 24 months", "Good health"],
          includes: [
            "Learning materials",
            "Confined water practice",
            "Rescue scenarios",
            "PADI certification upon completion",
          ],
          skills: [
            "Self-rescue",
            "Recognizing diver stress",
            "Emergency management",
            "Missing diver procedures",
            "Rescue techniques",
          ],
        },
      ],
    },
    {
      id: "divemaster",
      title: "Divemaster",
      icon: <FaGraduationCap className="h-6 w-6" />,
      description: "Professional-level training to lead certified divers and assist instructors.",
      courses: [
        {
          title: "PADI Divemaster Course",
          duration: "2 - 4 weeks",
          price: "$1000",
          description:
            "The first professional level in the PADI system, training you to lead certified divers and assist instructors.",
          requirements: [
            "Rescue Diver certification",
            "EFR certification within 24 months",
            "40 logged dives",
            "Medical clearance",
            "Age 18+ years",
          ],
          includes: [
            "All learning materials",
            "Practical training sessions",
            "Workshops",
            "PADI certification upon completion",
          ],
          skills: [
            "Dive leadership",
            "Problem solving",
            "Dive briefings",
            "Supervising diving activities",
            "Assisting with student training",
          ],
        },
      ],
    },
    {
      id: "specialty",
      title: "Specialty Courses",
      icon: <FaFish className="h-6 w-6" />,
      description: "Focus on specific diving activities or environments to enhance your skills in that area.",
      courses: [
        {
          title: "Tiger Shark Specialty",
          duration: "2 days",
          price: "$300",
          description:
            "Learn specialized techniques for safely diving with tiger sharks in Fuvahmulah's unique environment.",
          requirements: ["Open Water Diver certification", "Good health"],
          includes: [
            "Learning materials",
            "Specialized training",
            "2 tiger shark dives",
            "Certification upon completion",
          ],
          skills: [
            "Shark behavior understanding",
            "Safety procedures",
            "Proper positioning",
            "Environmental awareness",
          ],
        },
        {
          title: "Deep Diver Specialty",
          duration: "2 days",
          price: "$250",
          description:
            "Master the skills needed for diving between 18-40 meters, including special equipment and safety procedures.",
          requirements: ["Advanced Open Water Diver certification", "Good health"],
          includes: ["Learning materials", "4 deep dives", "PADI certification upon completion"],
          skills: ["Deep diving planning", "Gas management", "Nitrogen narcosis awareness", "Safety procedures"],
        },
        {
          title: "Night Diver Specialty",
          duration: "2 days",
          price: "$225",
          description: "Discover the nocturnal underwater world with specialized training for night diving conditions.",
          requirements: ["Open Water Diver certification", "Good health"],
          includes: ["Learning materials", "3 night dives", "PADI certification upon completion"],
          skills: [
            "Light signal communication",
            "Navigation at night",
            "Nocturnal marine life identification",
            "Safety procedures",
          ],
        },
      ],
    },
  ]

  const specialtyCourses = [
    {
      title: "Tiger Shark Diving Specialty",
      description:
        "Learn specialized techniques for safely diving with tiger sharks in Fuvahmulah's unique environment.",
      icon: <FaFish />,
      duration: "2 days",
      price: "$300",
    },
    {
      title: "Deep Diver Specialty",
      description:
        "Master the skills needed for diving between 18-40 meters, including special equipment and safety procedures.",
      icon: <FaWater />,
      duration: "2 days",
      price: "$250",
    },
    {
      title: "Underwater Photography",
      description: "Learn to capture stunning underwater images with proper techniques, lighting, and composition.",
      icon: <FaCamera />,
      duration: "2 days",
      price: "$275",
    },
    {
      title: "Night Diver Specialty",
      description: "Discover the nocturnal underwater world with specialized training for night diving conditions.",
      icon: <FaSwimmer />,
      duration: "2 days",
      price: "$225",
    },
    {
      title: "Wreck Diver Specialty",
      description: "Explore underwater wrecks safely with specialized training in navigation and hazard awareness.",
      icon: <FaShip />,
      duration: "2 days",
      price: "$275",
    },
    {
      title: "Navigation Specialty",
      description: "Master underwater navigation using natural references, compass, and advanced techniques.",
      icon: <FaCompass />,
      duration: "2 days",
      price: "$225",
    },
  ]

  const faqs = [
    {
      id: "faq-1",
      question: "Do I need to know how to swim to take a diving course?",
      answer:
        "Yes, you need basic swimming skills to enroll in diving courses. For the Open Water Diver course, you should be able to swim 200 meters without swimming aids and float/tread water for 10 minutes. However, you don't need to be an expert swimmer - just comfortable in the water.",
    },
    {
      id: "faq-2",
      question: "What is the minimum age requirement for diving courses?",
      answer:
        "The minimum age varies by course. Children as young as 8 can try the PADI Bubble Maker program. The minimum age for the Open Water Diver course is 10 years old, but children aged 10-11 will receive a Junior Open Water Diver certification with certain depth restrictions. Advanced courses typically require a minimum age of 12, and professional-level courses like Divemaster require participants to be at least 18 years old.",
    },
    {
      id: "faq-3",
      question: "How long does it take to complete a diving course?",
      answer:
        "Course duration varies: Discover Scuba Diving takes just 60 minutes, Open Water Diver typically takes 3-4 days, Advanced Open Water takes 2 days, Rescue Diver takes 5 days, and professional courses like Divemaster can take 2-4 weeks. We can also accommodate flexible schedules for those who need more time.",
    },
    {
      id: "faq-4",
      question: "Do I need to bring my own diving equipment?",
      answer:
        "No, all necessary diving equipment is included in our course fees. We provide high-quality Scubapro equipment including BCD, regulator, wetsuit, mask, fins, and tanks. If you have your own equipment, you're welcome to use it as long as it's in good working condition and has been serviced recently.",
    },
    {
      id: "faq-5",
      question: "Is diving with tiger sharks safe?",
      answer:
        "Diving with tiger sharks at Fuvahmulah is safe when conducted with experienced guides who understand shark behavior. Our instructors are specially trained in shark diving protocols and safety procedures. We maintain small group sizes and ensure all divers are properly briefed before entering the water. While there is always some inherent risk in any adventure activity, our perfect safety record demonstrates our commitment to responsible shark diving practices.",
    },
  ]

  // Dive packages data
  const divePackages = [
    {
      nights: 3,
      dives: 6,
      price: {
        single: 600,
        double: 1000,
        nonDiver: 252,
      },
      includes: [
        "Accommodation",
        "Hotel Room",
        "Breakfast",
        "Hotel arrival & departure",
        "For diving Pick-up and drop-off",
        "2 Dive days (3 Dives per day)",
        "2 Tiger Shark dive",
        "4 Reef dives",
      ],
    },
    {
      nights: 5,
      dives: 9,
      price: {
        single: 990,
        double: 1800,
        nonDiver: 420,
      },
      includes: [
        "Accommodation",
        "Hotel Room",
        "Breakfast",
        "Hotel arrival & departure",
        "For diving Pick-up and drop-off",
        "3 Dive days (3 Dives per day)",
        "3 Tiger Shark dives",
        "6 Reef dives",
      ],
    },
    {
      nights: 7,
      dives: 15,
      price: {
        single: 1475,
        double: 2300,
        nonDiver: 588,
      },
      includes: [
        "Accommodation",
        "Hotel Room",
        "Breakfast",
        "Hotel arrival & departure",
        "For diving Pick-up and drop-off",
        "5 Dive days (3 Dives per day)",
        "5 Tiger Shark dives",
        "10 Reef dives",
        "Complimentary sunset cruise",
      ],
      popular: true,
    },
  ]

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Header Section */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black w-full h-[720px]">
        <div className="relative w-full h-full">
          <Image
            src="/shark_1.jpg"
            alt="Underwater Background"
            layout="fill"
            className="object-cover object-center opacity-50"
            priority
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className={`font-nasa text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider uppercase`}>
            Our PADI Diving Courses
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 tracking-wide">
            From beginners to professionals, we offer a wide range of PADI certified courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#main-courses"
              className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Explore Courses <FaArrowRight />
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
        {/* Dive Prices Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4 uppercase`}>Dive Prices</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Transparent pricing for all our diving services, equipment rentals, and additional services.
              </p>
            </div>

            {/* Price Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActivePriceTab("individual")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  activePriceTab === "individual"
                    ? "bg-[#0b385b] text-white"
                    : "bg-white text-[#0b385b] hover:bg-gray-200"
                }`}
              >
                <FaFish className="h-5 w-5" />
                Individual Dives
              </button>
              <button
                onClick={() => setActivePriceTab("packages")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  activePriceTab === "packages"
                    ? "bg-[#0b385b] text-white"
                    : "bg-white text-[#0b385b] hover:bg-gray-200"
                }`}
              >
                <FaHotel className="h-5 w-5" />
                Dive Packages
              </button>
            </div>

            {/* Individual Dives Tab */}
            <div className={`${activePriceTab === "individual" ? "block" : "hidden"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tiger Shark Dive */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#0b385b] text-white p-4">
                    <h3 className="text-xl font-bold">Tiger Shark Dive</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                      <span>Tiger Shark Dive (Close Proximity)</span>
                      <span className="font-bold text-[#0b385b]">$80 per dive</span>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      Note: This is a special dive and not counted among regular dive packages
                    </p>
                  </div>
                </div>

                {/* Reef Dives */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#0b385b] text-white p-4">
                    <h3 className="text-xl font-bold">Reef Dives</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>1 Reef Dive</span>
                        <span className="font-bold text-[#0b385b]">$70</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>2–6 Reef Dives</span>
                        <span className="font-bold text-[#0b385b]">$65 per dive</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>20+ Reef Dives</span>
                        <span className="font-bold text-[#0b385b]">$60 per dive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* DAN Dive Insurance */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#0b385b] text-white p-4">
                    <h3 className="text-xl font-bold">DAN Dive Insurance</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>1 Day</span>
                        <span className="font-bold text-[#0b385b]">$12</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>7 Days</span>
                        <span className="font-bold text-[#0b385b]">$20</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>14 Days</span>
                        <span className="font-bold text-[#0b385b]">$30</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Included in Dive */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#0b385b] text-white p-4">
                    <h3 className="text-xl font-bold">Included in Dive</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Mask, Fins & Weights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>Towel & Drinking Water (on the boat)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0" />
                        <span>12L Aluminium Tank (Yoke/DIN Valves)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Equipment Rental */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#0b385b] text-white p-4">
                    <h3 className="text-xl font-bold">Equipment Rental (Per Day)</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>Full Set</span>
                        <span className="font-bold text-[#0b385b]">$15</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>BCD</span>
                        <span className="font-bold text-[#0b385b]">$5</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span>Regulator</span>
                        <span className="font-bold text-[#0b385b]">$5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Dive Computer</span>
                        <span className="font-bold text-[#0b385b]">$5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dive Packages Tab */}
            <div className={`${activePriceTab === "packages" ? "block" : "hidden"}`}>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-[#0b385b] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Package</th>
                      <th className="px-4 py-3 text-left">Single Person</th>
                      <th className="px-4 py-3 text-left">Two People</th>
                      <th className="px-4 py-3 text-left">Non-Diver</th>
                      <th className="px-4 py-3 text-left">What's Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    {divePackages.map((pkg, index) => (
                      <tr key={index} className={`border-b border-gray-200 ${pkg.popular ? "bg-blue-50" : ""}`}>
                        <td className="px-4 py-4">
                          <div className="font-bold text-[#0b385b]">
                            {pkg.nights} Nights & {pkg.dives} Dives
                            {pkg.popular && (
                              <span className="ml-2 text-xs bg-[#0b385b] text-white px-2 py-1 rounded-full">
                                MOST POPULAR
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold">${pkg.price.single}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold">${pkg.price.double}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold">${pkg.price.nonDiver}</div>
                        </td>
                        <td className="px-4 py-4">
                          <ul className="text-sm">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-1 mb-1">
                                <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0 text-xs" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Course Price Table Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4 uppercase`}>
                PADI Diving Courses
              </h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Browse our comprehensive range of PADI courses with transparent pricing and duration information.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-[#0b385b] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Course</th>
                    <th className="px-6 py-4 text-left">Duration</th>
                    <th className="px-6 py-4 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Open Water */}
                  <tr className="bg-gray-100">
                    <td colSpan={3} className="px-6 py-3 font-bold text-[#0b385b]">
                      Open Water
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">PADI Open Water Diver</td>
                    <td className="px-6 py-4">3 - 4 days</td>
                    <td className="px-6 py-4">$550</td>
                  </tr>

                  {/* Advanced Open Water */}
                  <tr className="bg-gray-100">
                    <td colSpan={3} className="px-6 py-3 font-bold text-[#0b385b]">
                      Advanced Open Water
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">Advanced Open Water Dive</td>
                    <td className="px-6 py-4">minimum 2 days</td>
                    <td className="px-6 py-4">$421</td>
                  </tr>

                  {/* EFR & Rescue */}
                  <tr className="bg-gray-100">
                    <td colSpan={3} className="px-6 py-3 font-bold text-[#0b385b]">
                      EFR & Rescue
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">Emergency First Response (EFR)</td>
                    <td className="px-6 py-4">Minimum 2 days</td>
                    <td className="px-6 py-4">$150</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">Rescue Diver</td>
                    <td className="px-6 py-4">5 days</td>
                    <td className="px-6 py-4">$600</td>
                  </tr>

                  {/* Divemaster */}
                  <tr className="bg-gray-100">
                    <td colSpan={3} className="px-6 py-3 font-bold text-[#0b385b]">
                      Divemaster
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">PADI Divemaster Course</td>
                    <td className="px-6 py-4">2 - 4 weeks</td>
                    <td className="px-6 py-4">$1000</td>
                  </tr>

                  {/* Specialty Courses */}
                  <tr className="bg-gray-100">
                    <td colSpan={3} className="px-6 py-3 font-bold text-[#0b385b]">
                      Specialty Courses
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">Tiger Shark Specialty</td>
                    <td className="px-6 py-4">2 days</td>
                    <td className="px-6 py-4">$300</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">Deep Diver Specialty</td>
                    <td className="px-6 py-4">2 days</td>
                    <td className="px-6 py-4">$250</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">Night Diver Specialty</td>
                    <td className="px-6 py-4">2 days</td>
                    <td className="px-6 py-4">$225</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Other Specialty Courses</td>
                    <td className="px-6 py-4">1-2 days</td>
                    <td className="px-6 py-4">$190-$275</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Main Courses Section */}
        <section id="main-courses" className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4 uppercase`}>
                Course Details
              </h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore our comprehensive PADI certification courses with detailed information about what's included and
                what you'll learn.
              </p>
            </div>

            {/* Custom Tabs */}
            <div className="w-full">
              {/* Tab Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {courseCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                      activeTab === category.id
                        ? "bg-[#0b385b] text-white"
                        : "bg-white text-[#0b385b] hover:bg-gray-200"
                    }`}
                  >
                    {category.icon}
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {courseCategories.map((category) => (
                <div key={category.id} className={`${activeTab === category.id ? "block" : "hidden"}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#0b385b] text-white p-3 rounded-full">{category.icon}</div>
                        <h3 className="text-2xl font-bold text-[#0b385b]">{category.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{category.description}</p>
                    </div>
                  </div>

                  {category.courses.map((course, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                      <div className="p-8 text-left">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-[#0b385b]">{course.title}</h3>
                        </div>

                        <p className="text-gray-700 mb-6">{course.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-[#0b385b]" />
                            <span>
                              <span className="font-medium">Duration:</span> {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaDollarSign className="text-[#0b385b]" />
                            <span>
                              <span className="font-medium">Price:</span> {course.price}
                            </span>
                          </div>
                        </div>

                        {/* Custom Accordion */}
                        <div className="mb-6">
                          {/* Requirements */}
                          <div className="border-b border-gray-200">
                            <button
                              onClick={() => toggleAccordion(`${category.id}-${index}-requirements`)}
                              className="flex justify-between items-center w-full py-3 text-left font-bold text-[#0b385b]"
                            >
                              <span>Requirements</span>
                              {openAccordions[`${category.id}-${index}-requirements`] ? (
                                <FaChevronUp className="text-[#0b385b]" />
                              ) : (
                                <FaChevronDown className="text-[#0b385b]" />
                              )}
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                openAccordions[`${category.id}-${index}-requirements`] ? "max-h-96 pb-4" : "max-h-0"
                              }`}
                            >
                              <ul className="space-y-2">
                                {course.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="flex items-start gap-2">
                                    <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* What's Included */}
                          <div className="border-b border-gray-200">
                            <button
                              onClick={() => toggleAccordion(`${category.id}-${index}-includes`)}
                              className="flex justify-between items-center w-full py-3 text-left font-bold text-[#0b385b]"
                            >
                              <span>What's Included</span>
                              {openAccordions[`${category.id}-${index}-includes`] ? (
                                <FaChevronUp className="text-[#0b385b]" />
                              ) : (
                                <FaChevronDown className="text-[#0b385b]" />
                              )}
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                openAccordions[`${category.id}-${index}-includes`] ? "max-h-96 pb-4" : "max-h-0"
                              }`}
                            >
                              <ul className="space-y-2">
                                {course.includes.map((item, includeIndex) => (
                                  <li key={includeIndex} className="flex items-start gap-2">
                                    <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Skills You'll Learn */}
                          <div className="border-b border-gray-200">
                            <button
                              onClick={() => toggleAccordion(`${category.id}-${index}-skills`)}
                              className="flex justify-between items-center w-full py-3 text-left font-bold text-[#0b385b]"
                            >
                              <span>Skills You'll Learn</span>
                              {openAccordions[`${category.id}-${index}-skills`] ? (
                                <FaChevronUp className="text-[#0b385b]" />
                              ) : (
                                <FaChevronDown className="text-[#0b385b]" />
                              )}
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                openAccordions[`${category.id}-${index}-skills`] ? "max-h-96 pb-4" : "max-h-0"
                              }`}
                            >
                              <ul className="space-y-2">
                                {course.skills.map((skill, skillIndex) => (
                                  <li key={skillIndex} className="flex items-start gap-2">
                                    <FaCheck className="text-[#0b385b] mt-1 flex-shrink-0" />
                                    <span>{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            href={`/contact?course=${encodeURIComponent(course.title)}`}
                            className="bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
                          >
                            Book This Course <FaArrowRight />
                          </Link>
                          <Link
                            href={`/contact?inquiry=${encodeURIComponent(course.title)}`}
                            className="bg-transparent hover:bg-[#0b385b]/10 text-[#0b385b] border-2 border-[#0b385b] font-bold py-3 px-6 rounded-full transition-colors"
                          >
                            Ask Questions
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Courses Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4 uppercase`}>
                Specialty Courses
              </h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Enhance your diving skills with our specialized courses designed to make you a more confident and
                versatile diver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialtyCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#0b385b] text-white p-3 rounded-full">{course.icon}</div>
                      <h3 className="text-xl font-bold text-[#0b385b]">{course.title}</h3>
                    </div>

                    <p className="text-gray-700 mb-6">{course.description}</p>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#0b385b]" />
                        <span>{course.duration}</span>
                      </div>
                      <span className="font-bold text-lg text-[#0b385b]">{course.price}</span>
                    </div>

                    <Link
                      href={`/contact?specialty=${encodeURIComponent(course.title)}`}
                      className="w-full bg-transparent hover:bg-[#0b385b] text-[#0b385b] hover:text-white border-2 border-[#0b385b] font-bold py-2 px-4 rounded-full transition-colors flex items-center justify-center gap-2"
                    >
                      Book Course <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4 uppercase`}>
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about our diving courses and requirements.
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#0b385b] text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className={`font-nasa text-3xl md:text-4xl font-bold mb-6 uppercase`}>
              Ready to Start Your Diving Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your diving course today and discover the underwater wonders of Fuvahmulah with our expert
              instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Book Now <FaArrowRight />
              </Link>
              <Link
                href="/about"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Learn About Us
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
