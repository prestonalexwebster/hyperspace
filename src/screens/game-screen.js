import React, {Component} from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

const style = {height: '100vh'};

export default class GameScreen extends Component {

    static resizeSensitivity = 100;

    static propTypes = {
        registerCanvas: PropTypes.func.isRequired,
        unregisterCanvas: PropTypes.func.isRequired
    };

    domNode = React.createRef();

    fitWindowSize = throttle(() => {
        this.domNode.current.setAttribute('width', document.body.clientWidth);
        this.domNode.current.setAttribute('height', document.body.clientHeight);
    }, GameScreen.resizeSensitivity);

    componentDidMount() {
        window.addEventListener('resize', this.fitWindowSize);
        this.props.registerCanvas(this.domNode.current);
        this.fitWindowSize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.fitWindowSize);
        this.props.unregisterCanvas(this.domNode.current);
    }


    render(){
        return (
            <canvas ref={this.domNode} style={style}/>
        );
    }

}