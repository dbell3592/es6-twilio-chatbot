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
                    sReply = "cool! i like you already! i would like to play a game are you in? yes or no? "
                    this.stateCur = GameState.PLAY;
                }else{
                    sReply = "you should really press play it will be fun i promise;)";
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "your my best friend now lets begin! do you like dogs ";
                }else{
                    sReply = "aw cmon dont be like that say yes ...please:(";
                    this.stateCur = GameState.STICK;
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "i do too they are aweeeesooooome";
                }else{
                    sReply = "well i mean nobodies perfect you should say yes ";
                    this.stateCur = GameState.PLAY;
                }
                break;



        }
        return(sReply);
    }
}