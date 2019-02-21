import BabylonBean from "../../core/babylon-bean";
import {Mesh, StandardMaterial, Color3} from 'babylonjs';

export default class Cube extends BabylonBean {

    create(){
        this.box = this.addToScene(Mesh.CreateBox, "box", 2);
        this.box.material = this.addToScene(StandardMaterial, "material");
        this.box.material.ambientColor = new Color3(0.23, 0.98, 0.53);
        this.box.rotation.x = -0.2;
        this.box.rotation.y = -0.4;
    }

    animate() {
        this.box.rotation.x += 0.01;
        this.box.rotation.y += 0.01;
    }


}