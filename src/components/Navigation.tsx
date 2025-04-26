
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition">
                My App
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/settings" 
                className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

