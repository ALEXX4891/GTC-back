import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const canvas = document.querySelector('.webgl2');
const path = '/assets/img/closed _type_small.glb';

initThree(path);

function initThree(path) {
  //   const camera = new THREE.PerspectiveCamera( 60, sizes.width / sizes.height, 0.1, 100 );
  //   camera.position.set( 4, 1, 4 );
  //   // console.log(sizes.width);
  //   // console.log(sizes.height);
  //   canvas.width = sizes.width;
  //   canvas.height = sizes.height;
    
  //   const scene = new THREE.Scene();
  
  //   const renderer = new THREE.WebGLRenderer(
  //     { canvas: canvas },
  //     { alpha: true },
  //     { antialiasing: true },
  //   );
  
    
  //   renderer.setSize( sizes.width, sizes.height);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   renderer.shadowMap.enabled = true;
  //   renderer.gammaOutput = true;
  
  //   const loader = new GLTFLoader();
  //   loader.load( path, function ( glb ) {
  //     scene.add( glb.scene );
  //   }, function ( xhr ) {
  //     // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  //   }, function ( error ) {
  //     console.error( error );
  //   } );
  //   // const light = new THREE.PointLight( 0xffffff, 10 );
    
  //   const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
    
  //   // camera.add( light );
  //   camera.add( directionalLight );
  //   scene.background = new THREE.Color( 0xDDDDDD );
  
  //   // const axesHelper = new THREE.AxesHelper(3);
  //   // scene.add( axesHelper );
  
  //   const controls = new OrbitControls( camera, canvas );
  //   // controls1.enableDamping = true;
  //   scene.add( camera );
  
  //   const composer = new EffectComposer( renderer );
  
  //   const renderPass = new RenderPass( scene, camera );
  //   composer.addPass( renderPass );
  
  //   // const effectFXAA = new ShaderPass( FXAAShader );
  //   // effectFXAA.uniforms[ 'resolution' ].value.x = 1 / ( window.innerWidth * 5000 );
  //   // effectFXAA.uniforms[ 'resolution' ].value.y = 1 / ( window.innerHeight * 5000 );
  //   // composer.addPass( effectFXAA ); 
  
  //   // FXAA для сглаживания
  // const fxaaPass = new ShaderPass(FXAAShader);
  // fxaaPass.material.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
  // composer.addPass(fxaaPass);
    
  
  //   function animate() {
  //     // Обновление позиции света на камере
  //     cameraLight.position.copy(camera.position);
  
  //     // Обновление OrbitControls
  //     controls.update();
  
  //     // Рендеринг сцены с постобработкой
  //     composer.render();
  
  //   }
  
  //   animate();
  
  
  
  // Камера
  // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const camera = new THREE.PerspectiveCamera( 60, sizes.width / sizes.height, 0.1, 100 );
  camera.position.set(4, 1, 4);
  camera.lookAt(0, 0, 0);
  canvas.width = sizes.width;
  canvas.height = sizes.height;
  
  // Сцена
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xDDDDDD );
  
  // const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
  // const pointerLight = new THREE.PointLight( 0xffffff, 1, 100 );
  
  // camera.add( directionalLight );
  // camera.add( pointerLight );
  
  
  
  // Рендерер с антиалиасингом и высоким DPI
  const renderer = new THREE.WebGLRenderer(
      { canvas: canvas },
      { alpha: true },
      { antialias: true },
      // antialias: true, // Включаем антиалиасинг
  );
  // renderer.setPixelRatio(window.devicePixelRatio); // Используем максимальное разрешение экрана
  // renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize( sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.outputEncoding = THREE.sRGBEncoding; // Для более точных цветов
  renderer.physicallyCorrectLights = true; // Физически корректное освещение
  renderer.shadowMap.enabled = true;
  renderer.gammaOutput = true;
  // document.body.appendChild(renderer.domElement);
  
  // OrbitControls для управления камерой
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; // Плавное управление
  controls.dampingFactor = 0.05;
  
  // Источник света на камере
  // const cameraLight = new THREE.PointLight(0xffffff, 1, 100); // Точечный свет
  // cameraLight.position.set(5, 5, 5); // Начальная позиция (будет обновляться вместе с камерой)
  // cameraLight.castShadow = true; // Включаем тени
  // scene.add(cameraLight);
  
  // Добавляем небольшой Ambient Light для заполняющего освещения
  const ambientLight = new THREE.AmbientLight(0xffffff, 10); // Мягкий свет
  scene.add(ambientLight);
  scene.add(camera);
  
  // const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 10); // Цвет неба, цвет земли, интенсивность
  // scene.add(hemisphereLight);
  
  const lights = [];
  // const directionalLightHelper = [];
  
  for (let i = 0; i < 10; i++) {
    lights[i] = new THREE.DirectionalLight( 0xffffff, 1.4);
    scene.add( lights[i] );
    // directionalLightHelper[i] = new THREE.PointLightHelper(lights[i], 1, 0x000000);
    // scene.add( directionalLightHelper[i] );
  }
  
  lights[0].position.set( 0, 50, 0 );
  lights[1].position.set( 0, 10, 50 );
  lights[2].position.set( 50, 10, 0 );
  lights[3].position.set( -50, 10, 0 );
  lights[4].position.set( 0, 10, -50 );
  lights[5].position.set( 0, -50, 0 );
  lights[6].position.set( 50, 10, 50 );
  lights[7].position.set( -50, 10, -50 );
  lights[8].position.set( 50, 10, -50 );
  lights[9].position.set( -50, 10, 50 );
  
  
  // const size = 10;
  // const divisions = 10;
  
  // const gridHelper = new THREE.GridHelper( size, divisions );
  // scene.add( gridHelper );
  
  // Загрузка модели GLB
  const loader = new GLTFLoader();
  loader.load(
    path, // Укажите путь к вашему GLB-файлу
      (gltf) => {
          const model = gltf.scene;
  
          // Включаем тени и сглаживание для всех мешей в модели
          model.traverse((child) => {
              if (child.isMesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                  child.material.flatShading = false; // Отключаем плоское затенение
              }
          });
  
          scene.add(model);
      },
      undefined,
      (error) => {
          console.error('Ошибка загрузки модели:', error);
      }
  );
  
  // Постобработка
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  
  // FXAA для сглаживания
  const fxaaPass = new ShaderPass(FXAAShader);
  fxaaPass.material.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
  composer.addPass(fxaaPass);
  
  // Анимация
  function animate() {
      requestAnimationFrame(animate);
  
      // Обновление позиции света на камере
      // directionalLight.position.copy(camera.position);
  
      // Обновление OrbitControls
      controls.update();
      renderer.render( scene, camera );
  
      // Рендеринг сцены с постобработкой
      composer.render();
  }
  
  // Обработка изменения размера окна
  window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
      renderer.setSize(width, height);
      composer.setSize(width, height);
  
      fxaaPass.material.uniforms['resolution'].value.set(1 / width, 1 / height);
  });
  
  // Запуск анимации
  animate();
  }