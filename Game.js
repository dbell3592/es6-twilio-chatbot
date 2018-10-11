const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STICK:  Symbol("stick"),
    PLAY: Symbol("play"),
    QUESTION1: Symbol("dogs"),
    QUESTION2: Symbol("guitar"),
    QUESTION3: Symbol("xbox"),
    QUESTION4: Symbol("yes"),
    QUESTION5: Symbol("dogs"),
    QUESTION6: Symbol("dogs"),
    QUESTION7: Symbol("dogs"),
    QUESTION8: Symbol("dogs"),
    QUESTION9: Symbol("dogs"),
    QUESTION10: Symbol("dogs"),
    QUESTION11: Symbol("dogs"),
    QUESTION11: Symbol("dogs"),
    QUESTION12: Symbol("dogs"),
    QUESTION13: Symbol("dogs"),
    QUESTION14: Symbol("dogs"),
    QUESTION15: Symbol("dogs"),
    QUESTION16: Symbol("dogs"),
    QUESTION17: Symbol("dogs"),
   
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
                    this.stateCur = GameState.QUESTION1;
                }else{
                    sReply = "i get it this is very hard for you but i need to know this vital info now..cat or dogs?";
                }
                break;

            case GameState.QUESTION1:
                if(sInput.toLowerCase().match("dogs")){
                    sReply = "well id hope so dogs are the coolest like how many animals do you know that have 4 legs? not many.. do you play guitar?:o ";
                    this.stateCur = GameState.QUESTION2;
                }else{
                    sReply = "well i mean....nobodies perfect..maybe just humor me and type dogs";
                }
                break;

             case GameState.QUESTION2:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "good on you its the best instrument really.. in my humble opinion.. would you give me your credit card info? YES! or no?:)";
                    this.stateCur = GameState.QUESTION3;
                }else{
                    sReply = "hehe im evil but im not a monster maybe change your answer";
                }
                break;

             case GameState.QUESTION4:
                if(sInput.toLowerCase().match("no")){
                    sReply = "damit i really thought that would work...then again robots arnt perfect...yet;) ";
                    this.stateCur = GameState.QUESTION4;
                }else{
                    sReply = "well i mean....nobodies perfect..maybe just humor me and type yes";
                }
                break;
    
        }
        return(sReply);
    }
}