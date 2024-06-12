import React from 'react';
import logo from '../Assets/logodark.png';
import {
    FaInstagram,
    FaTwitter,
    FaGithub
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-[80px] sm:h-[70px] md:h-[120px] mt-28 '>
            <div className='w-full h-full bg-gray-400'>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-3'>
                    <div className='flex items-center ml-10 justify-center'>
                        <img src={logo} alt="" className='md:w-[120px] md:h-[120px] w-[100px] h-[100px]' />
                    </div>
                    <div className='hidden md:flex items-center justify-center'>
                        <h1 className='font-bold drop-shadow-xl text-sm md:text-xl font-poppins'>© 2024 · SYNTAX SOLUTIONS</h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href="">
                            <FaInstagram size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                        <a href="">
                            <FaTwitter size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                        <a href="">
                            <FaGithub size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                    </div>
                </div>
                <div className='flex md:hidden items-center justify-center bg-gray-400 mx-auto'>
                    <h1 className='font-bold drop-shadow-xl text-sm py-2 font-poppins'>© 2024 · SYNTAX SOLUTIONS</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
