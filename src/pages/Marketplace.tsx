import React, { useState } from 'react';
import { Filter, Search, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buy');
  
  const products = [
    {
      id: 1,
      name: 'Premium Wheat',
      category: 'Grains',
      price: 2100,
      unit: 'quintal',
      quantity: 50,
      location: 'Pune, Maharashtra',
      seller: 'Rajesh Farms',
      rating: 4.8,
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Organic Rice',
      category: 'Grains',
      price: 2500,
      unit: 'quintal',
      quantity: 30,
      location: 'Nashik, Maharashtra',
      seller: 'Green Valley Organics',
      rating: 4.9,
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      price: 1800,
      unit: 'quintal',
      quantity: 20,
      location: 'Nagpur, Maharashtra',
      seller: 'Sunshine Farms',
      rating: 4.6,
      trend: 'down',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Cotton',
      category: 'Fiber',
      price: 5600,
      unit: 'quintal',
      quantity: 15,
      location: 'Amravati, Maharashtra',
      seller: 'Eastern Agro',
      rating: 4.7,
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1594641146604-a488ee99c583?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Sugarcane',
      category: 'Cash Crops',
      price: 280,
      unit: 'quintal',
      quantity: 100,
      location: 'Kolhapur, Maharashtra',
      seller: 'Western Farms',
      rating: 4.5,
      trend: 'down',
      image: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Soybean',
      category: 'Oilseeds',
      price: 3800,
      unit: 'quintal',
      quantity: 25,
      location: 'Latur, Maharashtra',
      seller: 'Progressive Farmers',
      rating: 4.7,
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1599401464312-a6bc2a2dd8b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <button className="btn-primary">
            <ShoppingCart size={18} className="mr-2 inline" />
            My Orders
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('buy')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'buy'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Buy Products
          </button>
          <button
            onClick={() => setActiveTab('sell')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'sell'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Sell Products
          </button>
          <button
            onClick={() => setActiveTab('bids')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'bids'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Active Bids
          </button>
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Search products, sellers, locations..."
          />
        </div>
        <div className="flex space-x-2">
          <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
            <option>All Categories</option>
            <option>Grains</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Oilseeds</option>
            <option>Cash Crops</option>
            <option>Fiber</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <Filter size={18} className="mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Market Insights */}
      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <TrendingUp className="h-5 w-5 text-green-700 mr-2" />
          <h2 className="text-lg font-semibold text-green-800">Market Insights</h2>
        </div>
        <p className="text-sm text-gray-700 mb-3">
          Based on AI analysis, wheat prices are expected to rise by 8% in the next 2 weeks due to reduced supply. Consider buying now or waiting to sell for better returns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium">Wheat</span>
              <span className="flex items-center text-green-600">
                <ArrowUpRight size={16} className="mr-1" />
                +8.2%
              </span>
            </div>
            <p className="text-gray-500 text-xs">Trending upward</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium">Rice</span>
              <span className="flex items-center text-green-600">
                <ArrowUpRight size={16} className="mr-1" />
                +4.5%
              </span>
            </div>
            <p className="text-gray-500 text-xs">Stable growth</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium">Tomatoes</span>
              <span className="flex items-center text-red-600">
                <ArrowDownRight size={16} className="mr-1" />
                -6.3%
              </span>
            </div>
            <p className="text-gray-500 text-xs">Oversupply issue</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className={`flex items-center ${product.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {product.trend === 'up' ? (
                    <ArrowUpRight size={16} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={16} className="mr-1" />
                  )}
                  <span className="text-sm font-medium">
                    {product.trend === 'up' ? '+' : '-'}
                    {Math.floor(Math.random() * 10)}%
                  </span>
                </div>
              </div>
              
              <div className="mt-2">
                <p className="text-xl font-bold text-gray-800">₹{product.price}/{product.unit}</p>
                <p className="text-sm text-gray-600">Available: {product.quantity} {product.unit}s</p>
              </div>
              
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <span>{product.location}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {product.rating}
                </span>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 btn-primary text-sm py-2">Buy Now</button>
                <button className="flex-1 btn-outline text-sm py-2">Make Offer</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
              <span className="font-medium">24</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                4
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;