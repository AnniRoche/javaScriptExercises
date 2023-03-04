function setup()
{
	//create a canvas for the robot
	createCanvas(2000, 1000);
	background(250,235,215)
}

function draw()
{
	strokeWeight(7);

	//robots head
	fill(170, 227, 226);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(255, 206, 254);
	ellipse(250, 70, 95, 80);

	fill(200, 0, 200);
	rect(170, 80, 160, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 90, 90);
	point(175, 200);
	ellipse(325, 200, 90, 80);
	point(325, 200);


	//robots nose
	fill(255, 206, 254);
	triangle(250, 220, 200, 300, 300, 300);

	//robots ears
	rect(71, 180, 30, 100);
	rect(399, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();

	noFill();
	beginShape();
	vertex(175, 380);
	vertex(200, 330);
	vertex(225, 380);
	vertex(250, 330);
	vertex(275, 380);
	vertex(300, 330);
	vertex(325, 380);
	endShape();

}