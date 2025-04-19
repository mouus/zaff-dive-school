"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
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

// Gallery image data
const galleryImages = [
  {
    id: 1,
    src: "/gallery/tiger-shark-1.jpg",
    alt: "Tiger Shark Swimming",
    category: ["sharks", "featured"],
    title: "Tiger Shark Encounter",
    description: "Majestic tiger shark swimming in the clear waters of Fuvahmulah.",
  },
  {
    id: 2,
    src: "/gallery/coral-reef-1.jpg",
    alt: "Vibrant Coral Reef",
    category: ["reefs", "featured"],
    title: "Vibrant Coral Garden",
    description: "Colorful coral formations teeming with marine life.",
  },
  {
    id: 3,
    src: "/gallery/diver-1.jpg",
    alt: "Diver with Equipment",
    category: ["divers", "courses"],
    title: "Advanced Open Water Training",
    description: "Student practicing buoyancy control during advanced training.",
  },
  {
    id: 4,
    src: "/gallery/manta-ray-1.jpg",
    alt: "Manta Ray",
    category: ["marine-life", "featured"],
    title: "Graceful Manta Ray",
    description: "A manta ray gliding through the waters near Fuvahmulah.",
  },
  {
    id: 5,
    src: "/gallery/underwater-landscape-1.jpg",
    alt: "Underwater Landscape",
    category: ["landscapes", "reefs"],
    title: "Underwater Seascape",
    description: "Breathtaking underwater landscape showing the diversity of marine ecosystems.",
  },
  {
    id: 6,
    src: "/gallery/shark-2.jpg",
    alt: "Reef Shark",
    category: ["sharks"],
    title: "Reef Shark Patrol",
    description: "Reef sharks patrolling their territory in the deep blue.",
  },
  {
    id: 7,
    src: "/gallery/turtle-1.jpg",
    alt: "Sea Turtle",
    category: ["marine-life"],
    title: "Green Sea Turtle",
    description: "A green sea turtle gracefully swimming through coral formations.",
  },
  {
    id: 8,
    src: "/gallery/diver-2.jpg",
    alt: "Diver with Camera",
    category: ["divers"],
    title: "Underwater Photography",
    description: "Capturing the beauty of the underwater world with specialized equipment.",
  },
  {
    id: 9,
    src: "/gallery/coral-reef-2.jpg",
    alt: "Soft Coral Formations",
    category: ["reefs"],
    title: "Soft Coral Paradise",
    description: "Delicate soft coral formations swaying with the ocean current.",
  },
  {
    id: 10,
    src: "/gallery/tiger-shark-2.jpg",
    alt: "Tiger Shark Close-up",
    category: ["sharks", "featured"],
    title: "Tiger Shark Close Encounter",
    description: "Face-to-face with one of the ocean's most magnificent predators.",
  },
  {
    id: 11,
    src: "/gallery/dive-boat-1.jpg",
    alt: "Dive Boat",
    category: ["facilities"],
    title: "Our Dive Boat",
    description: "Specially equipped dive boat for comfortable and safe diving excursions.",
  },
  {
    id: 12,
    src: "/gallery/equipment-1.jpg",
    alt: "Diving Equipment",
    category: ["facilities", "courses"],
    title: "Professional Equipment",
    description: "Top-quality diving equipment available for all our courses and fun dives.",
  },
  {
    id: 13,
    src: "/gallery/group-divers-1.jpg",
    alt: "Group of Divers",
    category: ["divers", "courses"],
    title: "Group Diving Experience",
    description: "Divers enjoying a group expedition to one of our signature dive sites.",
  },
  {
    id: 14,
    src: "/gallery/whale-shark-1.jpg",
    alt: "Whale Shark",
    category: ["sharks", "featured"],
    title: "Whale Shark Majesty",
    description: "The gentle giant of the ocean passing by during a dive.",
  },
  {
    id: 15,
    src: "/gallery/underwater-landscape-2.jpg",
    alt: "Deep Blue",
    category: ["landscapes"],
    title: "Into the Blue",
    description: "The mesmerizing deep blue of the open ocean surrounding Fuvahmulah.",
  },
  {
    id: 16,
    src: "/gallery/coral-reef-3.jpg",
    alt: "Coral Reef with Fish",
    category: ["reefs", "marine-life"],
    title: "Reef Ecosystem",
    description: "A healthy coral reef ecosystem with abundant fish species.",
  },
  {
    id: 17,
    src: "/gallery/diver-3.jpg",
    alt: "Diver Training",
    category: ["divers", "courses"],
    title: "Rescue Diver Training",
    description: "Students practicing essential rescue techniques during certification.",
  },
  {
    id: 18,
    src: "/gallery/marine-life-1.jpg",
    alt: "Colorful Fish",
    category: ["marine-life"],
    title: "Reef Fish Community",
    description: "A vibrant community of reef fish in their natural habitat.",
  },
]

// Filter categories
const categories = [
  { id: "all", name: "All" },
  { id: "featured", name: "Featured" },
  { id: "sharks", name: "Sharks" },
  { id: "reefs", name: "Coral Reefs" },
  { id: "marine-life", name: "Marine Life" },
  { id: "divers", name: "Divers" },
  { id: "courses", name: "Courses" },
  { id: "landscapes", name: "Landscapes" },
  { id: "facilities", name: "Facilities" },
]

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [filteredImages, setFilteredImages] = useState(galleryImages)

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

  // Filter images based on category and search query
  useEffect(() => {
    let result = galleryImages

    // Filter by category
    if (activeFilter !== "all") {
      result = result.filter((image) => image.category.includes(activeFilter))
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (image) =>
          image.title.toLowerCase().includes(query) ||
          image.description.toLowerCase().includes(query) ||
          image.alt.toLowerCase().includes(query),
      )
    }

    setFilteredImages(result)
  }, [activeFilter, searchQuery])

  const openLightbox = (image) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex((img) => img.id === currentImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setCurrentImage(filteredImages[newIndex])
  }

  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      {/* Header Section */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="relative w-full h-[568px] md:h-[50vh]">
          <Image src="/shark-hue.jpg" alt="Underwater Background" fill className="object-cover opacity-50" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:py-20 flex items-center justify-center px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="font-nasa text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">Photo Gallery</h1>
          <p className="font-nasa text-xl md:text-2xl text-white mb-8 tracking-wide">
            Explore the underwater wonders of Fuvahmulah through our lens
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        {/* Gallery Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0b385b]"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Category Filters - Desktop */}
                <div className="hidden md:flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeFilter === category.id
                          ? "bg-[#0b385b] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filters - Mobile */}
              <div className="md:hidden mt-4 overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        activeFilter === category.id
                          ? "bg-[#0b385b] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64 sm:h-72"
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <FaSearch className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No images found</h3>
                <p className="text-gray-500 max-w-md text-center">
                  We couldn't find any images matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("all")
                    setSearchQuery("")
                  }}
                  className="mt-4 px-6 py-2 bg-[#0b385b] text-white rounded-full hover:bg-[#0a2e4a] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Collections Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Featured Collections</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore our curated collections of underwater photography
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tiger Sharks Collection */}
              <div
                className="relative h-80 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setActiveFilter("sharks")}
              >
                <Image
                  src="/gallery/tiger-shark-1.jpg"
                  alt="Tiger Sharks Collection"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-left">
                  <h3 className="text-white font-bold text-2xl mb-2">Tiger Sharks</h3>
                  <p className="text-white/80">Majestic predators of Fuvahmulah</p>
                </div>
              </div>

              {/* Coral Reefs Collection */}
              <div
                className="relative h-80 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setActiveFilter("reefs")}
              >
                <Image
                  src="/gallery/coral-reef-1.jpg"
                  alt="Coral Reefs Collection"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-left">
                  <h3 className="text-white font-bold text-2xl mb-2">Coral Reefs</h3>
                  <p className="text-white/80">Vibrant underwater ecosystems</p>
                </div>
              </div>

              {/* Marine Life Collection */}
              <div
                className="relative h-80 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setActiveFilter("marine-life")}
              >
                <Image
                  src="/gallery/marine-life-1.jpg"
                  alt="Marine Life Collection"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-left">
                  <h3 className="text-white font-bold text-2xl mb-2">Marine Life</h3>
                  <p className="text-white/80">Diverse species of our oceans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Tips Section */}
        <section className="py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-nasa text-3xl md:text-4xl font-bold text-[#0b385b] mb-4">Underwater Photography</h2>
              <div className="w-20 h-1 bg-[#0b385b] mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Tips and equipment recommendations for capturing your own underwater memories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/gallery/diver-2.jpg"
                  alt="Underwater Photographer"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#0b385b] mb-4">Capture Your Underwater Adventure</h3>
                <p className="text-gray-700 mb-4">
                  Whether you're a beginner or an experienced photographer, underwater photography offers unique
                  challenges and rewards. Our dive center offers specialized courses and equipment rental to help you
                  capture stunning images during your dives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-[#0b385b] text-white p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      <strong>Equipment Rental:</strong> Underwater cameras, housings, and lighting systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-[#0b385b] text-white p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      <strong>Photography Courses:</strong> Learn techniques from our experienced instructors
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-[#0b385b] text-white p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      <strong>Guided Photo Dives:</strong> Special dives focused on photography opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-[#0b385b] text-white p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      <strong>Post-Processing Workshops:</strong> Learn how to edit your underwater photos
                    </span>
                  </li>
                </ul>
                <button className="mt-6 bg-[#0b385b] hover:bg-[#0a2e4a] text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2">
                  Learn More About Our Photo Courses
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#0b385b] text-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="font-nasa text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Memories?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your diving adventure today and capture unforgettable moments in the waters of Fuvahmulah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white hover:bg-gray-100 text-[#0b385b] font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book a Dive
              </a>
              <a
                href="/courses"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto"
              >
                View Our Courses
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close lightbox"
          >
            <FaTimes size={24} />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
            aria-label="Next image"
          >
            <FaChevronRight size={24} />
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <div className="relative h-[70vh] w-full">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <div className="bg-black/50 p-4 text-left">
              <h3 className="text-white text-xl font-bold">{currentImage.title}</h3>
              <p className="text-white/80">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
