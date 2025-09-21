import React from 'react'
import { SparklesIcon, GlobeAltIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import ImpactSection from '../components/ImpactSection'

const About = () => {
  const values = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-primary-600" />,
      title: "Sustainability First",
      description: "Every product is designed with environmental impact in mind, using renewable materials and biodegradable packaging."
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary-600" />,
      title: "Professional Quality",
      description: "Trusted by dental professionals across Canada for our high-quality, reliable oral care solutions."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-primary-600" />,
      title: "Local Impact",
      description: "Based in Toronto, we're committed to supporting local communities and reducing our carbon footprint."
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-primary-600" />,
      title: "Customer Care",
      description: "Dedicated to providing exceptional service and support to both individual consumers and professional clients."
    }
  ]

  const stats = [
    { number: "500+", label: "Dental Clinics Served" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100%", label: "Biodegradable Products" },
    { number: "5+", label: "Years of Experience" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* About Twiggle Oral Care - First */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Twiggle Oral Care</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of eco-friendly oral care products for dental professionals 
              and conscious consumers across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <ImpactSection />

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our <span className="text-primary-600">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded in Toronto, Ontario, Twiggle Oral Care is a leading provider of eco-friendly 
                  oral care products. We specialize in bamboo toothbrushes and sustainable oral care 
                  solutions for both individual consumers and dental professionals.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to revolutionize oral care by offering products that are not only 
                  effective but also environmentally responsible. Every product we create is designed 
                  to reduce plastic waste and promote sustainable living.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual/Stats */}
            <div className="space-y-8">
              {/* Mission Statement */}
              <div className="bg-white border-2 border-primary-200 rounded-2xl p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 italic">
                    "To provide sustainable oral care solutions that protect both your smile 
                    and our planet, one toothbrush at a time."
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Based in Toronto</h4>
                    <p className="text-sm text-gray-600">Serving Canada and beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Committed to Sustainability</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-4xl mx-auto">
              Every product we create is designed with the environment in mind. From our bamboo 
              toothbrushes to our biodegradable packaging, we're working towards a plastic-free future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">♻️</div>
                <h4 className="text-lg font-semibold mb-2">100% Recyclable</h4>
                <p className="text-primary-100 text-sm">All packaging is fully recyclable</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌿</div>
                <h4 className="text-lg font-semibold mb-2">Renewable Materials</h4>
                <p className="text-primary-100 text-sm">Made from sustainable bamboo</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌍</div>
                <h4 className="text-lg font-semibold mb-2">Carbon Neutral</h4>
                <p className="text-primary-100 text-sm">Offsetting our environmental impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
