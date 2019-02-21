import GameFactory from './game-factory'


class GameService {

    constructor(){
        this.game = GameFactory.createGame();
    }

    attachCanvas(canvas){
        this.game.attachCanvas(canvas);
    }

    startGame(){
        this.game.initialize();
    }

    detouchCanvas(canvas){
        this.game.detouchCanvas(canvas);
    }

}

class GameDevService extends GameService {

    constructor(){
        super();
        window.game = this.game;
    }

}

export default process.env.NODE_ENV === 'production' ? GameService  : GameDevService;