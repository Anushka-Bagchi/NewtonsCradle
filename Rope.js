class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        var pointA =this.rope.bodyA.position;
    
        line(pointA.x,pointA.y-20,this.rope.bodyB.position.x+this.offsetX,this.rope.bodyB.position.y+this.offsetY);
    }

}