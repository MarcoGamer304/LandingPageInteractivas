import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
let objToRender = 'bedroom';
let object;

export function modelLoader(scene, renderer, canvasFrame) {
    loader.load(
        `models/${objToRender}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;

            object.traverse((child) => {
                if (child.isMesh) {
                    if (!child.material.onBeforeRender) {
                        child.material.onBeforeRender = function () { };
                    }
                }
            });
            scene.add(object);
            canvasFrame.appendChild(renderer.domElement);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error(error);
            alert(error);
        }
    );
}