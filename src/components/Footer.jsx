import React from 'react'
import { SparklesIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Bamboo Toothbrushes', href: '#products' },
      { name: 'Professional Kits', href: '#products' },
      { name: 'Eco-Friendly Floss', href: '#products' },
      { name: 'Travel Kits', href: '#products' },
      { name: 'Kids Products', href: '#products' },
      { name: 'Custom Branding', href: '#products' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Sustainability', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Custom Quotes', href: '#contact' },
      { name: 'Bulk Orders', href: '#contact' }
    ],
    support: [
      { name: 'Product Information', href: '#contact' },
      { name: 'Shipping Info', href: '#contact' },
      { name: 'Returns', href: '#contact' },
      { name: 'FAQ', href: '#contact' },
      { name: 'Professional Support', href: '#contact' },
      { name: 'Sustainability Guide', href: '#about' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/logo.png" alt="Twiggle Oral Care logo" className="h-12 w-12 object-contain rounded" />
              <span className="text-xl font-bold">Twiggle Oral Care</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of eco-friendly oral care products for dental professionals 
              and conscious consumers across Canada.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="h-5 w-5 text-primary-400" />
                <span className="text-sm">Toronto, Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="h-5 w-5 text-primary-400" />
                <span className="text-sm">(416) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                <span className="text-sm">hello@twiggleoralcare.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sustainability Message */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <SparklesIcon className="h-5 w-5 text-primary-400" />
              <span className="text-sm text-gray-300">
                Committed to a sustainable future, one smile at a time
              </span>
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Twiggle Oral Care. All rights reserved.
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs text-gray-400">
            <div>
              <span className="font-semibold">Certified Sustainable</span>
              <br />
              Eco-friendly materials
            </div>
            <div>
              <span className="font-semibold">Professional Grade</span>
              <br />
              Trusted by dental clinics
            </div>
            <div>
              <span className="font-semibold">Made in Canada</span>
              <br />
              Supporting local communities
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
