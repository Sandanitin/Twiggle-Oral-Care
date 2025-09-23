import React from 'react'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'
import CountUp from 'react-countup'
import { TypeAnimation } from 'react-type-animation'

const Hero = ({ onQueryClick }) => {
  return (
     <section
       id="home"
       className="relative w-full h-screen bg-gray-900 overflow-hidden"
     >
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 h-full flex items-center">
        <div className="space-y-10 text-white max-w-xl animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/20 text-primary-300 backdrop-blur-sm shadow-md">
            <SparklesIcon className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">
              Bamboo Toothbrushes - OLA Cycle
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight ">
            Bamboo
            <span className="text-primary-400"> Toothbrushes</span>
            <br />
            for a
            <span className="text-primary-400"> Sustainable Future</span>
          </h1>

          {/* Animated Subheadline */}
          <div className="text-primary-200 text-lg md:text-xl">
            <TypeAnimation
              sequence={['Biodegradable', 1500, 'Eco-Friendly', 1500, 'Sustainable', 1500]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQueryClick}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700   hover:scale-[1.03] transition-all duration-200"
            >
              Get Custom Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-primary-600 bg-white hover:bg-primary-50  hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
            >
              View Products
            </a>
          </div>

           {/* Stats with CountUp */}
           <div className="grid grid-cols-3 divide-x divide-white/20 bg-white/10 backdrop-blur-md rounded-xl mt-10  border border-white/10">
             <div className="text-center p-6">
               <div className="text-3xl font-bold text-primary-400 mb-1">
                 <CountUp end={100} duration={3} />%
               </div>
               <div className="text-sm text-gray-200 font-medium">Biodegradable</div>
             </div>
             <div className="text-center p-6">
               <div className="text-3xl font-bold text-primary-400 mb-1">
                 <CountUp end={500} duration={3} />+
               </div>
               <div className="text-sm text-gray-200 font-medium">Dental Clinics</div>
             </div>
             <div className="text-center p-6">
               <div className="text-3xl font-bold text-primary-400 mb-1">
                 <CountUp end={50000} duration={3} separator="," />+
               </div>
               <div className="text-sm text-gray-200 font-medium">Happy Customers</div>
             </div>
           </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
