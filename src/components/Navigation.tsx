import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-white text-2xl font-bold">Portfolio</NavLink>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white'}`
              }>Home</NavLink>
              <NavLink to="/projects" className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white'}`
              }>Projects</NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white'}`
              }>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white'}`
              }>Contact</NavLink>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</NavLink>
            <NavLink to="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;