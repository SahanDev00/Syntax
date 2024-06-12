import React, { useState, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model({ modelPath, scale = [1, 1, 1], autoRotate = true, opacity = 1 }) {
  const [error, setError] = useState(null);
  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.onError = (err) => {
      setError(err);
      console.error('Error loading model:', err);
    };
  });

  const modelRef = useRef();

  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.material) {
          child.material.opacity = opacity;
          child.material.transparent = opacity < 0.8;
        }
      });
    }
  }, [gltf, opacity]);

  useFrame(() => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += 0.008; // Adjust rotation speed as needed
      modelRef.current.rotation.x -= 0.008; // Adjust rotation speed as needed
    }
  });

  if (error) {
    return <div>Error loading model: {error.message}</div>;
  }

  return <primitive object={gltf.scene} ref={modelRef} scale={scale} />;
}

export default Model;
