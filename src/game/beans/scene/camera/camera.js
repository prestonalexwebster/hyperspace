import BabylonBean from "../../../core/babylon-bean";
import {FollowCamera, Vector3} from "babylonjs";


export default class Camera extends BabylonBean {

    create(){
        this.camera = this.addToScene(FollowCamera, "camera", new Vector3(0,0,-5));
    }

    setTarget(position){
        this.camera.position = position.add(new Vector3(0, 0, -5));
        this.camera.target = position; //todo: lock camera on space ship normally!
    }

}