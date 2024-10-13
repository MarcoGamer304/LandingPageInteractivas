import scene from './scene/scene';
import renderer from './render/renderer';
import { setControls } from './controls/controls';
import camera from './camera/camera';
import { light } from './light/ilumination';
import { thread } from './thread/hilo';
import { modelLoader } from './GLTFLoader/modelLoader';

const controls = setControls(camera, renderer);
const canvasFrame = document.getElementById('canvasFrame');

light(scene);

modelLoader(scene, renderer ,canvasFrame);

thread(scene, camera, renderer);