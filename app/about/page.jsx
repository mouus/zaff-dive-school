"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaWater,
  FaAnchor,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaImage,
} from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// NASA font style
const nasaFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
  
  .nasa-font {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    setIsVisible(true)

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

  const milestones = [
    {
      year: "2011",
      title: "First Dive Experience",
      description:
        "Mr. Zafar had his first scuba diving experience in Fuvahmulah with scarce equipment and no dive centers. The first Tiger shark dive was conducted with Hussain Saeed (Kao) and Livia.",
      image: "/img-3.PNG",
    },
    {
      year: "2012",
      title: "Tiger Shark Discovery",
      description:
        "Discovery of Tiger sharks near the harbor of Fuvahmulah, marking a pivotal moment for diving in the region.",
      image: "/img-7.JPG",
    },
    {
      year: "2013",
      title: "First Guided Dives",
      description:
        "Mr. Zafar began guiding clients to the Tiger shark point, establishing the foundation for shark diving tourism.",
      image: "/dive.jpg",
    },
    {
      year: "2014-2015",
      title: "Growth Period",
      description:
        "Local entrepreneurs started investing in the diving industry, opening new dive centers and guest houses. Zaff led dive groups in 2014, expanding the popularity of the destination.",
      image: "/img-10.JPG",
    },
    {
      year: "Present",
      title: "World-Class Destination",
      description:
        "Fuvahmulah is now recognized as the world's #1 Tiger shark dive destination with 21 guest houses and 7 diving schools.",
      image: "/img2.jpg",
    },
  ]

  const journeyGallery = [
    {
      image: "/img-3.PNG",
      caption: "Early days of diving in Fuvahmulah",
      year: "2011",
    },
    {
      image: "/img-2.JPG",
      caption: "Beautiful Fuvahmulah Island",
      year: "2012",
    },
    {
      image: "/img-7.JPG",
      caption: "First Tiger shark encounters",
      year: "2013",
    },
    {
      image: "/img.jpg",
      caption: "Opening our first dive center",
      year: "2014",
    },
    {
      image: "/img-5.JPG",
      caption: "Growing our team of instructors",
      year: "2015",
    },
    {
      image: "/img-6.JPG",
      caption: "Gaining international recognition",
      year: "2016",
    },
    {
      image: "/img-9.JPG",
      caption: "Our shark conservation initiatives",
      year: "2018",
    },
    {
      image: "/instruct.JPG",
      caption: "Our operations today",
      year: "Present",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % journeyGallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + journeyGallery.length) % journeyGallery.length)
  }

  const openLightbox = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="relative w-full h-[568px]">
          <Image src="/loneshark.JPG" alt="Underwater Background" fill className="object-cover opacity-50" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="nasa-font text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">Our Story</h1>
          <p className="nasa-font text-xl md:text-2xl text-white mb-8 tracking-wide">
            Discover how Fuvahmulah became the world's premier Tiger shark diving destination
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        {/* Founder Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image src="/insta1.jpg" alt="Mr. Abdulla Zafar Ali" fill className="object-cover" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-6">The Pioneer</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Mr. Abdulla Zafar Ali pioneered the discovery of the first Tiger shark in Fuvahmulah. He is currently
                  working as an instructor in Fuvahmulah. Apart from being a dive instructor, he is one of the few
                  divers who are continually concerned about the advancement of this field in Fuvahmulah.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Mr. Hassan Shah, (Nooraleege, Funnadu, Fuvahmulah) was the first person who conducted Discover Scuba
                  Diving (DSD) at Fuvahmulah, playing a crucial role in establishing diving activities on the island.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="w-1/3 bg-[#0b385b] h-1"></div>
                  <div className="w-1/6 bg-[#0b385b] h-1"></div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWater className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#0b385b]">Diving Pioneer</h3>
                    <p className="text-gray-700">First to discover Tiger sharks in Fuvahmulah</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#0b385b]">Certified Instructor</h3>
                    <p className="text-gray-700">Professional dive instructor with years of experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaAnchor className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#0b385b]">Visionary</h3>
                    <p className="text-gray-700">Transformed Fuvahmulah into a world-class diving destination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Journey Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Our Visual Journey</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore the photographic history of our diving journey in Fuvahmulah through the years.
              </p>
            </div>

            {/* Image Carousel */}
            <div className="relative mb-12">
              <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={journeyGallery[currentImageIndex].image || "/placeholder.svg"}
                  alt={journeyGallery[currentImageIndex].caption}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="bg-[#0b385b] text-white font-bold px-4 py-2 rounded-full inline-block mb-3 self-start">
                    {journeyGallery[currentImageIndex].year}
                  </div>
                  <p className="text-white text-xl md:text-2xl font-bold">
                    {journeyGallery[currentImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0b385b] p-3 rounded-full shadow-lg transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0b385b] p-3 rounded-full shadow-lg transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {journeyGallery.map((item, index) => (
                <div
                  key={index}
                  className={`relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    currentImageIndex === index ? "ring-4 ring-[#0b385b]" : "hover:opacity-80"
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(index)
                    openLightbox(index)
                  }}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.caption} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <FaImage className="text-white text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">The Journey</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The remarkable story of how Tiger shark diving began in Fuvahmulah, in the words of Mr. Abdulla Zafar
                Ali.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-12">
              <div className="flex justify-center mb-6">
                <FaQuoteLeft className="text-5xl text-[#0b385b]/20" />
              </div>

              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  I had my very first experience scuba diving in Fuvahmulah in the year 2011. At that time the dive
                  equipment was very scarce and there were no dive center or dive schools in this island. But I never
                  gave up. The ambition of bringing a successful recreational diving in Fuvahmulah never dies.
                </p>

                <p>
                  As time passes, I came to know that there are Tiger sharks close to the harbor of this island. This
                  made me more enthusiastic in bringing recreational diving. I managed to get scuba equipment from one
                  of the local fishing boats (boadhi dhoni), Tharaanage Iburey, and with the help of Mr. Hussain Saeed
                  (Kao) and Riyaz, Fehigiri, I was able to catch the first sight of a Tiger shark.
                </p>

                <p>
                  When I brought this news to my friends, most of them made fun of what I had told them. Many people
                  said that you won't be able to see that kind of shark on this island. It was then that I felt I should
                  discuss this with stakeholders. Hence, I managed to convince a few divers who were keen to explore
                  this brand-new Tiger shark spot.
                </p>

                <p>
                  As I envisioned earlier, after a few months, a local entrepreneur (Mr. Saud) established a guest house
                  and started selling diving trips to the Tiger shark point, and I became one of the divers who guided
                  clients diving for Mr. Saud. Within 1 or 2 years, people started investing in this field. New dive
                  centers and guest houses opened.
                </p>

                <p>
                  Today, I stand proudly as a pioneer of this profitable venture. We now have 21 guest houses and 7
                  diving schools or centers. I believe there is still room for development and expansion in this field.
                  At the same time, I wish to see the water sport activities prosper and expand in a wider range.
                </p>
              </div>

              <div className="flex justify-end mt-6">
                <FaQuoteRight className="text-5xl text-[#0b385b]/20" />
              </div>

              <div className="text-center mt-8">
                <p className="font-bold text-xl text-[#0b385b]">Mr. Abdulla Zafar Ali</p>
                <p className="text-gray-600">Founder, Scubachannel Fuvahmulah</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The evolution of diving in Fuvahmulah from humble beginnings to a world-renowned destination.
              </p>
            </div>

            {/* Visual Timeline */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-[#0b385b] text-white font-bold px-4 py-2 rounded-full">{milestone.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 text-left">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#0b385b] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCalendarAlt className="text-white text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b385b]">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fuvahmulah Today Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b385b] mb-6">Fuvahmulah Today</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Fuvahmulah is becoming more popular day by day. Even dive stakeholders have started promoting
                  Fuvahmulah on different platforms, such as dive fairs. Our dive site is the world's No. 1 Tiger shark
                  dive destination, achieving celebrity status.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From the beginning until today, Mr. Zafar has followed his passion as a scuba diving legend. We salute
                  all the pioneers for making this place shine for scuba diving. This place is truly Shark Island,
                  located in the middle of the southern hemisphere below zero degrees.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-[#0b385b] mb-2">21</div>
                    <p className="text-gray-700">Guest Houses</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-[#0b385b] mb-2">7</div>
                    <p className="text-gray-700">Dive Centers</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-[#0b385b] mb-2">#1</div>
                    <p className="text-gray-700">Tiger Shark Destination</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden order-1 md:order-2">
                <Image src="/fvm.JPG" alt="Fuvahmulah Today" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#0b385b] text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Legend of Fuvahmulah</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us for an unforgettable diving adventure with Tiger sharks in the pristine waters of Fuvahmulah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Explore Courses <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={journeyGallery[selectedImage].image || "/placeholder.svg"}
                alt={journeyGallery[selectedImage].caption}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-xl font-bold">{journeyGallery[selectedImage].caption}</p>
              <p className="text-lg">{journeyGallery[selectedImage].year}</p>
            </div>
            <button
              onClick={() => setSelectedImage((prev) => (prev - 1 + journeyGallery.length) % journeyGallery.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <FaChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev + 1) % journeyGallery.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
              aria-label="Next image"
            >
              <FaChevronRight className="h-6 w-6" />
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
