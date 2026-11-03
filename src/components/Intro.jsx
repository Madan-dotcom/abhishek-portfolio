import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

/* =========================================
   CAMERA BUTTONS
========================================= */

function CameraButton({ position, label }) {
   return (
      <group position={position}>
         <mesh>
            <cylinderGeometry args={[0.105, 0.105, 0.055, 32]} />
            <meshStandardMaterial color='#171717' metalness={0.85} roughness={0.28} />
         </mesh>

         <Text position={[0, 0, 0.04]} fontSize={0.045} color='#d8c9a4' anchorX='center' anchorY='middle'>
            {label}
         </Text>
      </group>
   );
}

/* =========================================
   CAMERA CONTROL DIAL + PLAY BUTTON
========================================= */

function CameraDial({ position, play, isPlaying, isPaused }) {
   return (
      <group position={position}>
         <mesh>
            <cylinderGeometry args={[0.31, 0.31, 0.11, 64]} />
            <meshStandardMaterial color='#292929' metalness={0.9} roughness={0.3} />
         </mesh>

         <mesh position={[0, 0.061, 0]}>
            <cylinderGeometry args={[0.245, 0.245, 0.018, 64]} />
            <meshStandardMaterial color='#090909' metalness={0.8} roughness={0.35} />
         </mesh>

         {Array.from({ length: 24 }).map((_, i) => (
            <mesh key={i} position={[Math.sin((i / 24) * Math.PI * 2) * 0.275, 0.065, Math.cos((i / 24) * Math.PI * 2) * 0.275]}>
               <boxGeometry args={[0.025, 0.025, 0.055]} />
               <meshStandardMaterial color='#9c8c6c' metalness={0.8} />
            </mesh>
         ))}

         <mesh position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.155, 0.155, 0.025, 48]} />
            <meshStandardMaterial color='#171717' metalness={0.9} roughness={0.25} />
         </mesh>

         <Html position={[0, 0.11, 0]} transform center distanceFactor={5} style={{ pointerEvents: "auto" }}>
            <button
               type='button'
               onClick={play}
               aria-label={isPlaying && !isPaused ? "Pause intro" : "Play intro"}
               style={{
                  width: "39px",
                  height: "39px",
                  borderRadius: "50%",
                  border: "1px solid rgba(225,185,102,.9)",
                  background: "rgba(7,7,7,.95)",
                  color: "#e5bd70",
                  fontSize: "17px",
                  cursor: "pointer",
                  boxShadow: "0 0 15px rgba(220,170,70,.35)",
               }}
            >
               {isPlaying && !isPaused ? "Ⅱ" : "▶"}
            </button>
         </Html>
      </group>
   );
}

/* =========================================
   OPTICAL LENS ELEMENTS
========================================= */

function LensElement({ z, radius, thickness, color, rotationSpeed = 0 }) {
   const ref = useRef();

   useFrame((_, delta) => {
      if (ref.current) {
         ref.current.rotation.z += delta * rotationSpeed;
      }
   });

   return (
      <group ref={ref} position={[0, 0, z]}>
         <mesh>
            <cylinderGeometry args={[radius, radius, thickness, 64]} />

            <meshPhysicalMaterial
               color={color}
               metalness={0.45}
               roughness={0.08}
               transmission={0.75}
               thickness={0.8}
               ior={1.48}
               transparent
               opacity={0.75}
               clearcoat={1}
               clearcoatRoughness={0.05}
            />
         </mesh>

         <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius * 0.96, 0.025, 12, 80]} />

            <meshStandardMaterial color='#c49a51' metalness={0.95} roughness={0.2} />
         </mesh>
      </group>
   );
}

/* =========================================
   CAMERA APERTURE
========================================= */

function Aperture({ progress }) {
   const ref = useRef();

   useFrame(() => {
      if (ref.current) {
         ref.current.scale.setScalar(1 + progress * 0.35);
         ref.current.rotation.z = progress * 0.6;
      }
   });

   return (
      <group ref={ref} position={[0, 0, 1.02]}>
         {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={i} rotation={[0, 0, (i / 8) * Math.PI * 2]} position={[0, 0, i * 0.001]}>
               <shapeGeometry
                  args={[
                     (() => {
                        const shape = new THREE.Shape();

                        shape.moveTo(0, 0);
                        shape.lineTo(0.52, 0.05);
                        shape.lineTo(0.25, 0.5);
                        shape.lineTo(-0.08, 0.35);
                        shape.closePath();

                        return shape;
                     })(),
                  ]}
               />

               <meshStandardMaterial color='#a88a56' metalness={0.85} roughness={0.25} side={THREE.DoubleSide} />
            </mesh>
         ))}

         <mesh position={[0, 0, 0.02]}>
            <circleGeometry args={[0.23, 64]} />
            <meshBasicMaterial color='#020509' />
         </mesh>
      </group>
   );
}

/* =========================================
   MAIN 3D CAMERA
========================================= */

function CameraModel({ isPlaying, isPaused, elapsed, setElapsed, onComplete, onPlay }) {
   const camera = useRef();
   const lens = useRef();
   const light = useRef();
   const completed = useRef(false);

   const progress = THREE.MathUtils.clamp((elapsed - 2.5) / 4, 0, 1);

   useFrame((state, delta) => {
      if (isPlaying && !isPaused && !completed.current) {
         const next = elapsed + delta;

         setElapsed(next);

         if (next >= 7) {
            completed.current = true;
            onComplete();
         }
      }

      if (!camera.current) return;

      if (!isPlaying) {
         camera.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.045;

         return;
      }

      /* Rear camera rotates towards the front */

      const rotationProgress = THREE.MathUtils.clamp(elapsed / 2.5, 0, 1);

      camera.current.rotation.y = THREE.MathUtils.lerp(Math.PI, 0, THREE.MathUtils.smoothstep(rotationProgress, 0, 1));

      /* Camera moves towards viewer */

      camera.current.position.z = progress * 1.2;

      /* Lens expansion */

      if (lens.current) {
         lens.current.scale.setScalar(1 + progress * 1.4);
      }

      /* Golden light intensifies */

      if (light.current) {
         light.current.intensity = 2 + progress * 9;
      }

      camera.current.scale.setScalar(1 + progress * 0.18);
   });

   return (
      <>
         <group ref={camera} position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
            {/* MAIN CAMERA BODY */}

            <RoundedBox args={[3.6, 2.05, 0.72]} radius={0.2} smoothness={6}>
               <meshStandardMaterial color='#101010' metalness={0.72} roughness={0.3} />
            </RoundedBox>

            {/* TOP CAMERA HOUSING */}

            <RoundedBox args={[1.25, 0.48, 0.78]} radius={0.12} position={[0, 1.15, 0]}>
               <meshStandardMaterial color='#191919' metalness={0.8} />
            </RoundedBox>

            {/* VIEWFINDER */}

            <RoundedBox args={[1.05, 0.75, 0.42]} radius={0.12} position={[0, 0.83, -0.46]}>
               <meshStandardMaterial color='#090909' metalness={0.85} roughness={0.2} />
            </RoundedBox>

            {/* FRONT LENS */}

            <group position={[0, 0, 0.53]} ref={lens}>
               <mesh>
                  <cylinderGeometry args={[0.82, 0.9, 0.75, 64]} />
                  <meshStandardMaterial color='#111111' metalness={0.95} roughness={0.22} />
               </mesh>

               <mesh position={[0, 0, 0.4]}>
                  <cylinderGeometry args={[0.72, 0.72, 0.1, 64]} />
                  <meshStandardMaterial color='#080d13' metalness={0.9} roughness={0.15} />
               </mesh>

               <group rotation={[Math.PI / 2, 0, 0]}>
                  <mesh>
                     <torusGeometry args={[0.76, 0.045, 12, 80]} />
                     <meshStandardMaterial color='#b18a4b' metalness={0.95} roughness={0.2} />
                  </mesh>
               </group>

               <LensElement z={0.48} radius={0.61} thickness={0.035} color='#526a7c' rotationSpeed={0.08} />

               <LensElement z={0.63} radius={0.49} thickness={0.035} color='#8295a0' rotationSpeed={-0.12} />

               <LensElement z={0.78} radius={0.35} thickness={0.03} color='#9e7950' rotationSpeed={0.18} />

               <Aperture progress={progress} />
            </group>

            {/* REAR LCD */}

            <mesh position={[0, 0, -0.38]}>
               <boxGeometry args={[2.35, 1.35, 0.025]} />
               <meshStandardMaterial color='#080808' emissive='#8e6a32' emissiveIntensity={0.12} />
            </mesh>

            {/* LCD CONTENT */}

            <group position={[0, 0, -0.4]}>
               <Text position={[0, 0.36, 0]} fontSize={0.18} color='#d6b66b' anchorX='center'>
                  ABHISHEK
               </Text>

               <Text position={[0, 0.08, 0]} fontSize={0.09} color='#e9dfc8' anchorX='center'>
                  VIDEO EDITOR
               </Text>

               <Text position={[0, -0.28, 0]} fontSize={0.09} color='#d6b66b' anchorX='center'>
                  VISUAL STORIES
               </Text>
            </group>

            {/* REAR CONTROL DIAL */}

            <CameraDial position={[1.25, -0.45, -0.43]} play={onPlay} isPlaying={isPlaying} isPaused={isPaused} />

            {/* CAMERA BUTTONS */}

            <CameraButton position={[-1.3, 0.55, -0.4]} label='MENU' />

            <CameraButton position={[1.3, 0.7, -0.4]} label='AF' />

            <CameraButton position={[1.3, -0.9, -0.4]} label='INFO' />

            {/* CAMERA GRIP */}

            <RoundedBox args={[0.48, 1.65, 0.7]} radius={0.14} position={[1.55, 0, 0]}>
               <meshStandardMaterial color='#080808' roughness={0.8} metalness={0.3} />
            </RoundedBox>

            {/* TOP CONTROL DIALS */}

            {[-0.85, 0.8].map((x) => (
               <mesh key={x} position={[x, 1.05, 0]}>
                  <cylinderGeometry args={[0.22, 0.22, 0.16, 32]} />
                  <meshStandardMaterial color='#33302b' metalness={0.95} roughness={0.25} />
               </mesh>
            ))}
         </group>

         {/* GOLD LIGHT */}

         <pointLight ref={light} position={[0, 0, 3]} color='#d9a74e' intensity={2} distance={9} />
      </>
   );
}

/* =========================================
   FLOATING DUST PARTICLES
========================================= */

function Dust() {
   const points = useRef();

   const [particles] = useState(() =>
      Array.from({ length: 300 }, () => [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 8]),
   );

   useFrame((state) => {
      if (points.current) {
         points.current.rotation.y = state.clock.elapsedTime * 0.025;
      }
   });

   return (
      <points ref={points}>
         <bufferGeometry>
            <bufferAttribute attach='attributes-position' args={[new Float32Array(particles.flat()), 3]} />
         </bufferGeometry>

         <pointsMaterial color='#d6b66b' size={0.025} transparent opacity={0.65} />
      </points>
   );
}

/* =========================================
   INTRO COMPONENT
========================================= */

export default function Intro({ onComplete }) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [isPaused, setIsPaused] = useState(false);
   const [elapsed, setElapsed] = useState(0);
   const [finished, setFinished] = useState(false);

   if (finished) return null;

   /* PLAY / PAUSE */

   const handlePlay = () => {
      if (!isPlaying) {
         setIsPlaying(true);
         setIsPaused(false);
         setElapsed(0);
      } else {
         setIsPaused((value) => !value);
      }
   };

   /* COMPLETE INTRO */

   const completeIntro = () => {
      setFinished(true);

      try {
         sessionStorage.setItem("abhishekIntroSeen", "true");
      } catch {
         // Ignore storage errors.
      }

      onComplete?.();
   };

   return (
      <section className='fixed inset-0 z-[9999] overflow-hidden bg-[#050505]'>
         {/* TOP LEFT BRANDING */}

         <div className='absolute left-6 top-7 z-10 sm:left-10'>
            <p className='font-serif text-lg text-white'>Abhishek</p>

            <p className='mt-2 font-mono text-[9px] tracking-widest text-white/40'>VIDEO EDITOR & VISUAL STORYTELLER</p>
         </div>

         {/* TOP RIGHT INFORMATION */}

         <div className='absolute right-8 top-8 z-10 hidden text-right font-mono text-[9px] tracking-widest text-white/40 sm:block'>
            <p>COMMERCIAL FILMS</p>
            <p className='mt-2'>VISUAL STORIES / 2026</p>
         </div>

         {/* 3D SCENE */}

         <Canvas camera={{ position: [0, 0, 7], fov: 35 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
            <color attach='background' args={["#050505"]} />

            <ambientLight intensity={0.75} />

            <spotLight position={[-4, 5, 6]} intensity={120} color='#e7c27c' angle={0.6} penumbra={1} />

            <pointLight position={[4, -2, -4]} intensity={35} color='#a87531' />

            <pointLight position={[0, 3, 4]} intensity={18} color='#ffffff' />

            <Dust />

            <CameraModel
               isPlaying={isPlaying}
               isPaused={isPaused}
               elapsed={elapsed}
               setElapsed={setElapsed}
               onComplete={completeIntro}
               onPlay={handlePlay}
            />
         </Canvas>

         {/* PLAY INSTRUCTION */}

         <div className='absolute bottom-24 left-1/2 z-20 -translate-x-1/2 text-center'>
            <p className='font-mono text-[9px] tracking-[0.3em] text-[#D6B66B]'>
               {!isPlaying ? "PRESS PLAY TO ENTER" : isPaused ? "PAUSED — PRESS TO RESUME" : "ENTERING THE LENS"}
            </p>

            {isPlaying && (
               <button
                  type='button'
                  onClick={handlePlay}
                  className='mt-3 border border-[#D6B66B]/50 px-4 py-2 font-mono text-[9px] tracking-widest text-[#D6B66B] transition hover:bg-[#D6B66B] hover:text-black'
               >
                  {isPaused ? "RESUME" : "PAUSE"}
               </button>
            )}
         </div>

         {/* BOTTOM INFORMATION */}

         <div className='absolute bottom-7 left-6 z-10 font-mono text-[9px] tracking-widest text-white/40 sm:left-10'>
            ABHISHEK / VISUAL STORIES
         </div>

         <div className='absolute bottom-7 right-6 z-10 font-mono text-[9px] text-white/40 sm:right-10'>© 2026</div>

         {/* VIGNETTE */}

         <div
            className='pointer-events-none absolute inset-0 z-10 opacity-20'
            style={{
               background: "radial-gradient(ellipse, transparent 35%, black 100%)",
            }}
         />
      </section>
   );
}
