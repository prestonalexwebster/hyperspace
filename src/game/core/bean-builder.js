


export default class BeanBuilder {

    params = {};

    BeanClass = null;

    engine(e){
        this.params.engine = e;
        return this;
    }

    scene(s){
        this.params.scene = s;
        return this;
    }

    createBean(cb){
        this.params.createBean = cb;
        return this;
    }

    disposeBean(db){
        this.params.disposeBean = db;
        return this;
    }

    className(cn){
        this.BeanClass = cn;
        return this;
    }

    getProps(p){
        this.params.getProps = p;
        return this;
    }

    build(){
        return new this.BeanClass(this.params);
    }

}