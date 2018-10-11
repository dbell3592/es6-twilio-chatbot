const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STICK:  Symbol("stick"),
    PLAY: Symbol("play")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "welcome to this super epic awesome application type 'play' to begin!:D";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.STICK;
                break;
            case GameState.STICK:
                if(sInput.toLowerCase().match("play")){
                    sReply = "cool i like you already i would like to play a game are you in? yes or no?:D"
                    this.stateCur = GameState.PLAY;
                }else{
                    sReply = "you should really type play it will be fun i promise;)";
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Here it is! I got it for you. Do you toss it again.... Please? ";
                }else{
                    sReply = "Walking is my favourite. Oh look a stick! Do you play or keep on walking?";
                    this.stateCur = GameState.STICK;
                }
                break;





        }
        return(sReply);
    }
}