import React from 'react'
import { Link } from 'react-router-dom'
import { SparklesIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Bamboo Toothbrushes', href: '/products' },
      { name: 'Twiggle Mini for Kids', href: '/products' },
      { name: 'Custom Branding', href: '/products' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Sustainability', href: '/about' },
      { name: 'Our Mission', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Custom Quotes', href: '/contact' },
      { name: 'Bulk Orders', href: '/contact' }
    ],
    support: [
      { name: 'Product Information', href: '/contact' },
      { name: 'Shipping Info', href: '/contact' },
      { name: 'Returns', href: '/contact' },
      { name: 'FAQ', href: '/contact' },
      { name: 'Professional Support', href: '/contact' },
      { name: 'Sustainability Guide', href: '/about' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-3">
              <img src="/images/logo.png" alt="Twiggle Oral Care logo" className="h-10 w-10 object-contain rounded" />
              <span className="text-lg font-semibold">Twiggle Oral Care</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              Eco-friendly oral care for professionals and conscious consumers across Canada.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon className="h-4 w-4 text-primary-400" />
                <span className="text-xs">Toronto, Ontario, Canada</span>
              </div>
              {/* Phone removed per request */}
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="h-4 w-4 text-primary-400" />
                <span className="text-xs">twiggleoralcare@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column removed per request */}
        </div>

        {/* Sustainability Message */}
        <div className="mt-8 pt-6 border-top border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <SparklesIcon className="h-5 w-5 text-primary-400" />
              <span className="text-xs text-gray-300">
                Committed to a sustainable future, one smile at a time
              </span>
            </div>
            <div className="text-xs text-gray-400">
              © {currentYear} Twiggle Oral Care. All rights reserved.
            </div>
          </div>
        </div>

        {/* Additional Info - compact pills */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-wrap gap-2 text-[11px] text-gray-200 items-center">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Certified Sustainable</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Eco-friendly materials</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Professional Grade</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Trusted by dental clinics</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Designed in Canada</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Supporting local communities</span>
            <a href="https://www.instagram.com/twiggleoralcare?igsh=aTczNzBrd2g4cXI1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="ml-auto px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/twiggle-oral-care-0ba57237b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
