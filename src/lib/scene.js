import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const loader = new OBJLoader();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshPhysicalMaterial({
  color: 0xeb0029,
  roughness: 0.5,
  metalness: 1.0,
  reflectivity: 0.5,
  clearCoat: 0.5,
  clearCoatRoughness: 0.5,
  lights: true
});

loader.load(
	'/logobanorte.obj',
	function ( object ) {
		scene.add( object );

		var logo = scene.getObjectByName( "logo" );
		logo.rotateX(1.5);

		logo.material = material;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log( 'An error happened' );
	}
);

// loader.load(
// 	'/card.obj',
// 	function ( object ) {
// 		scene.add( object );

// 		var card = scene.getObjectByName( "card" );

// 		card.rotateX(45);
// 		card.rotateZ(1.5);
// 		card.position.set(-5, 5, -5);

// 		card.material = material;

// 		let card2 = object.clone()
// 		card2.name = "card2"

// 		card2.rotateX(60);
// 		card2.rotateZ(-0.5);
// 		card2.position.set(5, 5, -5);

// 		scene.add(card2);


// 	},
// 	function ( xhr ) {
// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// 	},
// 	function ( error ) {
// 		console.log( 'An error happened' );
// 	}
// );


const directionalLight = new THREE.DirectionalLight(0x9090aa);
directionalLight.position.set(-10, 0, 0).normalize();
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

let renderer;

const animate = () => {
	var logo = scene.getObjectByName( "logo" );

	requestAnimationFrame(animate);

	// logo.rotation.z = event.clientX/100;
	// logo.rotation.z += 0.01;
	renderer.render(scene, camera);

		console.log(event.clientX);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

const mm = (event) => {
	var logo = scene.getObjectByName( "logo" );
	var card = scene.getObjectByName( "card" );
	var card2 = scene.getObjectByName( "card2" );

	logo.rotation.z = 0.6 + event.clientX/3000;
	card.rotation.z = event.clientX/3000;
	card2.rotation.x = event.clientX/3000;

	// logo.rotation.z *= event.clientY/1000;
	// card.rotation.z *= event.clientY/800;
	// card2.rotation.z *= -event.clientY/800;
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });

	resize();
	animate();

};

window.addEventListener('resize', resize);

window.addEventListener('mousemove', mm);