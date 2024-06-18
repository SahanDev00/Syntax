import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const AiHead = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseX = (clientX / window.innerWidth) * 4 - 3;
      const mouseY = (clientY / window.innerHeight) * 2 - 1;

      // Adjust the target positions calculation
      // For horizontal movement, map mouseX from [-1, 1] to [-Math.PI / 4, Math.PI / 4]
      const targetX = mouseX * (Math.PI / 4);

      // For vertical movement, map mouseY from [-1, 1] to [-Math.PI / 6, Math.PI / 6]
      const targetY = mouseY * (Math.PI / 6);

      const currentRotation = modelRef.current.rotation;
      const currentX = currentRotation.x;
      const currentY = currentRotation.y;

      const newX = currentX + (targetY - currentX) * 1;
      const newY = currentY + (targetX - currentY) * 1;

      modelRef.current.rotation.x = newX;
      modelRef.current.rotation.y = newY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(1, 1, 1); // Adjust scale as needed
      modelRef.current.rotation.y = Math.PI / 2 + Math.PI / 4; // Rotate the model 45 degrees to the right initially
    }
  }, []);

  return <primitive object={gltf.scene} ref={modelRef} />;
};

export default AiHead;
