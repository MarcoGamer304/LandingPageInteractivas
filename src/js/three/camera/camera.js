import { PerspectiveCamera, Vector3 } from "three";

const camera = new PerspectiveCamera(75, 350 / 350, 0.1, 2000);

camera.position.z = 5;
camera.position.y = 3;
camera.position.x = -5;

camera.lookAt(new Vector3(0, 0, 0));

export default camera;