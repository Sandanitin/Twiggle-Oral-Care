import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import { 
  CheckIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  TrashIcon, 
  MapPinIcon,
  ArrowRightIcon,
  ShoppingBagIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const features = [
    "Stylish and Comfortable",
    "Naturally Antimicrobial", 
    "100% compostable handle",
    "Bamboo Untouched by Pandas",
    "Reduced plastic waste",
    "Proudly Made in Canada"
  ]

  const bestSellers = [
    {
      name: "4-Pack maple wood toothbrush - OLA Cycle",
      price: "$18.99 CAD",
      image: "/images/project/WhatsApp Image 2025-09-12 at 11.26.43.jpeg",
      badge: "Best Seller"
    },
    {
      name: "Economy Pack of 8 OLA Cycle toothbrushes", 
      price: "$30.99 CAD",
      image: "/images/project/WhatsApp Image 2025-09-12 at 11.26.44 (1).jpeg",
      badge: "Hot Deal"
    },
    {
      name: "Eco-Friendly Dental Floss",
      price: "$5.99 CAD", 
      image: "/images/project/WhatsApp Image 2025-09-13 at 12.05.44.jpeg",
      badge: "New"
    },
    {
      name: "Bamboo Cotton Swabs",
      price: "$4.99 CAD",
      image: "/images/project/WhatsApp Image 2025-09-12 at 11.27.32.jpeg",
    },
    {
      name: "Natural deodorant - Cucumber and Aloe Vera",
      price: "$9.99 CAD",
      image: "/images/project/WhatsApp Image 2025-09-13 at 12.05.35.jpeg",
    }
  ]

  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const featureItems = [
    {
      icon: (
        <img 
          src="/images/project/brush.png" 
          alt="Stylish toothbrush"
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-200"
        />
      ),
      title: "Stylish and Comfortable",
      description: "Sleek, ergonomic design for a comfortable and effective brushing experience",
      bgGradient: "from-gray-50 to-white",
      stats: "98% Comfort Rating",
      color: "gray"
    },
    {
      icon: (
        <img 
          src="/images/project/dental.png" 
          alt="Antimicrobial bamboo toothbrush"
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-200"
        />
      ),
      title: "Naturally Antimicrobial",
      description: "Bamboo's natural properties help prevent bacterial growth and keep your brush fresh",
      bgGradient: "from-gray-50 to-white",
      stats: "99.9% Bacteria Free",
      color: "gray"
    },
    {
      icon: (
        <img 
          src="/images/project/100%brush.png" 
          alt="Compostable toothbrush"
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-200"
        />
      ),
      title: "100% Compostable Handle",
      description: "Fully biodegradable handle that returns to the earth without leaving a trace",
      bgGradient: "from-gray-50 to-white",
      stats: "6 Months to Compost",
      color: "gray"
    },
    {
      icon: (
        <img 
          src="/images/project/bamboo.png" 
          alt="Bamboo toothbrush"
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-200"
        />
      ),
      title: "Bamboo Untouched by Pandas",
      description: "Ethically sourced from sustainable bamboo forests, never from panda habitats",
      bgGradient: "from-gray-50 to-white",
      stats: "Certified Sustainable",
      color: "gray"
    },
    {
      icon: (
        <img 
          src="/images/project/plastic.png" 
          alt="Eco-friendly dental floss"
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-200"
        />
      ),
      title: "Reduced Plastic Waste",
      description: "Join us in preventing millions of plastic toothbrushes from polluting our oceans",
      bgGradient: "from-gray-50 to-white",
      stats: "3 Plastic Brushes Saved",
      color: "gray"
    },
   
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ===== Main Render =====
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/project/WhatsApp Image 2025-09-13 at 12.05.52.jpeg"
          alt="Eco-friendly bamboo oral care products flat lay"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slowZoom"
          loading="eager"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Eco-Friendly Oral Care<br/>
            <span className="text-primary-400">
              <TypeAnimation
                sequence={['Sustainable', 2000, 'Affordable', 2000, 'Innovative', 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
            Join the movement towards a plastic-free future with our eco-conscious products.
          </p>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            <ShoppingBagIcon className="w-5 h-5" />
            Shop Now
          </button>
        </div>
      </section>

      {/* Maple Wood */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-1 lg:order-1 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <SparklesIcon className="w-4 h-4" />
                <span>Premium Maple Wood</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Maple Wood
                <span className="block text-primary-600">Toothbrush</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Discover the only toothbrush in the world from the circular economy. We recover wood scraps from a guitar factory 
                to transform them into premium toothbrush handles. Experience the perfect blend of sustainability and craftsmanship.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Made from recycled guitar factory scraps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Unique circular economy approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Premium maple wood finish</span>
                </div>
              </div>

              {/* Call-to-Action Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  aria-label="Buy maple wood toothbrush now"
                >
                  Buy Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 border-2 border-primary-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  aria-label="Learn more about maple wood toothbrush"
                >
                  Learn More
                </button>
              </div>

              {/* Price Display */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Starting from</div>
                    <div className="text-3xl font-bold text-primary-600">$18.99 CAD</div>
                    <div className="text-sm text-gray-500">4-Pack Available</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Free Shipping</div>
                    <div className="text-sm text-green-600 font-medium">✓ Eco-Friendly</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                <img
                  src="/images/project/01 Twiggle Brush Mockup.jpg"
                  alt="Woman brushing her teeth with maple wood toothbrush"
                 
                  loading="lazy"
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-sm font-semibold">Maple Wood</span>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-100 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-24 h-24 bg-primary-600 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">Our Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of sustainability, innovation, and quality in every product we create.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 50 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-80 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  {/* Icon Container */}
                  <div className="flex justify-center pt-8 pb-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6 h-full flex flex-col">
                    <h3 className="text-base font-semibold text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow text-center">
                      {feature.description}
                    </p>
                
                    {/* Stats */}
                    <div className="mt-auto text-center">
                      <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                        {feature.stats}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-green-50/0 group-hover:from-primary-50/30 group-hover:to-green-50/30 transition-all duration-300"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ArrowRightIcon className="w-3 h-3 text-primary-600" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : 30 
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary-600 to-green-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SparklesIcon className="w-6 h-6" />
              <span className="text-lg font-semibold">Discover Our Full Range</span>
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Best Sellers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most loved products that customers keep coming back for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.03 }} 
                className="group relative bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {product.badge}
                  </span>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full shadow hover:bg-gray-50 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-primary-600 font-bold">{product.price}</p>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-2">(24)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition">
              View All Products
              <ArrowRightIcon className="ml-2 -mr-1 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Split-Screen Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/images/project/01 Twiggle Brush Mockup.jpg"
                  alt="Woman brushing her teeth with eco-friendly bamboo toothbrush"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-sm font-semibold">100% Sustainable</span>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-100 rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <SparklesIcon className="w-4 h-4" />
                <span>Premium Quality</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Start Your Day
                <span className="block text-primary-600">With Confidence</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Join thousands of satisfied customers who have made the switch to sustainable oral care. 
                Our bamboo toothbrushes provide the same cleaning power you expect, while protecting our planet for future generations.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Same cleaning power as plastic brushes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Comfortable grip and soft bristles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Gentle on teeth and gums</span>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  aria-label="Shop eco-friendly bamboo toothbrushes"
                >
                  Shop Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 border-2 border-primary-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  aria-label="Learn more about our products"
                >
                  Learn More
                </button>
              </div>

        
            
            </div>
          </div>
        </div>
      </section>

      {/* Quebec Company */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Une entreprise fièrement québécoise
              </h2>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer mx-auto lg:mx-0 w-fit">
                NOTRE HISTOIRE
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="order-first lg:order-last">
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src="/images/project/ceo.png"
                  alt="Quebec company showcasing eco-friendly products"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
