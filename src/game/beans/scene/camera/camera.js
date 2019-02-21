import BabylonBean from "../../../core/babylon-bean";
import {FollowCamera, Vector3} from "babylonjs";


export default class Camera extends BabylonBean {

    create(){
        this.camera = this.addToScene(FollowCamera, "camera", new Vector3(0,0,-5));
        this.camera.radius = 5;
        this.camera.heightOffset = 10;
        this.camera.rotationOffset = 0;
        this.camera.cameraAcceleration = 0.005;
        this.camera.maxCameraSpeed = 10;
    }

    setTarget(target){
        this.camera.lockedTarget = target;
    }

}