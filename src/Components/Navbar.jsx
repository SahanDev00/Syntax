import React, { useEffect, useRef, useState } from 'react'
import logo from "../Assets/logo_white.png"
import logo2 from "../Assets/logodark.png"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
              setNav(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [navRef]);

  const handleNav = () => {
      setNav(!nav);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='w-full sm:h-[100px] h-[80px]  dark:bg-gray-700 mt-2'>  
      <div className='w-[90%] sm:w-[85%] md:w-[80%] h-full mx-auto flex justify-between items-center'> 
        <div>
          <img src={logo} alt="" className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] related dark:hidden'/>
          <img src={logo2} alt="" className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] hidden dark:block'/>
        </div>
        <div>
          <ul className='hidden gap-3 md:flex md:gap-8 font-semibold text-lg sm:text-xl dark:text-white'>
            <NavLink to="/" exact className='cursor-pointer hover:shadow-sm hover:scale-105 duration-100'>Home</NavLink>
            <NavLink to="/projects" className='cursor-pointer hover:shadow-sm hover:scale-105 duration-100'>Projects</NavLink>
            <NavLink to="/Contact" className='cursor-pointer hover:shadow-sm hover:scale-105 duration-100'>Contact Us</NavLink>
          </ul>
        </div>

        <div onClick={toggleDarkMode} className='md:block top-7 right-7 dark:text-white hidden'>
            <DarkMode/>
        </div>

        <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer dark:text-white'>
          {nav ? <IoClose size={30} className='mr-3'/> : <IoMenu size={30} className='mr-3'/>}
        </div>

        <div ref={navRef} className={nav ? "md:hidden fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-white dark:bg-gray-700 ease-in-out duration-500 z-20" : 'fixed left-[-100%]'}>
          <div className='flex justify-between items-center'>
            <img src={logo} alt="" className='w-[100px] h-[100px] m-3 related dark:hidden'/>
            <img src={logo2} alt="" className='w-[100px] h-[100px] m-3 hidden dark:block'/>
            <div onClick={toggleDarkMode} className='block dark:text-white mr-4'>
              <DarkMode/>
            </div>
          </div>
          <div className='mt-6'>
            <ul className='flex flex-col font-semibold text-lg space-y-5 dark:text-white'>
              <NavLink to="/" exact className='cursor-pointer hover:shadow-sm hover:scale-105 duration-100'>Home</NavLink>
              <NavLink to="/projects" className='cursor-pointer hover:shadow-sm hover:scale-105 duration-100'>Projects</NavLink>
              <NavLink to="/contact" className='cursor-pointer hover:shadow-sm hover:scale-105 duration-100'>Contact Us</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar