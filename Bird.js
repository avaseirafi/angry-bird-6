class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");

    //position of the bird trajectory in array
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>220){
      var position=[this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    //i++ is the same as i=i+1
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
