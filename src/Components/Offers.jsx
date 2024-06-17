// Offers.js
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import WebModel from './WebModel';
import { Html, OrbitControls } from '@react-three/drei';

const Offers = () => {
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
    <div className='w-[90%] xl:w-[80%] mx-auto mt-32 dark:text-white'>
      <h1 className='text-4xl font-semibold text-white dark:text-gray-200 xl:text-5xl font-poppins'>WHAT WE OFFER!</h1>
        {/* offer one */}
        <div className='w-full h-[350px] xl:mt-9'>
          <div className='sm:grid sm:grid-cols-2 h-full w-full'>
            <div className=''>
              <Canvas className='sm:block hidden dark:opacity-85' id="canvas1" camera={{ position: [10, 10, 10], fov: 50 }} >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 1, 1]} intensity={2} />
                <Suspense fallback={<Html center>Loading...</Html>}>
                  <WebModel scale={lapSize.scale} position={lapSize.position} />
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
            <div>
              {/* Content for offer one */}
              <h1 className='mt-12 sm:mt-20 xl:mt-14 mb-4 sm:mb-8 font-semibold text-2xl  xl:mr-[5%] underline text-white dark:text-gray-300 xl:text-3xl font-poppins'>SOFTWARES</h1>
              <p className='text-xl xl:mr-[5%] text-white dark:text-gray-400 xl:text-2xl'>Harness the power of .NET technology for developing robust, scalable, and high-performance software solutions. Our expertise in .NET ensures your applications are secure, reliable, and capable of handling complex business processes efficiently.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Offers;
