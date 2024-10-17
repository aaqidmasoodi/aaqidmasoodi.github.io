// scene.js
function createScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.background = new THREE.Color(0x111111);

    // Create a galaxy effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 10000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
        colors[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 50;

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, camera, renderer, particles };
}

function animateScene({ scene, camera, renderer, particles }) {
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the galaxy for a dynamic effect
        particles.rotation.y += 0.001;
        
        renderer.render(scene, camera);
    }
    animate();
}
