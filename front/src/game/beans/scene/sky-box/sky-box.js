import BabylonBean from "../../../core/babylon-bean";
import {CubeTexture} from 'babylonjs';

export default class SkyBox extends BabylonBean {

    create(){
        const skyTexture = this.addToScene(CubeTexture,"/resources/textures/skybox/stars/cwd");
        this.scene.createDefaultSkybox(skyTexture, true, 10000);
    }

}