class Dustbin{
    constructor(x,y){
      
        
      this.body=Bodies.rectangle(x,y,20,100);
      
      this.body.width=20;
      this.body.height=100;
      World.add(World,this.body);
    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill(255);
        rect(0, 0, 20,100);
        pop();
    }
  }