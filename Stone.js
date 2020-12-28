class Stone{
    constructor(x, y, r){
        var options ={
            'isStatic':false,
            'restitution':0,
            'density':1.2,
            'friction':1

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(x, y, r, options);
        this.image = loadImage("images/stone.png");
        
        World.add(world, this.body);
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("brown");
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}