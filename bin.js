class Bin {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          
      }
      this.body = Bodies.rectangle(x, y, 180,150, options);
      this.width = 150;
      this.height = 170;
      this.image = loadImage("dustbingreen.png")
      
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };