import React, { useState, useEffect } from 'react'
import { Heart, User, ChevronDown, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from "../../constants/navigation"
import logo from '../../assets/images/logo.svg'
import logo2 from '../../assets/images/logo2.svg'

const Nav = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <img src={scrolled ? logo2 : logo} alt="Logo" className="h-12 w-40 transition-all duration-300" />
          </a>
          <button
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className={`hidden md:flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
          >
            Projekte
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button className={`rounded-md p-2 transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"}`}>
              <Heart className="h-5 w-5" />
            </button>
            <button className={`rounded-md p-2 transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"}`}>
              <User className="h-5 w-5" />
            </button>
          </div>
        </nav>
        <button
          className={`md:hidden rounded-md p-2 transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Projekte
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <button className="rounded-md p-2 text-gray-700 hover:text-gray-900">
                <Heart className="h-5 w-5" />
              </button>
              <button className="rounded-md p-2 text-gray-700 hover:text-gray-900">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav;
