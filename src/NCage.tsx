import { Canvas } from '@react-three/fiber';
import { NCageCube } from './NcageCube';
import { useEffect, useState } from 'react';
import React from 'react';

export type NCageProps = {
  initialCubeNumber?: number;
  cubeDelta?: number;
  initialCubeScale?: number;
  cubeScaleDelta?: number;
  appearPercentage?: number;
  percentageDelta?: number;
  startOpacity?: number;
  opacityDelta?: number;
  startIntervalMs?: number;
  intervalDeltaMs?: number;
  alwaysVisible?: boolean;
};

export const NCage = ({
  initialCubeNumber = 2,
  cubeDelta = 1,
  initialCubeScale = 0.5,
  cubeScaleDelta = 1.0005,
  appearPercentage = 1,
  percentageDelta = 1,
  startOpacity = 0,
  opacityDelta = 0.05,
  startIntervalMs = 200,
  intervalDeltaMs = 200,
  alwaysVisible = false,
}: NCageProps) => {
  const [appear, setAppear] = useState(false);
  const [opacity, setOpacity] = useState(startOpacity);
  const [intervalMs, setIntervalMs] = useState<number>(startIntervalMs);
  const [cubeNumber, setCubeNumber] = useState(initialCubeNumber);
  const [percentage, setPercentage] = useState(appearPercentage);

  useEffect(() => {
    setInterval(() => {
      const x = Math.random();
      if (x <= percentage / 100) {
        setAppear(true);
        setOpacity(o => o + opacityDelta);
        setIntervalMs(i => i + intervalDeltaMs);
        setCubeNumber(c => c + cubeDelta);
        setPercentage(p => p + percentageDelta);
      } else {
        setAppear(false);
      }
    }, intervalMs);
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        background: 'transparent',
        top: 0,
        left: 0,
        opacity: opacity,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {Array.from({ length: cubeNumber || 2 }).map((_, i) => (
        <NCageCube
          key={i}
          appear={alwaysVisible || appear}
          cubeScale={initialCubeScale}
          cubeScaleDelta={cubeScaleDelta}
          position={[
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
          ]}
        />
      ))}
    </Canvas>
  );
};
