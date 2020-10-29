class Form{
    constructor(){

    }
    display(){
        var title=createElement('h3')
        title.html("car racing game")
        title.position(130,0)
        
        var input=createInput("name")
        input.position(130,160)

        var button=createButton("click here")
        button.position(250,200)

        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var readValue=input.value()
            playerCount=playerCount+1;
            player.update(readValue)
            player.updateCount(playerCount)
            greeting.html("hello"+readValue)
            greeting.position(200,200)

        })

    }
}