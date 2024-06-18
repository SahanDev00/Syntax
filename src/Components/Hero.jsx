import React, { Suspense, useEffect, useState } from 'react';
import Model from '../Components/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import globe from '../Assets/cyber_orb.glb';
import globePic from "../Assets/globe_pic.webp"
import aiPic from "../Assets/aiPic.webp"
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const globesize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [1, -3.5, -4];
    }
    return [screenScale, screenPosition];
  };

  const [globeScale, globePosition] = globesize();

  const [opacity, setOpacity] = useState(1);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setOpacity(0.08);
    } else {
      setOpacity(0.6);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial opacity based on current screen size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div className='w-screen xl:mt-12'>
      <div className="w-[80%] md:w-[90%] h-[500px] sm:h-[600px] md:grid lg:grid-cols-2 mx-auto items-center ">
        <div className='w-[80%] h-[500px] flex flex-col items-start sm:ml-[30] md:ml-[70px] lg:25 xl:ml-36 absolute lg:relative z-10 '>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-20 text-left text-white font-mono drop-shadow-sm'>SYNTAX SOLUTIONS</h1>
            <div className='w-[80%] md:w-full '>
              <p className='text-xl md:text-2xl mt-8 text-left text-wrap dark:text-gray-200 text-white '>A software company specializing in modern web applications and advanced .NET solutions, tailored to meet your unique requirements. Delivering high-performance, scalable, and secure solutions using cutting-edge technologies to drive your business forward.</p>
            </div>
            <NavLink to="/Contact">
              <button className='mt-8 w-[150px] dark:bg-gradient-to-r dark:from-[#0C134F] font-poppins dark:to-gray-900 bg-gradient-to-r from-[#e469ff] to-[#da08ff] h-[50px] rounded-2xl hover:scale-105 duration-300 ease-in-out hover:shadow-md hover:shadow-purple-900 text-white font-semibold border-2 border-white dark:border-gray-400'>Get Started</button>
            </NavLink>
        </div>
        <div className='lg:hidden w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mx-auto pt-10 md:pt-0 opacity-50 dark:opacity-40'>
            <img src={globePic} alt="" />
        </div>
        <div className='absolute w-[550px] ml-[180px] dark:opacity-30 opacity-50 hidden lg:block'>
          <img src={aiPic} alt="" />
        </div>
        <Canvas className='hidden lg:block dark:opacity-60' camera={{ position: [3, 3, 3], fov: 50 }} style={{ width: '100%', height: '90%' }}>
          <ambientLight intensity={1} />
          <directionalLight position={[50, 80, 5]} intensity={0.5} />
          <Suspense fallback={<Html center>Loading...</Html>}>
            <Model modelPath={globe} scale={globeScale} position={globePosition} opacity={opacity} material-transparent={true}/>
            <Environment preset="studio" />
          </Suspense>
          <EffectComposer>
            <Bloom luminanceThreshold={0.88} luminanceSmoothing={0.88} intensity={0.05} />
          </EffectComposer>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;

