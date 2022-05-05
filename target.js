class Target {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.max = s;
    this.size = 1;
    
  }
  show() {
    fill("#222222");
    let colorT;
    let x = random(1,5); 
    //stroke('#39FF14');
    //strokeWeight(1);
    circle(this.x, this.y, this.size);
  }
  test() {
    return (collidePointCircle(mouseX,mouseY,this.x,this.y,50))
  }
  expand(s) {
    this.size = constrain(this.size + s, 0, this.max)
  }
}