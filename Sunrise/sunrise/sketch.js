var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;

var brightColor;
var lightColor;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 100
	};
    

    //TASK: intialise a moon object with an extra property for brightness
    brightColor = color(150, 200, 255, 0);
    lightColor = color(255, 255, 255);
    
    moon = {
        x: 750,
        y: 70,
        diameter: 70,
        brightness: lightColor
    };


	//set the initial darkness
	darkness = 0;
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.
    
    // update the brightness of the moon based on the mouse position
    moon.brightness = lerpColor(brightColor, lightColor, mouseY / height);
    

    // update the darkness of the scene based on the position of the sun
    darkness = map(sun.y, sun.diameter / 2, height - sun.diameter / 2, 0, 150);
    

	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    sun.y = max(sun.x, mouseY)
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
    noStroke();
    noFill()
	ellipse(moon.x, moon.y, moon.diameter);

    

    

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself

    fill(210,105,30);
    rect(tree.x - 20, tree.y - 110, tree.trunkWidth, tree.trunkHeight);
    fill(0,128,0);
    ellipse(tree.x, tree.y - 150, tree.canopyWidth, tree.canopyHeight);
    

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it

 
      fill(0, 0, 0, darkness); // black with alpha of 100
    
      rect(0, 0, width, height); 
    
        //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
    fill(moon.brightness)
	ellipse(moon.x, moon.y, moon.diameter);




}