/*----------------------------------------*\
  beakerProject - anims.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/


class Anim1 extends Drawable {
  constructor(x, y){ //function qui permet a lordi de construire cet objet
      super();
      this.x = x;
      this.y = y;
  }

  draw(){
    push();
      rectMode(CENTER);
      translate(this.x, this.y);
      rotate(1);
      fill(255);
      stroke(0);
      rect(0,0, 200, 200);
    pop();
  }

}