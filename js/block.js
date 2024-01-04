"use strict";
/**
 * Three.JS
 */
// import * as THREE from "three"
/**
 * Types
 */
// import { cube } from "./types"
/* function createBlock(x: number, y: number, z: number, type: cube, wireframe: boolean = false) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)

    // Load the textures
    const topTexture = new THREE.TextureLoader().load(`data/textures/${type}/${type}-top.png`)
    const sideTexture = new THREE.TextureLoader().load(`data/textures/${type}/${type}-side.png`)
    const bottomTexture = new THREE.TextureLoader().load(`data/textures/${type}/${type}-bottom.png`)

    // Create the materials
    const materials = [
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }), // front
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }), // back
        new THREE.MeshBasicMaterial({ map: topTexture, wireframe: wireframe }), // top
        new THREE.MeshBasicMaterial({ map: bottomTexture, wireframe: wireframe }), // bottom
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }), // left
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }) // right
    ]

    const block = new THREE.Mesh(geometry, materials)
    block.position.x = x
    block.position.y = y
    block.position.z = z

    return block
} */ 
