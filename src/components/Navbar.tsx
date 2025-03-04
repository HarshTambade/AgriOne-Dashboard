import React from 'react';
import { Bell, MessageSquare, Search, Menu, User } from 'lucide-react';

interface NavbarProps {
  onMenuButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuButtonClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={onMenuButtonClick}
          >
            <Menu size={24} />
          </button>
        </div>
        
        <div className="max-w-lg w-full lg:max-w-xs hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Bell size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <MessageSquare size={20} />
          </button>
          <div className="relative">
            <button className="flex items-center text-sm focus:outline-none">
              <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center text-white">
                <User size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;