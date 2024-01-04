/**
 * Three.JS + Cannon.JS modules
 */
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import * as THREE from 'three'
import * as CANNON from 'cannon'

/**
 * Custom Functions
 */
import createTopChunk from './chunk'

/**
 * Create a scene, camera and renderer
 */
const scene = new THREE.Scene()

/**
 * Create the camera
 */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

/**
 * Create the renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

/**
 * Create The First Grass Chunk
 */
const chunkSize: number = 128
const chunkHeight: number = 1
const showWireframe: boolean = true
const chunkData = new Array(chunkSize).fill(0).map(() => new Array(chunkHeight).fill(0).map(() => new Array(chunkSize).fill('grass')))
const worldChunk = createTopChunk(0, 0, 0, chunkData, chunkSize, chunkHeight, showWireframe)
scene.add(worldChunk)

/**
 * Spawn in the middle of the map
 */
camera.position.y = 2.5
camera.position.x = chunkSize / 2
camera.position.z = chunkSize / 2

/**
 * Resize the renderer when the window is resized
 */
window.addEventListener('resize', () => {
    /**
     * Unlock the camera controls to resize the renderer
     */
    controls.unlock()

    /**
     * Resize the renderer
     */
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)

    /**
     * Lock the camera controls again
     */
    setTimeout(() => { controls.lock() }, 100)
    // window.dispatchEvent(new Event('resize'))
})

/**
 * Create the camera mouse control
 */
const controls = new PointerLockControls(camera, document.body); export default controls

// TODO REORGANIZE THIS
document.addEventListener('click', function () { controls.lock() }, false)

/**
 * Unlock the camera controls when the escape key is pressed
 */
document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { controls.unlock(); document.body.style.cursor = 'auto' } }, false)

/**
 * Code to handle the mouse movement, and update the camera,
 * and the position of the player
 */
const speed = 0.1
const direction = new THREE.Vector3()

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            direction.z = -1
            break
        case 's':
            direction.z = 1
            break
        case 'a':
            direction.x = -1
            break
        case 'd':
            direction.x = 1
            break
    }
})

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
        case 's':
            direction.z = 0
            break
        case 'a':
        case 'd':
            direction.x = 0
            break
    }
});


/**
 * Animate the scene, entry point for the game loop
 */
(function animate() {
    requestAnimationFrame(animate)

    // Update the camera
    camera.updateProjectionMatrix()

    // Update the camera position
    if (controls.isLocked === true) {
        camera.translateX(speed * direction.x)
        camera.translateZ(speed * direction.z)
    }

    renderer.render(scene, camera)
})()