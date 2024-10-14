// scripts/animation.js
export function addRotation(object, speed = 0.01) {
    object.rotation.x += speed;
    object.rotation.y += speed;
}
