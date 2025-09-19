import React from 'react'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

const Hero = ({ onQueryClick }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Eco-Friendly Oral Care</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Sustainable
                <span className="text-primary-600"> Smiles</span>
                <br />
                for a Better
                <span className="text-primary-600"> Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover our premium bamboo toothbrushes and eco-friendly oral care products. 
                Made with sustainability in mind, designed for dental professionals and conscious consumers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onQueryClick}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                View Products
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Biodegradable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Dental Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/images/project/01%20Twiggle%20Brush%20Mockup.jpg"
                  alt="Twiggle Oral Care bamboo toothbrush mockup"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
