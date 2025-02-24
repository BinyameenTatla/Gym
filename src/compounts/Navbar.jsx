import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { SiTrainerroad } from 'react-icons/si';
import { IoPin } from 'react-icons/io5';
import { IoMdContact } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <>
      <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-800 to-black backdrop-blur-md shadow-xl z-50'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
          
          <div className="cursor-pointer text-3xl font-extrabold text-white font-[caveat] transition-transform transform hover:scale-105">
            Fitlift Gym
          </div>

        
          <div className='hidden md:flex gap-12 justify-center items-center text-white font-semibold'>
            <a href="#home" className="flex items-center gap-2 hover:text-blue-500 transition-transform duration-300 cursor-pointer transform hover:scale-110">
              <FaHome />
              Home
            </a>
            <a href="#trainer" className="flex items-center gap-2 hover:text-blue-500 transition-transform duration-300 cursor-pointer transform hover:scale-110">
              <SiTrainerroad />
              Trainer
            </a>
            <a href="#opinions" className="flex items-center gap-2 hover:text-blue-500 transition-transform duration-300 cursor-pointer transform hover:scale-110">
              <IoPin />
              Opinions
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-blue-500 transition-transform duration-300 cursor-pointer transform hover:scale-110">
              <IoMdContact />
              Contact
            </a>
          </div>

        
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <AiOutlineMenu size={30} />
          </button>

          
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white shadow-md transition-all ease-in-out duration-300">
              <a href="#home" className="block px-6 py-3 hover:text-blue-500 transition-colors duration-300 cursor-pointer hover:bg-gray-800">
                <FaHome /> Home
              </a>
              <a href="#trainer" className="block px-6 py-3 hover:text-blue-500 transition-colors duration-300 cursor-pointer hover:bg-gray-800">
                <SiTrainerroad /> Trainer
              </a>
              <a href="#opinions" className="block px-6 py-3 hover:text-blue-500 transition-colors duration-300 cursor-pointer hover:bg-gray-800">
                <IoPin /> Opinions
              </a>
              <a href="#contact" className="block px-6 py-3 hover:text-blue-500 transition-colors duration-300 cursor-pointer hover:bg-gray-800">
                <IoMdContact /> Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
