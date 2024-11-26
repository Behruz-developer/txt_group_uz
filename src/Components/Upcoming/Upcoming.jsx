import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS } from "../../constants/navigation"

const Upcoming = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setActiveProject(PROJECTS[activeIndex])
    if (activeIndex !== 0) {
      scrollToActiveCard()
    }
  }, [activeIndex])

  const handleProjectClick = (project, index) => {
    setActiveProject(project)
    setActiveIndex(index)
  }

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length)
  }

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length)
  }

  const scrollToActiveCard = () => {
    if (scrollContainerRef.current) {
      const activeCard = scrollContainerRef.current.children[activeIndex]
      if (activeCard) {
        scrollContainerRef.current.scrollTo({
          left: activeCard.offsetLeft - 5,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeProject.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>
      <div className="container mx-auto px-4 relative z-10 flex h-full flex-col justify-between pb-16 pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="mb-4 mt-40 text-4xl md:text-6xl font-light text-white">
              {activeProject.title.split(" ").map((word, index) => (
                <span key={index} className={index === 1 ? "font-serif italic" : ""}>
                  {word}
                  <br />
                </span>
              ))}
            </h1>
            <p className="mb-4 text-base md:text-lg text-white/80">{activeProject.description}</p>
            <div className="flex gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm text-white">{activeProject.status}</span>
              </div>
              <a href={activeProject.link}>
                <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-white/90">
                  Zum Projekt
                </button>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto p-4 scrollbar-hide" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`relative h-16 w-28 md:h-24 md:w-40 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                  activeProject.id === project.id ? "ring-2 ring-white scale-105" : ""
                }`}
                onClick={() => handleProjectClick(project, index)}
              >
                <div className="absolute inset-0 bg-black/40" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs md:text-sm font-medium text-white text-center px-2">
                    {project.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming;
