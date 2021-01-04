class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          restitution:1.1,
          friction:0.5,
          density:1.5
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.radius+this.radius, this.radius+this.radius);
      pop();
    }
  }