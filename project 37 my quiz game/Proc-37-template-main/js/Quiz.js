class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
 
    //write code to change the background color here
      background("yellow");
    //write code to show a heading for showing the result of Quiz

    textSize(30);
    text(" Result of quiz")
    //call getContestantInfo( ) here
        Contestant.getPlayerInfo();
    //write code to add a note here
    textSize(20);
          text(" NOTE:Contestant who answer is highlighted with green and wrong with red");
    
    
        if(allContestants!==undefined){
          var  display_answers =230;
          
          for(var plr in allContestants){
             var answer="2"
            if(answer === allContestants[plr].answer)
              fill ("green")
            else 
              fill("red")

              display_answers+=30
              
              text(allContestants[plr].name+":"+allContestants[plr].answer,100,display_answers)
            }
           
          
          

        }
    //write code to highlight contest who answered correctly
    
  }

}
