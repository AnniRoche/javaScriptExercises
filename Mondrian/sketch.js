function setup()
{
	//create a large square canvas
	createCanvas(910, 1000);
	background(245, 255, 201);

}

function draw()
{

	//1st Rectangle
	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);

	
	//2nd Rectangle
	fill(249, 219, 187);
	strokeWeight(8);
	rect(0, 0, 100, 652)
	

	//3rd and 4th Rectangle
	fill(78, 110, 129);
	strokeWeight(24);
	rect(50, 200, 250, 250)

	rect(550, 600, 250, 250)


	//5th Rectangle
	fill(46, 56, 64);
	strokeWeight(4);
	rect(0, 655, 550, 250)

	//6th Rectangle
	fill(46, 56, 64);
	strokeWeight(10);
	rect(102, 0, 600, 50)


	//7thRectangle
	fill(249, 219, 187);
	strokeWeight(8);
	rect(655, 0, 250, 590)


}