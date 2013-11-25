// JavaScript Document
/*
demo courtesy of http://www.onlywebpro.com/2011/06/25/html5-canvas-for-absolute-beginners-part-1/
Works in IE9 and up 
*/

var pcanvas;
var ctx;
	//store width and height of canvas
var W = 500;
var H = 500;
	//store the starting position of particle; change these values to make it animate
var x = 100;
var y = 100;
	//array to store all the particles
var particles = [];
	//put 50 partocles into array
for( var i=0; i<50; i++){
	particles.push(new Particle());
}
onload = init;

function init(){
	pcanvas = document.getElementById("pcanvas");
	ctx = pcanvas.getContext("2d");
	//redraw the BG and particles every so often
	setInterval(draw, 33)
}
	//a class so each particle can store unique properties like position, color etc..
function Particle(){
	this.x = Math.random()*W;
	this.y = Math.random()*H;
		//set up a random velocity for each particle
	this.vx = Math.random()*20-10;
	this.vy = Math.random()*20-10;
		//give each a random color
	var r = Math.random()*255>>0;
	var g = Math.random()*255>>0;
	var b = Math.random()*255>>0;
	this.color = "rgba(" + r +"," + g +"," + b + ", 0.5)";
		//give each a random size
	this.radius= Math.random()*20+20;
}

function draw(){
		//blend the particle with the background
	ctx.globalCompositeOperation = "source-over";
		//redraw the background(black)
	ctx.fillStyle = "rgba(0,0,0,0.5)";
	ctx.fillRect(0,0, W, H);
	ctx.globalCompositeOperation = "lighter";
		//loop through the particles and change each one
	for(var t = 0; t<particles.length; t++){
			//make a p variable to refer to the current particle from the array
		var p = particles[t];
			//draw one particle
		ctx.beginPath();
		var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
		gradient.addColorStop(0,"white");
		gradient.addColorStop(0.4,"white");
		gradient.addColorStop(0.4,p.color);
		gradient.addColorStop(1,"black");
		ctx.fillStyle=gradient;
			//make the circle
		ctx.arc(p.x,p.y,p.radius, Math.PI*2,false);
		ctx.fill();
			//move the particle a little left and a little down
		p.x+= p.vx;
		p.y+= p.vy;
			//if that particle is off one side of canvas, move it to opposite side
		if(p.x < -50)p.x = W+50;
		if(p.y < -50)p.y = H+50;	
		if(p.x > W+50)p.x = -50;	
		if(p.y > H+50)p.x = -50;	
	
	}
}//end function draw
