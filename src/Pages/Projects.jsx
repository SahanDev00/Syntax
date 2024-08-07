import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import estate from "../Assets/icons/estate.svg";
import holiday from "../Assets/icons/holiday.svg";
import grave from "../Assets/icons/grave.svg";
import Travel from "../Assets/icons/Travel.svg";
import food from "../Assets/icons/food.svg"; 
import zesty from "../Assets/icons/zesty.svg"; 
import senex from "../Assets/icons/senex.svg"; 
import syntaxware from "../Assets/icons/syntaxware.svg"; 
import game from "../Assets/icons/game.svg"; 


const Projects = () => {
  const projects = [
    
    {
        iconUrl: syntaxware,
        theme: 'btn-back-red',
        name: 'SyntaxWare',
        description: 'Modern Interactive 3D Web Application for a Software Company.',
        link: 'https://syntaxware.netlify.app/',
    },
    {
        iconUrl: grave,
        theme: 'btn-back-red',
        name: 'Grave',
        description: 'Fully Responsive Static Website for E-Commerce.',
        link: 'https://gravestore.netlify.app/',
    },
    {
        iconUrl: zesty,
        theme: 'btn-back-yellow',
        name: "Zesty",
        description: 'A Modern interactive 3D Web application with a chatbot.',
        link: 'https://zesty-ai.netlify.app',
    },
    {
        iconUrl: senex,
        theme: 'btn-back-yellow',
        name: "Senex",
        description: 'An E-Commerce web application for a Computer Shop.',
        link: 'https://senex-computers.netlify.app',
    },
    {
        iconUrl: food,
        theme: 'btn-back-yellow',
        name: "PoP's",
        description: 'A website for a restaurant made with React.js + Tailwind.css',
        link: 'https://popsfoods.netlify.app',
    },
    {
        iconUrl: game,
        theme: 'btn-back-yellow',
        name: "Game",
        description: 'A 3D game created for Testing Purpose',
        link: 'https://3dgames.netlify.app/',
    },
    {
        iconUrl: Travel,
        theme: 'btn-back-blue',
        name: 'Travel Guide App',
        description: 'Designed and built a fully responsive Travel Guide front-end application.',
        link: 'https://travellerwebapp.netlify.app',
    },
    {
        iconUrl: holiday,
        theme: 'btn-back-black',
        name: 'Holiday',
        description: 'Developed a front-end web application for Trip Booking. ',
        link: 'https://holidaybooking1.netlify.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Data Finance',
        description: 'A Front End prototype for a data analysis website.',
        link: 'https://data-finance-frontend.netlify.app',
    }
];

    return (
        <div className=' w-[90%] xl:w-[80%] mx-auto mt-6'>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p className='text-xl mt-3 dark:text-gray-200 text-white font-poppins'> Discover a showcase of my front-end development work. From dynamic and responsive websites to captivating user interfaces, each project demonstrates my expertise in creating visually stunning and highly functional digital experiences. Explore the portfolio to see how I bring ideas to life through code and design.</p>
            </div>
            <div className='flex flex-wrap my-20 gap-16 text-left ml-2 lg:ml-10'>
                {projects.map((project) => (
                    <div className=' lg:w-[400px] w-full text-white dark:text-gray-100 border-2 p-4 shadow-md shadow-purple-500 hover:scale-105 duration-200 bg-black/10 dark:shadow-purple-800' key={project.name}>
                        <div className=' w-12 h-12'>
                            <div className={` rounded-xl ${project.theme}`} />
                            <div className=' rounded-xl flex justify-center items-center'>
                                <img src={project.iconUrl} alt="Project Icon" className='w-10 h-10 object-contain text-white' />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold dark:text-white'>
                                {project.name}
                            </h4>
                            <p className='mt-2 dark:text-gray-200 text-white font-poppins'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex items-center gap-2 font-poppins hover:text-pink-300'>
                                <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-white hover:text-pink-300 dark:text-blue-100 text-lg'>
                                    Live Link
                                </Link>
                                <FaArrowAltCircleRight size={20} alt="arrow" className='object-contain  dark:text-blue-100 ' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
