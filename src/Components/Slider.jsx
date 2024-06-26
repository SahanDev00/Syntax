import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

const icons = [
  <FaReact size={40} />,
  <RiTailwindCssFill size={40} />,
  <TbBrandThreejs size={40} />,
  <FaNodeJs size={40} />,
  <SiCsharp size={40} />,
  <PiFileSql size={40} />,
];

const Slider = () => {
  return (
    <div className=' w-[80%] xl:w-[60%] h-[80px] md:h-[100px] mx-auto rounded-full mt-[90px] sm:mt-[-90px] md:mt-[40px] lg:mt-6 items-center relative overflow-hidden bg-[#9400FF] dark:bg-[#030637] shadow-md border-2 border-white'>
      <div className='flex animate-icons pt-5 md:pt-7 text-white'>
        {[...icons, ...icons, ...icons, ...icons, ...icons,].map((icon, index) => (
          <div key={index} className="icon">
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider;
