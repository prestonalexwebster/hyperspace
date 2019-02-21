import BeanBuilder from "./bean-builder";


export default class BeanContainer {


    constructor(engine, scene, canvas){
        this.engine = engine;
        this.scene = scene;
        this.beanBuilder = new BeanBuilder()
            .engine(engine)
            .scene(scene)
            .canvas(canvas)
            .createBean(this.createBean)
            .disposeBean(this.disposeBean);
    }

    beans = new Set();

    beanProps = new WeakMap();


    createBean = (BeanClass, initialProps={}) => {

        const beanInstance = this.beanBuilder
            .className(BeanClass)
            .getProps(() => this.beanProps.get(beanInstance))
            .build();

        this.beans.add(beanInstance);

        this.beanProps.set(beanInstance, initialProps);

        beanInstance.create();

        return beanInstance;
    };

    setProps(beanInstance, updator={}){

        const prevProps = this.beanProps.get(beanInstance);

        if(typeof updator === 'function'){
            this.beanProps.set(beanInstance, updator(prevProps));
        }else if(typeof updator === 'object'){
            this.beanProps.set(beanInstance, {...prevProps, ...updator});
        }

    }

    disposeBean = (beanInstance) => {

        this.beans.delete(beanInstance);

        beanInstance.destruct();

    };

    renderLoop(){

        for(const beanInstance of this.beans){
            beanInstance.animate();
        }

    }

}