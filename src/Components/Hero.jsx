import React, { Suspense, useEffect, useState } from 'react';
import Model from '../Components/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, Effects } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import globe from '../Assets/cyber_orb.glb';

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
      <div className="w-[80%] md:w-[90%] h-[600px] md:grid lg:grid-cols-2 mx-auto items-center ">
        <div className='w-[80%] h-[500px] flex flex-col items-start sm:ml-[30] md:ml-[70px] lg:ml-36 absolute lg:relative z-10'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-20 text-left'>SYNTAX SOLUTIONS</h1>
            <div className='w-[80%] md:w-full '>
              <p className='text-xl md:text-2xl mt-8 text-left text-wrap'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis qui neque tempore aut, mollitia necessitatibus soluta deleniti at enim incidunt eos laborum sequi hic praesentium!</p>
            </div>
            <button className='mt-8 bg-black w-[150px] h-[50px] rounded-2xl hover:scale-105 duration-300 ease-in-out hover:shadow-md hover:shadow-purple-900 text-white'>Get Started</button>
        </div>
        <Canvas camera={{ position: [3, 3, 3], fov: 50 }} style={{ width: '100%', height: '90%' }}>
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

