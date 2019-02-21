import { Scene, Engine } from 'babylonjs';
import BeanRenderer from './core/bean-renderer';
import GameScene from './beans/scene/scene'



export default class Game {

    attachCanvas(canvas){
        this.canvas = canvas;
    }

    detouchCanvas(){

    }

    initialize(){
        this.engine = new Engine(this.canvas);
        this.scene = new Scene(this.engine);
        this.beanRenderer = new BeanRenderer(this.engine, this.scene);
        this.beanRenderer.render(GameScene);
    }

}