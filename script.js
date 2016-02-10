var vibes = [];
			
function setup()
{
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  
  // make 25 vibes
  for(var i = 0; i < 100; i++)
  {
    vibes[i] = new Vibe();
  }
}
 
function draw()
{
  // clear background
  background(18, 214, 120);
  
  // loop through each vibe
  for(var i = 0; i < vibes.length; i++)
  {
    vibes[i].drive();
    vibes[i].display();
  }      
  
}
 
// vibe constructor
function Vibe()
{
  this.xpos = random(width);
  this.ypos = random(windowHeight * .75, windowHeight);
  this.speedy = random(0.5, .5);
  this.speedx = random(-1.0, 1.0);
}
 
// drive method
Vibe.prototype.drive = function()
{
  if(this.xpos > width)
  {
  	this.xpos = -10; // start offscreen

  }

  if(this.ypos < 0)
  {
    this.ypos = height + 10 // start offscreen

  }

  this.xpos = this.xpos + sq(this.speedx);
  this.ypos = this.ypos - this.speedy * noise(random(.5, 1.5));        
}
 
// display method
Vibe.prototype.display = function()
{
  // body of the car
  noFill();
  stroke(255, 255, 0);
  strokeWeight(1);
  ellipse(this.xpos, this.ypos, 7, 7);
}