class Roof{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      var angle = this.body.angle;
      strokeWeight(3)
      stroke('black');
      rectMode(CENTER);
      rect(400,100,400,25);
      fill('grey')
     
    }
  }
  