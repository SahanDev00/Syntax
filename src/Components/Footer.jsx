import React from 'react';
import logo from "../Assets/logo_white.png"
import logo2 from "../Assets/logodark.png"
import {
    FaInstagram,
    FaTwitter,
    FaGithub
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-[80px] sm:h-[70px] md:h-[120px] mt-28 '>
            <hr/>
            <div className='w-full h-full '>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-3'>
                    <div className='flex items-center ml-10 justify-center'>
                    <img src={logo} alt="" className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] related dark:hidden'/>
                    <img src={logo2} alt="" className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] hidden dark:block'/>
                    </div>
                    <div className='hidden md:flex items-center justify-center'>
                        <h1 className='font-bold drop-shadow-xl text-sm md:text-xl font-poppins dark:text-white'>© 2024 · SYNTAX SOLUTIONS</h1>
                    </div>
                    <div className='flex items-center justify-center dark:text-white'>
                        <a href="https://www.instagram.com/syntaxware">
                            <FaInstagram size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                        <a href="https://twitter.com/SyntaxSolutionz">
                            <FaTwitter size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                        <a href="https://github.com/SahanDev00">
                            <FaGithub size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                    </div>
                </div>
                <div className='flex md:hidden items-center justify-center  mx-auto'>
                    <h1 className='font-bold drop-shadow-xl text-sm py-2 font-poppins dark:text-white'>© 2024 · SYNTAX SOLUTIONS</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
