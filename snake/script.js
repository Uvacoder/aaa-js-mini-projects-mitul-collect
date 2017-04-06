//Settings for Snake
var snakeX = 2, snakeY = 2;
var height = 30, width = 30;
var interval = 100, increment = 1;


// Game variables
var tailX = [snakeX];
var tailY = [snakeY];
var fruitX, fruitY, running, gameOver, int;
var direction = -1; // UP = 0, DOWN = -1, LEFT = 1, RIGHT = 2;


// Game Entry Point

function run(){
	init();
	int = setInterval(gameLoop, interval);
}

function init(){
	createMap();
	createSnake();
	createFruit();
}

// Get Map

function createMap(){
	document.write("<table>");
	for(var y = 0; y < height; y++){
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

function createSnake(){
	set(snakeX, snakeY, "snake");
}

function get(x, y){
	return document.getElementById(x + "-" + y);
}

function set(x, y, value){
	get(x, y).setAttribute("class", value);	
}

function random(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

function getType(x, y){
	get(x, y).getAttribute("class");
}

function createFruit(){
	var found = false;
	while(!found && (length < (width - 2) * (height - 2) + 1)){
		var fruitX = random(1, width - 1);
		var fruity = random(1, height - 1);
	}
}

run();