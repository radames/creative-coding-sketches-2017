var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i < 10; i++){
    var c = new Circle(windowWidth/2, windowHeight/2);
    circles.push(c);
  };

}

function draw() {
  background(255,2);
  circles.forEach(c => c.draw());

}


function Circle(_px, _py) {
  this.px = _px;
  this.py = _py;
  this.rx = randomGaussian();
  this.ry = randomGaussian();
  this.sColor = color(random(255),random(255),random(255),40);

  this.draw = function() {
    push();
    noFill();
    strokeWeight(abs(this.rx*100));
    stroke(this.sColor);
    translate(this.px, this.py);
    rotate(Math.sign(this.rx)*radians(5*frameCount));
    ellipse(this.rx*20, this.ry*20  , this.rx*500, this.rx*500);
    pop();
  }
}
