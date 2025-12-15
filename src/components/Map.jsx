import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import "../styles/Map.css";

// 🌍 Earth component
// function Earth() {
//   const earthRef = useRef();
//   const texture = useLoader(
//     THREE.TextureLoader,
//     "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
//   );

//   return (
//     <mesh ref={earthRef} rotation={[0.3, 0, 0]}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} />
//     </mesh>
//   );
// }

// // ✨ Marker component (glowing location)
// function Marker({ position = [0.7, 0.2, 0.9] }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.02, 32, 32]} />
//       <meshStandardMaterial
//         emissive="#FFD700"
//         emissiveIntensity={3}
//         color="#FFD700"
//       />
//     </mesh>
//   );
// }

// // 🗺️ Main Section
// export default function MapSection() {
//   return (
//     <section className="map-section position-relative text-center py-5 bg-dark text-light">
//       <div className="container position-relative">
//         <h2 className="text-uppercase mb-4 text-warning">
//           Explore Our Global Presence
//         </h2>
//         <p className="text-secondary mb-5">
//           Discover our premium real estate projects across the globe.
//         </p>

//         <div className="map-container rounded-4 overflow-hidden mx-auto">
//           <Canvas
//             camera={{ position: [0, 0, 3], fov: 45 }}
//             style={{ height: "450px", width: "100%" }}
//           >
//             {/* Background stars */}
//             <Stars radius={100} depth={50} count={3000} factor={4} fade speed={2} />

//             {/* Lights */}
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[5, 3, 5]} intensity={1.2} />

//             {/* Earth + Marker */}
//             <Earth />
//             <Marker position={[0.7, 0.2, 0.9]} />

//             {/* Orbit Controls */}
//             <OrbitControls
//               enableZoom={false}
//               enablePan={false}
//               autoRotate
//               autoRotateSpeed={1}
//             />

//             {/* Overlay Button */}
//             <Html center position={[0, -1.4, 0]}>
//               <button className="btn btn-warning rounded-pill px-4 ">
//                 View on Map
//               </button>
//             </Html>
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function MapSection() {
    const locations = [
        {
            id: 1,
            type: "office",
            x: "55%", // horizontal position
            y: "62%", // vertical position
            link: "https://maps.app.goo.gl/GWwMPKaXD9ggUTXi6",
        },
        {
            id: 2,
            type: "project",
            x: "40%",
            y: "30%",
            link: "https://maps.app.goo.gl/JBjZXpBkJmC5JVc6A",
        },
        {
            id: 3,
            type: "project",
            x: "70%",
            y: "45%",
            link: "https://maps.app.goo.gl/JBjZXpBkJmC5JVc6A",
        },
        {
            id: 4,
            type: "project",
            x: "35%",
            y: "70%",
            link: "https://maps.app.goo.gl/JBjZXpBkJmC5JVc6A",
        },
    ];

    return (
        <section className="map-section">
            <div className="map-overlay">
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className={`map-pin ${loc.type}`}
                        style={{ left: loc.x, top: loc.y }}
                        onClick={() => window.open(loc.link, "_blank")}
                    >
                        {loc.type === "office" ? (
                            <i className="bi bi-building"></i>
                        ) : (
                            <i className="bi bi-geo-alt-fill"></i>
                        )}
                    </div>
                ))}
            </div>

            {/* Info Panel */}
            <div className="map-info">
                <h2 className="text-white mb-3">Our Locations</h2>
                <p>
                    Click on the glowing pins to explore our <strong>projects</strong> or locate our{" "}
                    <strong>head office</strong>.
                </p>
            </div>
        </section>
    );
}
