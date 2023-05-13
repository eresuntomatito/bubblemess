let [centerx, centery] = [200, 200];

function setup() {
  createCanvas(400, 400);
  bubble = [];
  bubblecount = bubble.lenght;
}

function draw() {
  background(220);
  for (i in bubble){
    bubble[i].show();
    bubble[i].move();
  }
  newBubble()
  print(Object.keys(bubble).length
);

}

function newBubble() {
  if (Object.keys(bubble).length < 100) {
    bubble.push(new Bubble);    
  }

}

class Bubble {
  constructor() {
    this.centerx = 200;
    this.centery = 200;
  }
  
  move() {
    this.centerx = this.centerx + random(-5,5);
    this.centery = this.centery + random(-5,5);
  }
  
  show() {
    strokeWeight(random(5,15));
    stroke('orange');
    fill('yellow')
    circle(this.centerx, this.centery, random(20, 30));
  }
}
