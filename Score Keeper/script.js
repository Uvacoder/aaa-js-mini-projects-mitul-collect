var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var h1 = document.querySelector('h1');
var reset = document.getElementById('reset');
var playScore = document.getElementById('playScore');
var numInput = document.querySelector('input');

var p1Score = 0;
var p2Score = 0; 
var gameOver = false;
var winScore = 5;


p1.addEventListener('click', function() {
    if(!gameOver) {
    p1Score++;
        if(p1Score === winScore) {
            p1Display.classList.add("winner");
            p2Display.classList.add('loser');
            gameOver = true;
        }
    p1Display.textContent = p1Score;    
    }
    
});

p2.addEventListener('click', function() {
    if(!gameOver) {
    p2Score++;
        if(p2Score === winScore) {
            p2Display.classList.add("winner");
            p1Display.classList.add('loser');
            gameOver=true;
        }
    p2Display.textContent = p2Score;    
    }
    
});

reset.addEventListener('click', function() {
    resetFunc();
});

function resetFunc() {
  p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove('winner');
    p1Display.classList.remove('loser');
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove('winner');
    p2Display.classList.remove('loser');
    gameOver = false;  
}

numInput.addEventListener('change', function() {
    playScore.textContent = this.value;
    winScore = Number(this.value);
    resetFunc();
});