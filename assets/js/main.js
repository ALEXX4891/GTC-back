import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const sizes = {
  width: 526,
  height: 350
}


const canvas = document.querySelector('.webgl');

function init(path) {
  const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100 );
  camera.position.set( 6, 1, 4 );
  canvas.width = sizes.width;
  canvas.height = sizes.height;
  
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer(
    { canvas: canvas },
    { alpha: true },
    { antialias: true },
  );

  renderer.setSize( sizes.width, sizes.height );
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.gammaOutput = true;

  const loader = new GLTFLoader();
  loader.load( path, function ( glb ) {
    scene.add( glb.scene );
  }, function ( xhr ) {
    // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  }, function ( error ) {
    console.error( error );
  } );
  const light = new THREE.PointLight( 0xffffff, 10 );
  
  const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
  
  camera.add( light );
  camera.add( directionalLight );
  scene.background = new THREE.Color( 0xDDDDDD );

  const controls = new OrbitControls( camera, canvas );
  // controls1.enableDamping = true;
  scene.add( camera );

  function animate() {
    controls.update();  
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }

  animate();
}