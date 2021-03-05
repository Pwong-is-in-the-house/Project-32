class Box{
    constructor(x,y,color){
       
this.body=Bodies.rectangle(x,y,30,50)
this.Visibility= 255;
World.add(world,this.body)
    }
display(){
    push();
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,30,50)
    this.Visibility= this.Visibility - 5;
    tint(255,this.Visibility);
    image(this.image, this.body.x, this.body.position.y,50,50);
    pop();
}
score(){
    if(this,visibiltiy<0&&this.visibiltiy>-105){
        score++
    }
}
}