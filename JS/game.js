class Game{
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();

        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState === 0){
            player=new Player();
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount();
            }
           
            form= new Form();
            form.display();
        }
        car1=createSprite(100,200)
        car1.addImage(C1);
        car2=createSprite(300,200);
        car2.addImage(C2);
        car3=createSprite(500,200);
        car3.addImage(C3);
        car4=createSprite(700,200);
        car4.addImage(C4);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(25);
        text("GAME START",120,100)
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            background("#c68767");
            image(track_image,0,-displayHeight*4,displayWidth,displayHeight*5)
            //var displayPosition=130;
            //console.log()
            var index=0;
            var x=175;
            var y=0;
            for(var plar in allPlayers){
                index++;
                x=x+200;
                y=displayHeight-allPlayers[plar].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    //cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50
            player.update();
            
        }
        if(player.distance>3860){
            gameState=2;
        }
        drawSprites();
    }
    end(){
        console.log("game Ended");
        game.update(2);
    }
}