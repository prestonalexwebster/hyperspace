import BabylonBean from "../../core/babylon-bean";
import {Vector3, PointLight, Color3} from 'babylonjs';
import Spaceship from './spaceship/spaceship';
import SkyBox from './sky-box/sky-box';
import Camera from './camera/camera';


export default class Scene extends BabylonBean {

    moveSpaceship = e => {
        if(e.key === 'w'){
            this.spaceship.moveForward();
        } else if(e.key === 'a') {
            this.spaceship.rotateLeft(Math.PI/20);
        }else if(e.key === 'd') {
            this.spaceship.rotateRight(Math.PI/20);
        }
    };

    create(){
        this.scene.clearColor = new Color3(0.6,0.6,0.6);
        this.light = this.addToScene(PointLight, "light", new Vector3(10,10,0));
        this.camera = this.addToScene(Camera);

        this.skyBox = this.addToScene(SkyBox);

        this.spaceship = this.addToScene(Spaceship);
        this.spaceship.onLoad(meshes => this.camera.setTarget(meshes[0]));

        document.addEventListener('keypress', this.moveSpaceship); //todo: move controls to specific place

    }

}