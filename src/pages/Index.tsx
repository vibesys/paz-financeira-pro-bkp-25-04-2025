
import React from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Your New Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is a clean, minimal starter project. Start building your amazing application from here!
          </p>
          <div className="space-x-4">
            <a 
              href="#" 
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Get Started
            </a>
            <a 
              href="#" 
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;

