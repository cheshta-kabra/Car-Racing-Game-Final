class Form{
    constructor(){
        this.input=createInput('name'),
        this.button=createButton('start'),
        this.greeting=createElement('h3')
        this.title= createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

    display(){
        
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2-40,10);

        this.input.position(displayWidth/2-40,displayHeight/2-80);

        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }
}