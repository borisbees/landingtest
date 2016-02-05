var cars = [];
			
function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  // make 25 cars
  for(var i = 0; i < 25; i++)
  {
    cars[i] = new Car();
  }
}
 
function draw()
{
  // clear background
  background(85, 255, 214);
  
  // loop through each car
  for(var i = 0; i < cars.length; i++)
  {
    cars[i].drive();
    cars[i].display();
  }      
  
}
 
// car constructor
function Car()
{
  this.xpos = random(width);
  this.ypos = random(windowHeight * .75, windowHeight);
  this.speed = random(0.5, 4);
}
 
// drive method
Car.prototype.drive = function()
{
  if(this.xpos > width)
  {
  	this.xpos = -200; // start offscreen
  	this.ypos = random(height);
  }
  this.xpos = this.xpos + this.speed;        
}
 
// display method
Car.prototype.display = function()
{
  // body of the car
  noFill();
  stroke(255, 255, 0);
  strokeWeight(1);
  ellipse(this.xpos, this.ypos, 7, 7);
}

/*var vibes = [];
			
function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  // create the vibes
  for(var i = 0; i < 25; i++)
  {
    vibes[i] = new Vibe();
  }
}
 
function draw()
{
  // clear background
  background(85, 255, 214);
  
  
  // display the vibe
  for(var i = 0; i < vibes.length; i++)
  {
    vibes[i].display;
  }

}
 
// vibe constructor
function Vibe()
{
  this.xpos = random(windowWidth);
  this.ypos = random(windowHeight/2, windowHeight);
  this.xpos = 0;
  this.ypos = 0;
  this.speed = 2;
  this.c = color(153, 102, 51);
}
 
// display method
Vibe.prototype.display = function()
{
  // body of vibe
  ellipse(this.xpos, this.ypos, 100, 100);
  fill(this.c);
  stroke(255, 255, 0);
  strokeWeight(3);
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/