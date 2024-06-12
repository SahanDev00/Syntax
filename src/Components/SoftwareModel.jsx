// WebModel.js
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import soft from "../Assets/software.glb"

function SoftwareModel({ scale, position }) {
    const { scene } = useGLTF(soft);
    const ref = useRef();

    useEffect(() => {
        ref.current.rotation.set(0, Math.PI / 2 - 0.3, 0);  // Adjust this value to face the model to the front
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y = Math.sin(t) * 0.1;
    });

    return <primitive ref={ref} object={scene} scale={scale} position={position} />;
}

useGLTF.preload(soft);

export default SoftwareModel;
