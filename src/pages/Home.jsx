import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  PauseIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const navigate = useNavigate();
  
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
      name: "4-Pack Bamboo Toothbrushes - OLA Cycle",
      image: "/images/project/WhatsApp Image 2025-09-12 at 11.26.43.jpeg",
      badge: "Best Seller",
      reviews: 29,
    },
    {
      name: "Economy Pack of 8 Bamboo Toothbrushes", 
      image: "/images/project/WhatsApp Image 2025-09-12 at 11.26.44 (1).jpeg",
      badge: "Hot Deal",
      reviews: 74,
    },
    {
      name: "Bamboo Dental Floss",
      image: "/images/project/WhatsApp Image 2025-09-13 at 12.05.44.jpeg",
      badge: "New",
      reviews: 97,
    },
    {
      name: "Bamboo Cotton Swabs",
      image: "/images/project/WhatsApp Image 2025-09-12 at 11.27.32.jpeg",
      badge: "Eco-Friendly",
      reviews: 64,
    },
    {
      name: "Natural Bamboo Deodorant",
      image: "/images/project/WhatsApp Image 2025-09-13 at 12.05.35.jpeg",
      badge: "Organic",
      reviews: 74,
    }
  ]

  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleBuyNow = () => {
    navigate('/products');
  };

  const closeQueryForm = () => {
    setIsQueryFormOpen(false);
    setSelectedProduct(null);
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted', selectedProduct);
    closeQueryForm();
  };

  const handleLearnMore = () => {
    const element = document.getElementById('maple-wood-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQueryForm = (product) => {
    setSelectedProduct(product);
    setIsQueryFormOpen(true);
  };

  // ===== Main Render =====
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
     {/* Hero */}
<section className="relative flex flex-col items-center justify-center text-center py-24 min-h-[70vh] overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/project/hero.png"
    alt="Eco-friendly bamboo oral care products flat lay"
    className="absolute inset-0 w-full h-full object-cover object-center scale-100 animate-slowZoom"
    loading="eager"
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
  
  {/* Content */}
  <div className="relative z-10 max-w-xl mx-auto px-6 sm:px-8">
     <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
       Bamboo Toothbrushes<br/>
       <span className="text-primary-400">
         <TypeAnimation
           sequence={['Sustainable', 2000, 'Eco-Friendly', 2000, 'Biodegradable', 2000]}
           speed={50}
           repeat={Infinity}
         />
       </span>
     </h1>
     <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
       Switch to bamboo toothbrushes and join the movement towards a plastic-free future with OLA Cycle.
     </p>
     <button 
       onClick={() => navigate('/products')}
       className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
     >
       <ShoppingBagIcon className="w-5 h-5" />
       Shop Now
     </button>
  </div>
</section>


      {/* Maple Wood */}
      <section id="maple-wood-section" className="py-20 bg-white">
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

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBuyNow}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  aria-label="Buy maple wood toothbrush now"
                >
                  Buy Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>

              {/* Features Display */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Available</div>
                    <div className="text-3xl font-bold text-primary-600">4-Pack</div>
                    <div className="text-sm text-gray-500">Maple Wood</div>
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
                    <h3 className="text-base font-semibold text-gray-900 mb-3">{feature.title}</h3>
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
        </div>
      </section>

      {/* Best Sellers */}
      <section id="products" className="py-16 bg-gray-50">
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
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer flex flex-col h-full"
                onClick={() => openQueryForm(product)}
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="mt-auto flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button 
              onClick={() => navigate('/products')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 border-2 border-primary-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              aria-label="View all products"
            >
              View All Products
              <ArrowRightIcon className="ml-2 h-5 w-5" />
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
                  onClick={() => navigate('/products')}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  aria-label="Shop eco-friendly bamboo toothbrushes"
                >
                  Shop Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
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
                 A Proudly Quebec-Based Company
               </h2>
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Founded in Quebec in 2019, Twiggle Oral Care was born from a simple yet powerful vision: 
                 to revolutionize oral hygiene by creating durable and eco-friendly bamboo toothbrushes. 
                 Our passionate Quebec team works every day to deliver sustainable solutions that respect 
                 our environment.
               </p>
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 From Montreal to Quebec City, we are proud to contribute to the local economy while 
                 promoting a more sustainable lifestyle. Every Twiggle Oral Care product is designed with 
                 Quebec expertise and a deep commitment to environmental responsibility.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                     <span className="text-primary-600 font-bold">🇨🇦</span>
                   </div>
                   <span className="text-gray-700 font-medium">100% Quebec-Made</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                     <span className="text-green-600 font-bold">🌱</span>
                   </div>
                   <span className="text-gray-700 font-medium">100% Eco-Friendly</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                     <span className="text-blue-600 font-bold">💚</span>
                   </div>
                   <span className="text-gray-700 font-medium">100% Passion-Driven</span>
                 </div>
               </div>
               <button 
                 onClick={() => navigate('/about')}
                 className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer mx-auto lg:mx-0 w-fit"
               >
                 OUR STORY
                 <ArrowRightIcon className="ml-2 h-5 w-5" />
               </button>
             </div>

             {/* Right Side - Image */}
             <div className="order-first lg:order-last">
               <div className="relative h-96 lg:h-[500px]">
                 <img
                   src="/images/project/ceo.png"
                   alt="Entreprise québécoise OLA Cycle - Brosses à dents en bambou"
                   className="w-full h-full object-cover rounded-2xl"
                   loading="lazy"
                 />
                 {/* Quebec Flag Badge */}
                 <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                   <span className="text-sm font-semibold text-primary-600">🇨🇦 Québec</span>
                 </div>
                 {/* Eco Badge */}
                 <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                   <span className="text-sm font-semibold">🌱 Écologique</span>
                 </div>
                 {/* Decorative Elements */}
                 <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
                 <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-100 rounded-full opacity-40"></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Query Form Modal */}
      {isQueryFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={closeQueryForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <h3 className="text-lg font-medium text-gray-900 mb-4">Inquire about {selectedProduct?.name}</h3>
            <form className="space-y-4" onSubmit={handleSubmitInquiry}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your message or questions about this product..."
                  defaultValue={selectedProduct ? `I'm interested in the ${selectedProduct.name}.` : ''}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
      
      {/* ... rest of the JSX ... */}
    </div>
  );
};

export default Home;
