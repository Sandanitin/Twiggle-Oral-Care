import React, { useState, useEffect, useRef } from 'react';

const CountingAnimation = ({ number, label }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Parse the number
            const isPercentage = number.includes('%');
            const isThousand = number.includes('K');
            const numValue = parseFloat(number.replace(/[^0-9.]/g, ''));
            
            // Set target value
            let target = numValue;
            if (isThousand) {
              target = numValue * 1000;
            }
            
            // Simple counting animation
            let currentValue = 0;
            const increment = Math.max(1, target / 50); // At least 1, max 50 steps
            const stepTime = 40; // 40ms per step
            
            const timer = setInterval(() => {
              currentValue += increment;
              
              if (currentValue >= target) {
                currentValue = target;
                clearInterval(timer);
              }
              
              // Format the display value
              let formattedValue;
              if (isPercentage) {
                formattedValue = Math.round(currentValue) + '%';
              } else if (isThousand) {
                formattedValue = Math.round(currentValue / 1000) + 'K';
              } else {
                formattedValue = Math.round(currentValue);
              }
              
              // Add + for non-K numbers that aren't percentages
              if (!isPercentage && !isThousand) {
                formattedValue += '+';
              }
              
              setDisplayValue(formattedValue);
            }, stepTime);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [number, hasAnimated]);

  return (
    <div ref={elementRef} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
      <p className="text-4xl font-bold text-green-600 mb-2">
        {displayValue}
      </p>
      <p className="text-base font-medium text-gray-700">{label}</p>
    </div>
  );
};

const ImpactSection = () => {
  const stats = [
    { id: 1, number: '500', label: 'Dental Clinics Served' },
    { id: 2, number: '50K', label: 'Happy Customers' },
    { id: 3, number: '100%', label: 'Biodegradable Products' },
    { id: 4, number: '5', label: 'Years of Experience' },
  ];

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Making a difference in oral health and the environment, one smile at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <CountingAnimation 
              key={stat.id}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            *Numbers based on our latest impact assessment and customer feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
