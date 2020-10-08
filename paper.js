class Paper{
    constructor(x,y){
      
        
        
      this.body=Bodies.circle(x,y,20,20);
      
      this.body.width=20;
      this.body.height=20;

     World.add(World,this.body);
    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0, 0,20, 20);
        pop();
    }
  }