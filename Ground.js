class Ground{ 
    constructor(x,y){
var options={
    isStatic : true,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}
this.body = Bodies.rectangle(x,y,50,50,options);
this.width = 50
this.height = 50

World.add(world,this.body)
}
display(){
rectMode(CENTER);

fill("yellow");
rect(0,0,this.width,this.height)

}
}