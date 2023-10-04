import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import * as lilGui from 'lil-gui';
import gsap from 'gsap';


// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const aspectRatio = sizes.width / sizes.height;


// Texture
const textureLoader = new THREE.TextureLoader()
const worldTexture = textureLoader.load('./textures/world_map.png')


// Scene
const scene = new THREE.Scene();


// // AxesHelper
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)


// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.position.z = 6

scene.add(ambientLight, directionalLight)

// Camera
const camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);
camera.position.z = 4;
scene.add(camera)

// Objects
const sphereGeometry = new THREE.SphereGeometry(1, 64, 64)
const material = new THREE.MeshStandardMaterial()
material.map = worldTexture

const earthGlobe = new THREE.Mesh(sphereGeometry, material);
earthGlobe.rotation.y = - (Math.PI * 0.2)
scene.add(earthGlobe)


////////////////////////////////////
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
const points = [];
points.push( new THREE.Vector3( 0.3, 0.1, 1 ) );
points.push( new THREE.Vector3( 0.05, 0.05, 1 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, lineMaterial );

const pointMaterial = new THREE.MeshBasicMaterial({color: 0x000000})
const pointGeometry = new THREE.SphereGeometry(0.003, 32, 32);
const point1 = new THREE.Mesh(pointGeometry, pointMaterial)
point1.position.set(0.3, 0.1, 1)
const point2 = new THREE.Mesh(pointGeometry, pointMaterial)
point2.position.set(0.05, 0.05, 1)

// scene.add( line );
///////////////////////////////////

// Labels
const labelsRenderer = new CSS2DRenderer()
labelsRenderer.setSize(sizes.width, sizes.height)
labelsRenderer.domElement.style.position = 'absolute'
labelsRenderer.domElement.style.top = '0px'
labelsRenderer.domElement.style.left = '0px'
labelsRenderer.domElement.style.pointerEvents = 'none'
document.body.appendChild(labelsRenderer.domElement)

const label1 = document.createElement('p')
label1.textContent = 'Boby Peak'
label1.style.fontSize = 'small'
label1.style.fontFamily = 'monospace'
const label1Object = new CSS2DObject(label1)
label1Object.position.set(0.3, 0.12, 1)

const label2 = document.createElement('p')
label2.textContent = 'JHB'
label2.style.fontSize = 'small'
label2.style.fontFamily = 'monospace'
const label2Object = new CSS2DObject(label2)
label2Object.position.set(0.05, 0.07, 1)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);



window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    labelsRenderer.setSize(sizes.width, sizes.height)
})


// Animation
const button = document.querySelector('button.animateButton')

button.addEventListener('click', () => {
    gsap.to(camera.position, {z: 1.5, duration: 4, delay: 0})
    gsap.to(earthGlobe.rotation, {y: 4.8, x: -0.5, duration: 5})

    setInterval(() => {
        scene.add(line, point1, point2, label1Object, label2Object)

        gsap.to(camera.position, {z: 2, duration:1, delay: 0.2})
    }, 5000)
})


const tick = () =>
{
    // Update controls
    // controls.update()

    // Render
    labelsRenderer.render(scene, camera)

    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


// debug
const gui = new lilGui.GUI();


// gui.add(ambientLight, 'intensity').min(0).max(10).step(0.001)
// gui.add(point1.position, 'z').min(-5).max(5).step(0.0001)
