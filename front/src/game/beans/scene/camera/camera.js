import BabylonBean from "../../../core/babylon-bean";
import {Space, FreeCamera, Vector3} from "babylonjs";


export default class Camera extends BabylonBean {

    create(){
        this.camera = this.addToScene(FreeCamera, "camera", new Vector3(0,0,1));
    }

    setTarget(mesh){
        this.camera.parent = mesh;
        this.camera.position = new Vector3(0, 2, 6);
        this.camera.setTarget(new Vector3(0,0,0));
    }

}