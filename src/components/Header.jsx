import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Twiggle Oral Care logo"
                className="h-12 w-12 object-contain rounded"
                loading="eager"
              />
              <span className="text-xl font-bold text-gray-900">Twiggle Oral Care</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
