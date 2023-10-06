import { useGLTF } from "@react-three/drei";
import * as THREE from "three";


const MapPointer = (props: {point: Point}) => {
    const mapPointer = useGLTF('/models/map_pointer/scene.gltf')

    return (
        <mesh 
            position={
                new THREE.Vector3(
                    props.point.x + 0.005, 
                    props.point.y, 
                    props.point.z
                )
            }
            rotation={[
                Math.PI * props.point.y,
                0,
                Math.PI * props.point.y
            ]}  
        >
            <primitive 
                object={mapPointer.scene}
                scale={0.003}
            />
        </mesh>
    )
}

export default MapPointer