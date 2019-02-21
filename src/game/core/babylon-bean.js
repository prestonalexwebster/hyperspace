function isSubClassOf(SubClass, SuperClass) {
    return SubClass.prototype instanceof SuperClass || SubClass === SuperClass;
}

//proposal
export default class BabylonBean {

    constructor({engine, scene, getProps, createBean, disposeBean, canvas}) {

        Object.defineProperty(this, 'scene', {
            get: () => scene,
            configurable: false,
            enumerable: false
        });

        this.createBean = createBean;

        this.disposeBean = disposeBean;

        /*Object.defineProperty(this, 'engine', {
            get: () => engine,
            configurable: false,
            enumerable: false
        });*/

        Object.defineProperty(this, 'props', {
            get: getProps,
            configurable: false,
            enumerable: false
        });

        Object.defineProperty(this, 'canvas', {
            get: () => canvas,
            configurable: false,
            enumerable: false
        });

    }

    addToScene(ClassName, ...rest) {
        if (isSubClassOf(ClassName, BabylonBean)) {
            return this.createBean(ClassName, ...rest);
        }
        return new ClassName(...rest, this.scene);
    }

    dispose(mesh) {
        if (mesh instanceof BabylonBean) {
            this.disposeBean.dispose(mesh);
        } else {
            mesh.dispose();
        }
    }

    create() {
        //placing on scene
    }

    destruct() {
        //removing from scene
    }

    animate() {
        //called per render loop
    }

}