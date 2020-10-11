class Paper{
    constructor(x,y){
      
        var options={
          isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
      this.body=Bodies.circle(x,y,20,options);
      
      this.body.width=20;
      this.body.height=20;

     World.add(world,this.body);
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
