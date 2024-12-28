import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const sizes = {
  // width: 526,
  // height: 330
  width: window.innerWidth,
  height: window.innerHeight
}

const canvas = document.querySelector('.webgl1');
const path = '/assets/img/open_type_small.glb';

initThree(path);

function initThree(path) {
  const camera = new THREE.PerspectiveCamera( 60, sizes.width / sizes.height, 0.1, 100 );
  camera.position.set( 4, 1, 4 );
  // console.log(sizes.width);
  // console.log(sizes.height);
  canvas.width = sizes.width;
  canvas.height = sizes.height;
  
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer(
    { canvas: canvas },
    { alpha: true },
    { antialiasing: true },
  );

  
  renderer.setSize( sizes.width, sizes.height);
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

  // const axesHelper = new THREE.AxesHelper(3);
  // scene.add( axesHelper );

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