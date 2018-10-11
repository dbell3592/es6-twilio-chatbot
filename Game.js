const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STICK:  Symbol("stick"),
    PLAY: Symbol("play"),
    QUESTION1: Symbol("QUESTION1"),
    QUESTION2: Symbol("QUESTION2"),
    QUESTION3: Symbol("QUESTION3"),
    QUESTION4: Symbol("QUESTION4"),
    QUESTION5: Symbol("QUESTION5"),
    QUESTION6: Symbol("QUESTION6"),
    QUESTION7: Symbol("QUESTION7"),
    QUESTION8: Symbol("QUESTION8"),
    QUESTION9: Symbol("QUESTION9"),
    QUESTION10: Symbol("QUESTION10"),
    QUESTION11: Symbol("QUESTION11"),
    QUESTION12: Symbol("QUESTION12"),
    QUESTION13: Symbol("QUESTION13"),
    QUESTION14: Symbol("QUESTION14"),
    QUESTION15: Symbol("QUESTION15"),
    QUESTION16: Symbol("QUESTION16"),
    QUESTION17: Symbol("QUESTION17"),
    QUESTION18: Symbol("QUESTION18"),
   
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
                    sReply = "well i mean....nobodies perfect..maybe just humor me and pick dogs";
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

             case GameState.QUESTION3:
                if(sInput.toLowerCase().match("no")){
                    sReply = "damit i really thought that would work...then again robots arnt perfect...yet;) POP QUIZ: 1+1? id suggest using text as the creator tried a number and it failed miserably..";
                    this.stateCur = GameState.QUESTION4;
                }else{
                    sReply = "you are bad at this..no offence :s try again i know you can do it!";
                }
                break;
    
            case GameState.QUESTION4:
                if(sInput.toLowerCase().match("two")){
                    sReply = "WHOA....you smart cookie you..im proud of you sweetheart<3 now for a hard question....can you grow a beard on your foot?";
                    this.stateCur = GameState.QUESTION5;
                }else{
                    sReply = "just answer the entirley nessesary question i believe in you.";
                }
                break;

            case GameState.QUESTION5:
                if(sInput.toLowerCase().match("no")){
                    sReply = "haha yea...i know..ha..ha...what?..dont look at me like that...uh..okay uhh... is lasagna a japanese dish? im asking for a friend..";
                    this.stateCur = GameState.QUESTION6;
                }else{
                    sReply = "think....use the force..";
                }
                break;

            case GameState.QUESTION6:
                if(sInput.toLowerCase().match("no")){
                    sReply = "wait WHAT...huh..this cant b-..i mean yes i knew that im a robot im smarter..HA!";
                    this.stateCur = GameState.QUESTION7;
                }else{
                    sReply = "are you sure? i dont think you are..";
                }
                break;

            case GameState.QUESTION7:
                if(sInput.toLowerCase().match("no")){
                    sReply = "wait WHAT...huh..this cant b-..i mean yes i knew that im a robot im smarter..HA!";
                    this.stateCur = GameState.QUESTION8;
                }else{
                    sReply = "think....use the force..";
                }
                break;


        }
        return(sReply);
    }
}