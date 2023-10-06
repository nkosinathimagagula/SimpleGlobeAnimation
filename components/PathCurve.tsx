import * as THREE from "three";


const generatePath = (point1: Point, point2: Point): THREE.CatmullRomCurve3 => {
    const vector1 = new THREE.Vector3(point1.x, point1.y, point1.z)
    const vector2 = new THREE.Vector3(point2.x, point2.y, point2.z)
    let points = []

    for (let i = 0; i < 20; i++) {
        const point = new THREE.Vector3().lerpVectors(vector1, vector2, i/20)
        point.normalize()
        point.multiplyScalar(1 + Math.sin(Math.PI * (i/20)) * 0.01)
        
        points.push(point)
    }

    return new THREE.CatmullRomCurve3(points)
}


const PathCurve = (props: {point1: Point, point2: Point, show: boolean}) => {
  return (
    <mesh
        visible={props.show}
    >
        <tubeGeometry 
            args={[
                generatePath(props.point1, props.point2), 
                20, 
                0.0005, 
                10, 
                false
            ]}
        />
    </mesh>
  )
}

export default PathCurve
