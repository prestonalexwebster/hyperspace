import BeanContainer from "./bean-container";


export default class BeanRenderer {

    constructor(engine, scene, canvas){
        this.engine = engine;
        this.scene = scene;
        this.beanContainer = new BeanContainer(this.engine, this.scene, canvas);
    }


    renderLoop = () => {
        this.beanContainer.renderLoop();
        this.scene.render();
    };

    render(BeanClass){
        this.beanContainer.createBean(BeanClass);
        this.engine.runRenderLoop(this.renderLoop);
    }
}