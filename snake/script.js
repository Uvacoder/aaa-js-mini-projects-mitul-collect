//Settings for Snake
var snakeX = 2, snakeY = 2;
var height = 30, width = 30;
var interval = 100;
var increment = 4;


// Game variables
var length = 0;
var tailX = [snakeX];
var tailY = [snakeY];
var fX, fY, int;
var running = false, gameOver = false;
var score = 0;
var direction = -1; // UP = 0, DOWN = -1, LEFT = 1, RIGHT = 2;

// Get Map

function createMap() {
	'use strict';
	document.write("<table>");
	for (var y = 0; y < height; y++){
		document.write("<tr>");
		for(var x =0; x < width; x++){
			if(x == 0 || x == width - 1 || y == 0 || y == height -1){
				document.write("<td class='wall' id='" + x + "-" + y + "'></td>"); 
			} else {
				document.write("<td class='blank' id='" + x + "-" + y + "'></td>");
			}
		}
	}
	document.write("</table>")
}

function createSnake() {
	set(snakeX, snakeY, "snake");
}

function get(x, y) {
	return document.getElementById(x + "-" + y);
}

function set(x, y, value) {
	get(x, y).setAttribute("class", value);	
}

function random(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

function getType(x, y){
	return get(x, y).getAttribute("class");
}

function createFruit() {
	var found = false;
	while(!found && (length < (width - 2) * (height - 2) + 1)){
		var fruitX = random(1, width - 1);
		var fruitY = random(1, height - 1);
		if(getType(fruitX, fruitY) == "blank"){found = true;}
	}
	set(fruitX, fruitY, "fruit");
	fX = fruitX;
	fY = fruitY;
}


window.addEventListener("keypress", function key(){
	var key = event.keyCode;
	if(direction != -1 && (key === 119 || key == 87)){direction = 0;}
	else if(direction != 0 &&  (key === 115 || key == 83)){direction = -1;}
	else if(direction != 2 &&  (key === 97 || key == 65)){direction = 1;}
	else if(direction != 1 &&  (key === 100 || key == 68)){direction = 2;}
	if(!running){running = true;}
	else if(key == 32){running = false;}
});

function gameLoop(){
	if(running && !gameOver){
		update();
	} else if(gameOver){
		clearInterval(int);
	}
}

function update(){
	set(fX, fY, "fruit");
	updateTail();
	set(tailX[length], tailY[length], "blank");
	if(direction == 0){snakeY--;} 
	else if(direction == -1){snakeY++;}
	else if(direction == 1){snakeX--;}
	else if(direction == 2){snakeX++;}
	set(snakeX, snakeY, "snake");
	for(var i = tailX.length - 1; i >= 0; i--){
		if(snakeX == tailX[i] && snakeY == tailY[i]){
			gameOver = true;
			alert("game over");
			break;
		}
	}
	if(snakeX == 0 || snakeX == width - 1 || snakeY == 0 || snakeY == height - 1){
		gameOver = true;
		alert("game over");
	}
	if(snakeX == fX && snakeY == fY){
		createFruit();
		length+=increment;
		score+=4;
	}
	document.getElementById("score").innerHTML = "Score: " + score;
}

function updateTail(){
	for(var i = length; i > 0; i--){
		tailX[i] = tailX[i - 1];
		tailY[i] = tailY[i - 1];
	}
	tailX[0] = snakeX;
	tailY[0] = snakeY;
}

// Game Entry Point
function init() {
	createMap();
	createSnake();
	createFruit();
}

function run() {
	init();
	int = setInterval(gameLoop, interval);
}

run();