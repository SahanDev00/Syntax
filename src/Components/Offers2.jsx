// Offers.js
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import SoftwareModel from './SoftwareModel';
import { Html, OrbitControls } from '@react-three/drei';

const Offers2 = () => {
  const [lapSize, setLapSize] = useState({ scale: [2, 2, 2], position: [1, -3.5, -4] });

  useEffect(() => {
    const updateLapSize = () => {
      if (window.innerWidth < 768) {
        setLapSize({ scale: [0.8, 0.8, 0.8], position: [0, -1.5, 0] });
      } else if (window.innerWidth < 1024){
        setLapSize({ scale: [1.2, 1.2, 1.2], position: [0.008, -4.7, -1] });
      } else if (window.innerWidth < 1280){
        setLapSize({ scale: [1.5, 1.5, 1.5], position: [0.005, -4.7, -4] });
      }
    };

    updateLapSize();
    window.addEventListener('resize', updateLapSize);
    return () => window.removeEventListener('resize', updateLapSize);
  }, []);

  return (
    <div className='w-[90%] xl:w-[80%] mx-auto mt-5 dark:text-white 4xr:mt-7'>
        {/* offer two */}
        <div className='w-full h-[250px] lg:h-[350px] xl:mt-6'>
          <div className='lg:grid lg:grid-cols-2 h-full w-full'>
            <div className=' p-4 border-2 border-white lg:border-0 shadow-lg shadow-purple-600 lg:shadow-none mt-6 hover:scale-105 lg:hover:scale-100 duration-300 ease-in-out'>
              {/* Content for offer one */}
              <h1 className='xl:mt-14 mb-4 sm:mb-8 font-semibold text-2xl xl:text-3xl xl:mr-[5%] underline text-white dark:text-gray-300 font-poppins 4xr:text-4xl'>WEB APPLICATIONS</h1>
              <p className='text-xl xl:mr-[5%] text-white dark:text-gray-400 xl:text-2xl 4xr:text-3xl'>Elevate your digital experience with web applications featuring modern UIs and immersive 3D models. We design visually stunning, interactive, and user-friendly interfaces that captivate your audience, boost engagement, and enhance your online presence.</p>
            </div>
            <div className=''>
              <Canvas className='lg:block hidden dark:opacity-85' id="canvas1" camera={{ position: [10, 10, 10], fov: 50 }} >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 1, 1]} intensity={2} />
                <Suspense fallback={<Html center>Loading...</Html>}>
                  <SoftwareModel scale={lapSize.scale} position={lapSize.position} />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2 + 0.1}
                  minPolarAngle={Math.PI / 2 - 0.1}
                  enableRotate={true}
                  rotateSpeed={0.5}
                  minAzimuthAngle={-Math.PI / 120} // Restrict to slightly left
                  maxAzimuthAngle={Math.PI / 3}  // Restrict to slightly right
                />
              </Canvas>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Offers2;
