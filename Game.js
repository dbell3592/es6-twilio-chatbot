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
                    sReply = "you should really type yes it will be fun i promise;)";
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "your my best friend now lets begin! are you male or female ";
                }else{
                    sReply = "aw cmon dont be like that press play to begin!...please:(";
                    this.stateCur = GameState.STICK;
                }
                break;





        }
        return(sReply);
    }
}