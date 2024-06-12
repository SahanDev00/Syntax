import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const element = document.documentElement;
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='relative'>
            <MdDarkMode size={25}
                onClick={changeTheme}
                className={`w-12 absolute drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] cursor-pointer ${theme !== 'dark' ? 'opacity-0' : 'opacity-100'}`}
            />
            <MdOutlineLightMode size={25}
                onClick={changeTheme}
                className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] cursor-pointer ${theme !== 'dark' ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default DarkMode;
