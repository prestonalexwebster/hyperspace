import BabylonBean from "../../../core/babylon-bean";
import {AssetsManager, Vector3, Space, Axis, Quaternion} from 'babylonjs';

export default class Spaceship extends BabylonBean {

    processing = true;

    direction = new Vector3(0, 0, -1);

    callbacks = new Set();

    moveForward(){
        if(this.isProcessing()) return;
        this.meshes.forEach(mesh => {
            mesh.translate(this.direction, 0.2, Space.LOCAL);//todo: fix move forward OR rotation behavior
        });
    }

    rotateLeft(delta){
        this.meshes.forEach(m => m.addRotation(0,delta, 0));
    }

    rotateRight(delta){
        this.meshes.forEach(m => m.addRotation(0,-delta, 0));
    }


    isProcessing(){
        return this.processing;
    }


    onLoad(callback){
        if(!this.isProcessing()){
            callback(this.meshes);
        }
        this.callbacks.add(callback);
    }

    create(){
        const assetsManager = new AssetsManager(this.scene);
        const meshTask = assetsManager.addMeshTask("ship task", "", "/resources/assets/shaceship/", "spaceship.babylon");
        meshTask.onSuccess = task => {
            this.meshes = task.loadedMeshes;
            this.processing = false;
            this.moveTo(0,0,0);
            for(const callback of this.callbacks){
                callback(this.meshes);
            }
            this.callbacks.clear();
        };
        meshTask.onError = console.log;
        assetsManager.load();
    }



}