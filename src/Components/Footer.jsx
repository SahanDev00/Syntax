import React from 'react';
import logo2 from "../Assets/logodark.png"
import {
    FaInstagram,
    FaTwitter,
    FaGithub
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-[100px] sm:h-[80px] md:h-[130px] mt-28 '>
            <hr/>
            <div className='w-full h-full'>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 font-poppins'>
                    <div className='flex items-center ml-10 justify-center'>
                    <img src={logo2} alt="" className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]'/>
                    </div>
                    <div className='hidden md:flex items-center justify-center'>
                        <h1 className='font-bold drop-shadow-xl text-sm md:text-xl font-poppins text-white'>© 2024 · SYNTAX SOLUTIONS</h1>
                    </div>
                    <div className='flex items-center justify-center text-white'>
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
            </div>
        </div>
    );
}

export default Footer;
