import GameFactory from './game-factory'


export default class GameService {

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