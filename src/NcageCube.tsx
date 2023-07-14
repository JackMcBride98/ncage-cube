import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame, ThreeElements, useLoader } from '@react-three/fiber';
import React from 'react';
import cage1 from './assets/cage1.jpg';
import cage2 from './assets/cage2.jpg';
import cage3 from './assets/cage3.jpg';
import cage4 from './assets/cage4.jpg';
import cage5 from './assets/cage5.jpg';
import cage6 from './assets/cage6.jpg';

export type NCageCubeProps = {
  message?: string;
  cubeScale?: number;
  cubeScaleDelta?: number;
  appear: boolean;
} & ThreeElements['mesh'];

export const NCageCube = (props: NCageCubeProps) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    switch (Math.round(Math.random() * 2)) {
      case 0:
        meshRef.current.rotation.y += delta;
        meshRef.current.translateY(delta);
        break;
      case 1:
        meshRef.current.rotation.x += delta;
        meshRef.current.translateX(delta);
        break;
      case 2:
        meshRef.current.rotation.z += delta;
        meshRef.current.translateZ(delta);
        break;
      case 3:
        meshRef.current.rotation.y -= delta;
        meshRef.current.translateY(-delta);
        break;
      case 4:
        meshRef.current.rotation.x -= delta;
        meshRef.current.translateX(-delta);
        break;
      case 5:
        meshRef.current.rotation.z -= delta;
        meshRef.current.translateZ(-delta);
        break;
      default:
    }
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.translateX(delta);
    meshRef.current.rotation.z += delta * 0.25;
    meshRef.current.scale.set(
      (meshRef.current.scale.x + delta / 1000) * (props.cubeScaleDelta || 1),
      (meshRef.current.scale.y + delta / 1000) * (props.cubeScaleDelta || 1),
      (meshRef.current.scale.z + delta / 1000) * (props.cubeScaleDelta || 1)
    );
  });

  const map = useLoader(THREE.TextureLoader, cage1);
  const map2 = useLoader(THREE.TextureLoader, cage2);
  const map3 = useLoader(THREE.TextureLoader, cage3);
  const map4 = useLoader(THREE.TextureLoader, cage4);
  const map5 = useLoader(THREE.TextureLoader, cage5);
  const map6 = useLoader(THREE.TextureLoader, cage6);

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={props.cubeScale}
      visible={props.appear}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material-0" map={map} />
      <meshBasicMaterial attach="material-1" map={map2} />
      <meshBasicMaterial attach="material-2" map={map3} />
      <meshBasicMaterial attach="material-3" map={map4} />
      <meshBasicMaterial attach="material-4" map={map5} />
      <meshBasicMaterial attach="material-5" map={map6} />
    </mesh>
  );
};
