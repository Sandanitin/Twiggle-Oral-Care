import React from 'react'
import { ArrowRightIcon, SparklesIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const Products = ({ onQueryClick }) => {
  const products = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      description: "Premium bamboo toothbrushes with soft bristles, perfect for daily oral care",
      features: ["100% Biodegradable", "Soft Bristles", "Ergonomic Design"],
      price: "Custom Pricing",
      imageUrl: "/images/project/WhatsApp%20Image%202025-09-12%20at%2011.26.43.jpeg",
      category: "Individual"
    },
    {
      id: 2,
      name: "Professional Dental Kit",
      description: "Complete oral care solution for dental clinics and professionals",
      features: ["Bulk Packaging", "Custom Branding", "Professional Grade"],
      price: "Custom Pricing",
      imageUrl: "/images/project/WhatsApp%20Image%202025-09-12%20at%2011.26.44%20(1).jpeg",
      category: "Professional"
    },
    {
      id: 3,
      name: "Eco-Friendly Floss",
      description: "Biodegradable dental floss made from natural materials",
      features: ["Natural Materials", "Mint Flavor", "Compostable"],
      price: "Custom Pricing",
      imageUrl: "/images/project/WhatsApp%20Image%202025-09-13%20at%2012.05.44.jpeg",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Bamboo Travel Kit",
      description: "Portable oral care set for eco-conscious travelers",
      features: ["Travel Case", "Compact Design", "Sustainable Materials"],
      price: "Custom Pricing",
      imageUrl: "/images/project/WhatsApp%20Image%202025-09-12%20at%2011.27.32.jpeg",
      category: "Travel"
    },
    {
      id: 5,
      name: "Kids Bamboo Brushes",
      description: "Child-friendly bamboo toothbrushes with fun designs",
      features: ["Kid-Safe", "Fun Colors", "Smaller Size"],
      price: "Custom Pricing",
      imageUrl: "/images/project/WhatsApp%20Image%202025-09-12%20at%2011.26.43%20(3).jpeg",
      category: "Kids"
    },
    {
      id: 6,
      name: "Custom Branding Package",
      description: "White-label solutions for dental practices and retailers",
      features: ["Custom Logo", "Bulk Orders", "Flexible Packaging"],
      price: "Custom Pricing",
      imageUrl: "/images/project/WhatsApp%20Image%202025-09-13%20at%2012.05.35.jpeg",
      category: "Custom"
    }
  ]

  const benefits = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-primary-600" />,
      title: "100% Sustainable",
      description: "Made from renewable bamboo and biodegradable materials"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary-600" />,
      title: "Professional Grade",
      description: "Trusted by dental professionals and clinics across Canada"
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-primary-600" />,
      title: "Eco-Conscious",
      description: "Every purchase helps reduce plastic waste and environmental impact"
    }
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of eco-friendly oral care products designed for both individual consumers 
            and dental professionals. All products are sustainably sourced and professionally crafted.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                {/* Product Image */}
                <div className="text-center mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-lg font-semibold text-primary-600 mb-4">
                    {product.price}
                  </div>
                </div>

                {/* Query Button */}
                <button
                  onClick={() => onQueryClick(product)}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center group-hover:shadow-lg"
                >
                  Get Custom Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              We specialize in custom supply solutions for dental clinics and professionals. 
              Get in touch to discuss your specific requirements and receive a personalized quote.
            </p>
            <button
              onClick={() => onQueryClick()}
              className="bg-white text-primary-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
