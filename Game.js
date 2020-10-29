class Game{
    constructor(){

    }
     getState(){
var getStateRef=dataBase.ref('getState')
getStateRef.on("value",function(data){
    gameState=data.val();
})
    }
    update(state){
dataBase.ref('/').update({
    gameState:state
})
    }
    start(){
      if(gameState===0) {
          player=new Player();
          player.getCount();
          
          form=new Form();
          form.display();


      }
    }
    }
