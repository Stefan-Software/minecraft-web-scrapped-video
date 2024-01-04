import scene from './main';
import createCube from './createCube';
export default function createChunk(size, type, wireframe = false) {
    // Create a data array that represents the blocks in the chunk
    const data = new Array(size).fill(0).map(() => new Array(1).fill(0).map(() => new Array(size).fill(1)));
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < 1; y++) {
            for (let z = 0; z < size; z++) {
                // Pass the correct arguments to the createCube function
                const cube = createCube(x, y, z, data, type, wireframe);
                scene.add(cube);
            }
        }
    }
}
