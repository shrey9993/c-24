class dustbin{
    constructor(x,y,width,height){
var option={
    isStatic:true,
     "Restitution":0,
"Friction":0,
"density":1,


}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;

World.add(world. this.Body);
    }
    display(){
        rectMode(Center)

        Fill(255);

        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }