class Plinko extends CircleBase {
    constructor(x,y,r){
        super(x,y,r);
        Matter.Body.setStatic(this.body, true);
    }
    


    display(){
        super.display();
    
        this.color = 255;
        fill(this.color);
        
    }

}