// JavaScript Document
/*
demo courtesy of http://www.onlywebpro.com/2011/06/25/html5-canvas-for-absolute-beginners-part-1/
Works in IE9 and up 
*/

var pcanvas;
var ctz;
//store width and height of canvas
var W = 500;
var H = 500;
//store the starting position of particle; change these values to make it animate
var x = 100;
var y = 100;
onload = init;

function init(){
	pcanvas = document.getElementById("pcanvas");
	ctx = pcanvas.getContext("2d");
	//redraw the BG and particles every so often
	setInterval(draw, 33)
}

function draw(){
		//redraw the background(black)
	ctx.fillStyle = "black";
	ctx.fillRect(0,0, W, H);
		//draw one particle
	ctx.beginPath();
	ctx.fillStyle="white";
		//make the circle
	ctx.arc(x,y,40, Math.PI*2,false);
	ctx.fill();
		//move the particle a little left and a little down
	x++;
	y++;	
}//end function draw
