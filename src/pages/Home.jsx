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
      name: "Twiggle Green",
      image: "/images/project/Twiggle green .jpg",
      badge: "1 Unit",
      reviews: 12,
    },
    {
      name: "Twiggle Charcoal",
      image: "/images/project/Twiggle charcoal.jpg",
      badge: "1 Unit",
      reviews: 8,
    },
    {
      name: "Twiggle Fresh",
      image: "/images/project/Twiggle fresh.jpg",
      badge: "1 Unit",
      reviews: 10,
    },
    {
      name: "Twiggle Natural",
      image: "/images/project/Twiggle Natural.jpg",
      badge: "1 Unit",
      reviews: 7,
    },
    {
      name: "Twiggle Rouge",
      image: "/images/project/Twiggle rouge.jpg",
      badge: "1 Unit",
      reviews: 9,
    },
    {
      name: "Twiggle White",
      image: "/images/project/Twiggle white.jpg",
      badge: "1 Unit",
      reviews: 6,
    },
    {
      name: "Kids Bamboo Toothbrush",
      image: "/images/project/Kids bamboo toothbrush.jpg",
      badge: "Coming Soon",
      reviews: 0,
      comingSoon: true,
    },
    {
      name: "Custom Branding Package",
      image: "/images/project/Custom branding package.jpg",
      badge: "Bundle",
      reviews: 15,
    },
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
      title: "Dentist Approved and Recommended",
      description: "Trusted by dental professionals for comfort, quality, and effective cleaning",
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
          src="/images/project/cbrush.png" 
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
      title: "Bamboo chosen with care",
      description: "Cruelty-free, eco-safe, and planet-friendly sourcing",
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
      title: "A step towards plastic free living",
      description: "Make a simple daily switch that cuts plastic from your routine",
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
    const formData = new FormData(e.target);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';
    const productName = selectedProduct?.name || 'General Inquiry';
    const subject = `Inquiry: ${productName}`;
    const body = `Name: ${name}\nEmail: ${email}\nProduct: ${productName}\n\n${message}`;
    const mailto = `mailto:twiggleoralcare@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
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
    <section className="relative flex flex-col items-center justify-center text-center py-14 md:py-24 min-h-[60vh] md:min-h-[80vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/project/hi.png"
          alt="Eco-friendly bamboo oral care products flat lay"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 animate-slowZoom"
          loading="eager"
        />
        
        {/* Gradient Overlay removed per request */}
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Collage (left) */}
          <div className="hidden lg:block">
            <div className="relative h-[360px]">
             
              
            </div>
          </div>

          {/* Text (right) */}
          <div className="max-w-xl ml-auto right ">
            <h1 className="text-2xl md:text-4xl font-extrabold text-border lg:text-white mb-4 md:mb-6 drop-shadow-lg" style={{ fontFamily: 'Sunborn, sans-serif' }}>
              <span className="block text-4xl md:text-5xl lg:text-4xl leading-tight text-primary-900 ">Brush Clean. Live Green.</span>
              Promote Your Practice<br />
              with<br />
              Twiggle-oral-care<br />
              <span className="text-primary-900">
                <TypeAnimation
                  sequence={['Sustainable', 2000, 'Affordable', 2000, 'Innovative', 2000]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <button className="bg-primary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg inline-flex items-center gap-2 ml-auto">
              <ShoppingBagIcon className="w-5 h-5" />
              Shop Now
            </button>
          </div>
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
                <span>For Dental Clinics</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Elevate Your Patient Experience
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Partner with Twiggle Oral Care to offer premium bamboo toothbrushes customized with your clinic’s branding.
                Provide eco-friendly, high-quality oral care products that your patients will love — while reinforcing your
                commitment to sustainability.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Custom branding available for your dental office and corporates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Premium bamboo handles with smooth, comfortable grip</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Soft, durable bristles for gentle and effective cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Eco-friendly and biodegradable, supporting a greener future</span>
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

              {/* Features Display removed per request */}
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
                  <span className="text-sm font-semibold">Twiggle</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
                <div className="relative h-72 md:h-80 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  {/* Icon Container */}
                  <div className="flex justify-center pt-6 md:pt-8 pb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 md:px-6 pb-5 md:pb-6 h-full flex flex-col">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 flex-grow text-center">
                      {feature.description}
                    </p>
                
                    {/* Stats */}
                    <div className="mt-auto text-center">
                      <div className="inline-flex items-center px-2.5 md:px-3 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors duration-300">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                    className={`bg-white rounded-xl shadow-md overflow-hidden group flex flex-col h-full ${product.comingSoon ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => !product.comingSoon && openQueryForm(product)}
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
                      {product.comingSoon && (
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          Coming Soon
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
                  src="/images/project/Custom branding package.jpg"
                  alt="Custom branding package of Twiggle bamboo toothbrushes"
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
                Discover the toothbrush that’s gentle on the planet.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our handles are made from responsibly sourced bamboo, crafted to deliver a premium brushing experience while supporting a
                sustainable future. Experience the perfect blend of eco-conscious design and everyday comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="text-primary-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Made from responsibly sourced bamboo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="text-primary-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Eco-friendly, sustainable materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="text-primary-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Premium smooth finish for comfort and style</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="text-primary-600 h-5 w-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Crafted with care for you and the planet</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-first lg:order-last">
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src="/images/project/ind.jpg"
                  alt="Twiggle bamboo toothbrushes product showcase"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
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
                  name="name"
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
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
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