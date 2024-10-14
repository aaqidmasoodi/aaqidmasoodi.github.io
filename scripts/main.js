// main.js
const { scene, camera, renderer, particles } = createScene();
document.getElementById('canvas-container').appendChild(renderer.domElement);
animateScene({ scene, camera, renderer, particles });
