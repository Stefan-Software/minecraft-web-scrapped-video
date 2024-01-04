import * as THREE from 'three';
import { mergeBufferGeometries } from 'three-buffer-geometry-utils';
export default function createCube(x, y, z, data, type, wireframe = false) {
    const geometries = [];
    // Check the six neighboring blocks
    if (!blockExists(x - 1, y, z, data))
        geometries.push(createFace('left', type));
    if (!blockExists(x + 1, y, z, data))
        geometries.push(createFace('right', type));
    if (!blockExists(x, y - 1, z, data))
        geometries.push(createFace('bottom', type));
    if (!blockExists(x, y + 1, z, data))
        geometries.push(createFace('top', type));
    if (!blockExists(x, y, z - 1, data))
        geometries.push(createFace('front', type));
    if (!blockExists(x, y, z + 1, data))
        geometries.push(createFace('back', type));
    const geometry = mergeBufferGeometries(geometries);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: wireframe });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    return cube;
}
function blockExists(x, y, z, data) {
    return (data[x] && data[x][y] && data[x][y][z] === 1);
}
function createFace(face, type) {
    const textureLoader = new THREE.TextureLoader();
    const planeGeometry = new THREE.PlaneGeometry(1, 1);
    const geometry = new THREE.BufferGeometry().fromGeometry(planeGeometry);
    const texturePath = `data/textures/${type}/${type}-${face}.png`;
    const texture = textureLoader.load(texturePath);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    // Rotate and position the plane to match the corresponding face of the cube
    switch (face) {
        case 'left':
            plane.rotateY(Math.PI / 2);
            plane.position.x = -0.5;
            break;
        case 'right':
            plane.rotateY(-Math.PI / 2);
            plane.position.x = 0.5;
            break;
        case 'bottom':
            plane.rotateX(-Math.PI / 2);
            plane.position.y = -0.5;
            break;
        case 'top':
            plane.rotateX(Math.PI / 2);
            plane.position.y = 0.5;
            break;
        case 'front':
            plane.position.z = -0.5;
            break;
        case 'back':
            plane.rotateY(Math.PI);
            plane.position.z = 0.5;
            break;
    }
    return plane.geometry;
}
