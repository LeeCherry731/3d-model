import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  ReactElement,
} from "react";
import Layout from "../components/Layout";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
// import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import * as THREE from "three";

interface Props {}

// interface hoveredType {
//   laces: string;
//   mesh: string;
//   caps: string;
//   inner: string;
//   sole: string;
//   stripes: string;
//   band: string;
//   patch: string;
// }

// interface colorMash {
//   current: string;
//   items: hoveredType;
// }

// const state = proxy<colorMash>({
//   current: "mesh",
//   items: {
//     laces: "#ffff00",
//     mesh: "#ff00ff",
//     caps: "#ffffff",
//     inner: "#ffffff",
//     sole: "#ffffff",
//     stripes: "#ffffff",
//     band: "#00ffff",
//     patch: "#ffffff",
//   },
// });

function Model(props: JSX.IntrinsicElements["group"]) {
  const ref = useRef<any>();
  // const snap = useSnapshot(state);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  // const [hovered, set] = useState<any>();
  // useEffect(() => {
  //   const cursor: string = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
  //   const auto: string = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
  //   document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
  //     hovered ? cursor : auto
  //   )}'), auto`;
  // }, [hovered]);

  // const group = useRef<THREE.Group>();
  const { nodes } = useGLTF("/iphone.gltf") as any;
  return (
    <group
      ref={ref}
      dispose={null}
      // onPointerOver={(e: any) => (
      //   e.stopPropagation(), set(e.object.material.name)
      // )}
      // onPointerOut={(e: any) => e.intersections.length === 0 && set(null)}
      // onPointerMissed={() => state.current}
      // onClick={(e: any) => (
      //   e.stopPropagation(), (state.current = e.object.material.name)
      // )}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.54}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.1, 1.45, -0.26]} scale={0.04}>
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_4.geometry}
              material={nodes.Object_4.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_5.geometry}
              material={nodes.Object_5.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_6.geometry}
              material={nodes.Object_6.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_7.geometry}
              material={nodes.Object_7.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_8.geometry}
              material={nodes.Object_8.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_9.geometry}
              material={nodes.Object_9.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_10.geometry}
              material={nodes.Object_10.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_11.geometry}
              material={nodes.Object_11.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_12.geometry}
              material={nodes.Object_12.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_13.geometry}
              material={nodes.Object_13.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_14.geometry}
              material={nodes.Object_14.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_15.geometry}
              material={nodes.Object_15.material}
            />
          </group>
          <group
            position={[-0.14, 1.45, 1.55]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.04, 0.04, 0.04]}
          >
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_17.geometry}
              material={nodes.Object_17.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_18.geometry}
              material={nodes.Object_18.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_19.geometry}
              material={nodes.Object_19.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_20.geometry}
              material={nodes.Object_20.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_21.geometry}
              material={nodes.Object_21.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_22.geometry}
              material={nodes.Object_22.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_23.geometry}
              material={nodes.Object_23.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_24.geometry}
              material={nodes.Object_24.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_25.geometry}
              material={nodes.Object_25.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_26.geometry}
              material={nodes.Object_26.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_27.geometry}
              material={nodes.Object_27.material}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Object_28.geometry}
              material={nodes.Object_28.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// function Picker() {
//   const snap = useSnapshot<colorMash>(state);

//   let snapCurrent: string = snap.current;

//   // if (snap.current === null) {
//   //   snapCurrent = "Band"

//   // }

//   return (
//     <div style={{ display: snap.current ? "block" : "none" }}>
//       {/* <HexColorPicker
//         className="picker"
//         color={snap.items[snapCurrent]}
//         onChange={(color) => (state.items[snap.current] = color)}
//       /> */}
//       <h1>{snap.current}</h1>
//     </div>
//   );
// }

export default function Home({}: Props): ReactElement {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-base font-body h-screen">
        <Suspense
          fallback={
            <div className="text-9xl flex justify-center item-center">
              Loading...
            </div>
          }
        >
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 4], fov: 50 }}
          >
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="city" />
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -0.8, 0]}
                opacity={0.25}
                width={10}
                height={10}
                blur={1.5}
                far={0.8}
              />
            </Suspense>
            <OrbitControls
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
          {/* <Picker /> */}
        </Suspense>
      </div>
    </Layout>
  );
}
