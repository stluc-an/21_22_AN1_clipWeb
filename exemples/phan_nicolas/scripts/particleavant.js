function Avant(){
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.acc =createVector(0,0);
  this.vert = loadImage("violet.png");

  this.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  this.applyForce= function(force){
    this.acc.add(force);
  }

  this.show = function (){
      image(this.vert, this.pos.x, this.pos.y, 20, 20);

  }

  this.edges = function(){
    if(this.pos.x > width) this.pos.x = 0;
    if(this.pos.x < 0) this.pos.x = width;
    if(this.pos.y > height) this.pos.y = 0;
    if(this.pos.y < 0) this.pos.y = height;
  }
}
