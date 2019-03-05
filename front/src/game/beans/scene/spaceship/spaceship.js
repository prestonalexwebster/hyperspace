import BabylonBean from "../../../core/babylon-bean";
import {AssetsManager, Vector3, Space, Axis, Quaternion} from 'babylonjs';

export default class Spaceship extends BabylonBean {

    processing = true;

    direction = new Vector3(0, 0, -1);

    callbacks = new Set();

    getPosition(){
        return this.meshes[0].position;
    }

    speed = 0;

    setSpeed(speed){
        this.speed = speed;
    }

    getParent(){
        return this.meshes[0];
    }


    moveForward(){
        if(this.isProcessing()) return;
        this.meshes[0].translate(this.direction, this.speed/10, Space.LOCAL);
    }

    moveTo(vector, distance){
        this.meshes[0].translate(this.direction, distance, Space.WORLD);
    }

    rotateTop(delta){
        this.meshes[0].addRotation(-delta,0, 0);
    }

    rotateBottom(delta){
        this.meshes[0].addRotation(delta,0, 0);
    }

    rotateLeft(delta){
        //this.meshes.forEach(m => m.addRotation(0,delta, 0));
        this.meshes[0].addRotation(0,-delta, 0);
    }

    rotateRight(delta){
       //this.meshes.forEach(m => m.addRotation(0,-delta, 0));
        this.meshes[0].addRotation(0,delta, 0);
    }


    isProcessing(){
        return this.processing;
    }


    onLoad(callback){
        if(!this.isProcessing()){
            callback();
        }
        this.callbacks.add(callback);
    }

    create(){
        const assetsManager = new AssetsManager(this.scene);
        const meshTask = assetsManager.addMeshTask("ship task", "", "/resources/assets/shaceship/", "spaceship.babylon");
        meshTask.onSuccess = task => {
            this.meshes = task.loadedMeshes;
            for(let i = 1; i < this.meshes.length; ++i){
                this.meshes[i].parent = this.meshes[0];
            }
            this.processing = false;
            for(const callback of this.callbacks){
                callback();
            }
            this.callbacks.clear();
        };
        meshTask.onError = console.log;
        assetsManager.load();
    }



}