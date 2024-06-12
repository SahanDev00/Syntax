import React from 'react';
import { FaNode, FaReact } from "react-icons/fa";
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
    <div className=' w-[80%] xl:w-[60%] h-[100px] bg-gray-200 mx-auto rounded-full lg:mt-6 items-center relative overflow-hidden'>
      <div className='flex animate-icons pt-7'>
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
