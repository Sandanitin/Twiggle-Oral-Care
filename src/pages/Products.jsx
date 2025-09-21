import React, { useState } from 'react';
import { ShoppingCartIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: '4-Pack Bamboo Brushes',
      price: '24.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-12 at 11.26.43.jpeg',
      category: 'bestseller'
    },
    {
      id: 2,
      name: 'Family Pack (6 Brushes)',
      price: '34.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-12 at 11.26.44 (1).jpeg',
      category: 'popular'
    },
    {
      id: 3,
      name: 'Kids Bamboo Brushes',
      price: '19.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-12 at 11.26.43 (3).jpeg',
      category: 'kids'
    },
    {
      id: 4,
      name: 'Travel Set',
      price: '29.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-12 at 11.27.32.jpeg',
      category: 'travel'
    },
    {
      id: 5,
      name: 'Charcoal Infused Brushes',
      price: '27.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-13 at 12.05.44.jpeg',
      category: 'premium'
    },
    {
      id: 6,
      name: 'Sensitive Care Pack',
      price: '26.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-13 at 12.05.35.jpeg',
      category: 'sensitive'
    },
    {
      id: 7,
      name: 'Bamboo & Charcoal Duo',
      price: '22.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-12 at 11.26.43 (3).jpeg',
      category: 'bundle'
    },
    {
      id: 8,
      name: 'Eco Starter Kit',
      price: '39.99',
      imageUrl: '/images/project/WhatsApp Image 2025-09-12 at 11.27.32.jpeg',
      category: 'bundle'
    }
  ];

  const openQueryForm = (product) => {
    setSelectedProduct(product);
    setIsQueryFormOpen(true);
  };

  const closeQueryForm = () => {
    setIsQueryFormOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Products Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Toothbrushes</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eco-friendly bamboo toothbrushes for a cleaner smile and a healthier planet
            </p>
          </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative w-full bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-64 w-auto max-w-full object-contain"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">${product.price} CAD</p>
                </div>
                
                <button
                  onClick={() => openQueryForm(product)}
                  className="mt-4 w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
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
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
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
