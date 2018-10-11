const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STICK:  Symbol("stick"),
    PLAY: Symbol("play"),
    QUESTION1: Symbol("yes"),
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
                    sReply = "your my best friend now lets begin! do you like dogs or cats? ";
                }else{
                    sReply = "i get it this is very hard for youbut i need toknow this vitalinfo now..cat or dog?";
                    this.stateCur = GameState.QUESTION1;
                }
                break;

            case GameState.QUESTION1:
                if(sInput.toLowerCase().match("dogs")){
                    sReply = "well id hope so dogs are the coolest like how many animals do you know that have 4 legs? not many.. do you play guitar? ";
                }else{
                    sReply = "well i mean....nobodies perfect..maybe just humor me and type dogs";
                    this.stateCur = GameState.QUESTION1;
                }
                break;
    
        }
        return(sReply);
    }
}