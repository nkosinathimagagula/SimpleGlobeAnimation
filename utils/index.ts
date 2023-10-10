import * as THREE from "three";

// export const getGlobeCoordinates = (latitude: number, longitude: number): GlobeCoordinates => {

//     return {
//         x: - (Math.sin(latitude) * Math.cos(longitude)),
//         y: - Math.cos(latitude),
//         z: Math.sin(latitude) * Math.sin(longitude)
//     }
// }


export const generateStars = (count: number, spread: number) => {
    const particleGeometry = new THREE.BufferGeometry()

    const positions = new Float32Array(count * 3)
    for (let i = 0; i <count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 4 * spread
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4 * spread
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4 * spread
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        color: "#ffffff",
    })

    return new THREE.Points(particleGeometry, particleMaterial)
}