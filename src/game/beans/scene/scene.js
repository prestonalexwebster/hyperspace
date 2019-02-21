import BabylonBean from "../../core/babylon-bean";
import {FreeCamera, Vector3, PointLight, Color3} from 'babylonjs';
import Cube from '../cube/cube';

export default class Scene extends BabylonBean {

    create(){
        this.scene.clearColor = new Color3(0.6,0.6,0.6);
        this.camera = this.addToScene(FreeCamera, "camera", new Vector3(0,0,-10));
        this.light = this.addToScene(PointLight, "light", new Vector3(10,10,0));
        this.cube = this.addToScene(Cube);
    }

}