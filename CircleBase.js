class CircleBase{
    constructor(x,y,r){
        
        this.body = Bodies.circle(x,y,r, {isStatic: false, restitution: 0.5, density: 1.0});
        this.color = color(random(0,255), random(0,255),random(0,255));
        World.add(world,this.body);

    }

    display(){

       
        push();
        ellipseMode(CENTER);
        fill(this.color);
       // console.log("Before Circle");
        circle(this.body.position.x, this.body.position.y,this.body.circleRadius*2);
       // console.log("After Circle");
        pop();
        
    }
}