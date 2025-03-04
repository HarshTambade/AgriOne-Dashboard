import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  ShoppingCart, 
  CloudSun, 
  Sprout, 
  Wallet, 
  HelpCircle, 
  Settings, 
  X, 
  Leaf
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingCart size={20} /> },
    { name: 'Weather Advisory', path: '/weather-advisory', icon: <CloudSun size={20} /> },
    { name: 'Crop Advisory', path: '/crop-advisory', icon: <Sprout size={20} /> },
    { name: 'Financial Tools', path: '/financial-tools', icon: <Wallet size={20} /> },
    { name: 'Farming Assistance', path: '/farming-assistance', icon: <HelpCircle size={20} /> },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-700" />
            <span className="ml-2 text-xl font-bold text-green-700">AgriOne</span>
          </div>
          <button 
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none" 
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-5 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
          <NavLink
            to="/settings"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
          >
            <Settings size={20} className="mr-3" />
            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;