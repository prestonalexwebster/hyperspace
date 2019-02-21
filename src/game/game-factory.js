import Game from './game';

export default class GameFactory {

    static createGame(){
        return new Game();
    }

}