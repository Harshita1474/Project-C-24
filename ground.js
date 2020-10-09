class Ground{
    constructor(x,y){
      
        var options={
         isStatic:true
        }
        
      this.body=Bodies.rectangle(x,y,800,20);
      
      this.body.width=800;
      this.body.height=20;
      World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(0,255,0);
        rect(0, 0, 800,20);
        pop();
    }
  }
