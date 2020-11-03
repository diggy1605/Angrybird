class Slingshot {
    constructor(bodyA , pointB){
var option = {
    bodyA:bodyA, 
    pointB:pointB, length:10,
    stiffness:0.04
}
this.Sling1 = loadImage("sprites/Sling1.png")
this.Sling2 = loadImage("sprites/Sling2.png")
this.Sling3 = loadImage("sprites/Sling3.png")
this.pointB = pointB;
this.Sling = Matter.Constraint.create(option);
World.add(world,this.Sling)
    }

display(){   
    image(this.Sling1,200,20)
    image(this.Sling2,170,20)
    if(this.Sling.bodyA){
      var pointA = this.Sling.bodyA.position;
      var  pointB = this.pointB;
        if(pointA.x<220){
            strokeWeight(7);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.Sling3,pointA.x-30,pointA.y-10,15,30);    
        }else{
        strokeWeight(3);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
    image(this.Sling3,pointA.x+25,pointA.y-10,15,30);
    }
}
}
fly(){
    this.Sling.bodyA = null
}
}