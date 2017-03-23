var ball = { //by having the properties in the object section you can command for numerous balls.
  //x: 0, // x changes position of ball
  //y: 250, // y changes whether it goes down the screen.
  position:{x: 0, y: 250},
  speed: {x: 2, y: 2},
  draw: function(){
    this.position.x = this.position.x + this.speed.x; //the numbers added (+1) moves the ball across the screen. -/ + changes  direction of ball
    this.position.y = this.position.y + this.speed.y; 
    
    if(this.position.y > height) {
      this.speed.y = this.speed.y * -1;
    }
    
    if(this.position.x > width) { 
       this.speed.x = this.speed.x * -1;
    }
    
     if(this.position.y < 0) { 
       this.speed.y = this.speed.y * -1;
    }
    
    if(this.position.x < 0) { 
       this.speed.x = this.speed.x * -1;
    }
  
    
    //  if(this.position.x > height) {
    //  this.speed.x = this.speed.y * +1;
  //  }
   
     
   
    
    
    ellipse(this.position.x, this.position.y, 10, 10) 
  }
};

function draw() {
 ball.draw(); // to allow the ball to be drawn. like the logger.log in first tutorial, 'reference:ball'
}
















function setup() {
  resizeCanvas(500, 500); //remember camel casing
}