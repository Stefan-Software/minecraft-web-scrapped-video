/**
 * Three.JS
 */
import * as THREE from 'three';
/**
 * Detects collisions between a player hitbox and a chunk.
 *
 * @param playerHitbox - The player's hitbox.
 * @param chunk - The chunk to check for collisions.
 */
export default function detectCollision(playerHitbox, chunk) {
    const matrix = new THREE.Matrix4();
    const box = new THREE.Box3();
    const size = new THREE.Vector3(1, 1, 1);
    const position = new THREE.Vector3();
    const rotation = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    for (let i = 0; i < chunk.count; i++) {
        chunk.getMatrixAt(i, matrix);
        matrix.decompose(position, rotation, scale);
        box.setFromCenterAndSize(position, size);
        if (playerHitbox.intersectsBox(box)) {
            return true;
        }
    }
    return false;
}
