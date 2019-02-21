import React, {Component} from 'react';
import GameScreen from './screens/game-screen';
import GameService from "./game/game-service";


class App extends Component {

    gameService = new GameService();

    registerCanvas = (canvas) => {
        this.gameService.attachCanvas(canvas);
        this.gameService.startGame();
    };

    unregisterCanvas = (canvas) => {
        this.gameService.detouchCanvas(canvas);
    };

    render() {
        return (
            <GameScreen registerCanvas={this.registerCanvas} unregisterCanvas={this.unregisterCanvas}/>
        );
    }

}

export default App;
