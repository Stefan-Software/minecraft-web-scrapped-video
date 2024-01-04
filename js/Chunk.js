/**
 * Three.JS
 */
import * as THREE from 'three';
/**
 * Creates a top chunk mesh based on the provided parameters.
 *
 * @param x - The x-coordinate of the chunk.
 * @param y - The y-coordinate of the chunk.
 * @param z - The z-coordinate of the chunk.
 * @param data - The data representing the cubes in the chunk.
 * @param size - The size of the chunk.
 * @param height - The height of the chunk.
 * @param wireframe - Optional. Specifies whether to render the chunk in wireframe mode. Default is false.
 * @returns The created chunk mesh.
 */
export default function createTopChunk(x, y, z, data, size, height, wireframe = false) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const topTexture = new THREE.TextureLoader().load(`data/textures/grass/grass-top.png`);
    const sideTexture = new THREE.TextureLoader().load(`data/textures/grass/grass-side.png`);
    const bottomTexture = new THREE.TextureLoader().load(`data/textures/grass/grass-bottom.png`);
    /**
     * Create the materials
     */
    const materials = [
        /**
         * Front
         */
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }),
        /**
         * Back
         */
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }),
        /**
         * Top
         */
        new THREE.MeshBasicMaterial({ map: topTexture, wireframe: wireframe }),
        /**
         * Bottom
         */
        new THREE.MeshBasicMaterial({ map: bottomTexture, wireframe: wireframe }),
        /**
         * Left
         */
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe }),
        /**
         * Right
         */
        new THREE.MeshBasicMaterial({ map: sideTexture, wireframe: wireframe })
    ];
    // Create an InstancedMesh with the cube geometry and material, and the total number of cubes
    const chunk = new THREE.InstancedMesh(geometry, materials, size * size * height);
    // Initialize an index counter
    let i = 0;
    // Iterate over the x-axis of the chunk
    for (let dx = 0; dx < size; dx++) {
        // Iterate over the y-axis (height) of the chunk
        for (let dy = 0; dy < height; dy++) {
            // Iterate over the z-axis of the chunk
            for (let dz = 0; dz < size; dz++) {
                // Get the block type at the current position in the chunk data
                const instance = data[dx][dy][dz];
                // If the block type is not null (i.e., there is a block at this position)
                if (instance !== null) {
                    // Create a transformation matrix for the block
                    // The matrix positions the block at (x + dx, y + dy, z + dz) in the world
                    const matrix = new THREE.Matrix4().makeTranslation(x + dx, y + dy, z + dz);
                    // Set the transformation matrix for the i-th instance in the chunk
                    // This positions and orients the block in the world
                    chunk.setMatrixAt(i++, matrix);
                }
            }
        }
    }
    return chunk;
}
