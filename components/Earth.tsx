import { useRef, MutableRefObject, Dispatch, SetStateAction, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import * as THREE from "three";
import { TextureLoader } from "three";
import gsap, { Power2 } from "gsap";

import PathCurve from "./PathCurve";
import MapPointer from "./MapPointer";
import { coordinates } from "@/constants";
import { getGlobeCoordinates } from "@/utils";


const Earth = (props: {buttonClick: boolean, setButtonClick: Dispatch<SetStateAction<boolean>>}) => {
    const [showCurve, setShowCurve] = useState<boolean>(false)
    const [autoRotate, setAutoRotate] = useState<boolean>(true)

    const eathTexture = useLoader(TextureLoader, "/textures/earth/earth_map.jpg")
    const earthNormalTexture = useLoader(TextureLoader, "/textures/earth/earth_normal_map.jpg")

    const earthRef = useRef() as MutableRefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>

    const point1: Point = getGlobeCoordinates(coordinates[0].latitude, coordinates[0].longitude)
    const point2: Point = getGlobeCoordinates(coordinates[1].latitude, coordinates[1].longitude)

    useFrame((state) => {
        if (props.buttonClick) {
            setAutoRotate(false)
            props.setButtonClick(false)

            gsap.to(
                state.camera.position,
                {
                    x: 0,
                    y: 0,
                    z: 5,
                    duration: 3,
                    ease: Power2.easeInOut
                }
            )

            gsap.to(
                state.camera.position, 
                {
                    z: 1.15,
                    duration: 5,
                    delay: 3

                }
            )
            gsap.to(
                earthRef.current.rotation,
                {
                    y: -2,
                    x: -0.5,
                    duration:5,
                    delay:3
                }
            )
            
            setTimeout(() => {
                gsap.to(
                    state.camera.position,
                    {
                        z: 1.5,
                        duration: 3,
                        delay: 0.5
                    }
                )

                gsap.to(
                    earthRef.current.rotation,
                    {
                        x: - 0.1,
                        duration:3,
                        delay: 0.5
                    }
                )

                setShowCurve(true)
            }, 9000)
        }
    })

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight intensity={1.3} position={[1, 0.5, 6]} color={"#ffffff"} />
            <mesh
                ref={earthRef}
            >
                <Stars count={1000} radius={500} factor={10} fade={true} />
                <mesh>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial map={eathTexture} normalMap={earthNormalTexture} />                
                </mesh>
                
                <MapPointer 
                    point={point1}
                />

                <PathCurve 
                    point1={point1}
                    point2={point2}
                    show={showCurve}
                />
            </mesh>
            <OrbitControls enableRotate={false} autoRotate={autoRotate} autoRotateSpeed={0.8} />
        </>
    )
}

export default Earth
