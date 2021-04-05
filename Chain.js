class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var p2 = this.chain.bodyA.position
        var p1 = this.chain.bodyB.position
        line(p2.x,p2.y,p1.x,p1.y);
    }
}