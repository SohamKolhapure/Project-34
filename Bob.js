class Bob{
    constructor(x,y,radius){
        var boboptions = {
            'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.circle(x,y,35, boboptions);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
        var pos = this.body.position;
        fill('green');
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
       
        
      
     
    }
  }