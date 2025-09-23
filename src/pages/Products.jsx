import React, { useState } from 'react';
import { ShoppingCartIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Twiggle Green', imageUrl: '/images/project/Twiggle green .jpg', tag: '1 Unit' },
    { id: 2, name: 'Twiggle Charcoal', imageUrl: '/images/project/Twiggle charcoal.jpg', tag: '1 Unit' },
    { id: 3, name: 'Twiggle Fresh', imageUrl: '/images/project/Twiggle fresh.jpg', tag: '1 Unit' },
    { id: 4, name: 'Twiggle Natural', imageUrl: '/images/project/Twiggle Natural.jpg', tag: '1 Unit' },
    { id: 5, name: 'Twiggle Rouge', imageUrl: '/images/project/Twiggle rouge.jpg', tag: '1 Unit' },
    { id: 6, name: 'Twiggle White', imageUrl: '/images/project/Twiggle white.jpg', tag: '1 Unit' },
    { id: 7, name: 'Kids Bamboo Toothbrush', imageUrl: '/images/project/Kids bamboo toothbrush.jpg', tag: 'Coming Soon', comingSoon: true },
    { id: 8, name: 'Custom Branding Package', imageUrl: '/images/project/Custom branding package.jpg', tag: 'Bundle' }
  ];

  const openQueryForm = (product) => {
    setSelectedProduct(product);
    setIsQueryFormOpen(true);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Products Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Single-unit bamboo toothbrushes in curated variants, plus a custom branding package for clinics.
            </p>
          </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full ${product.comingSoon ? 'opacity-70' : ''}`}
            >
              {/* Product Image */}
              <div className="relative w-full bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-64 w-auto max-w-full object-contain"
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                )}
                {product.comingSoon && (
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{product.name}</h3>
                </div>
                
                <button
                  onClick={() => !product.comingSoon && openQueryForm(product)}
                  disabled={product.comingSoon}
                  className={`mt-4 w-full flex items-center justify-center px-4 py-3 rounded-md shadow-sm text-base font-medium transition-colors duration-200 ${product.comingSoon ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'text-white bg-green-600 hover:bg-green-700'}`}
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  {product.comingSoon ? 'Coming Soon' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Query Form Modal */}
      {isQueryFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={closeQueryForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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
                  defaultValue={`I'm interested in the ${selectedProduct?.name}.`}
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
    </div>
  );
};

export default Products;
