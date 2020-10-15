

document.getElementById('input').addEventListener('input', userInput);

function userInput (){
    var input = document.getElementById('input').value;
    document.getElementById('winning-score').innerHTML = input;
    return input;
}


var oneClick = 1;
var twoClick = 1;
var click = new Audio('/sounds/swish.m4a');
var winSound = new Audio('/sounds/cash.mp3');
var resetSound = new Audio('/sounds/aww.mp3');


document.getElementById('inc-player-one-score').addEventListener('click', playerOneClick);

var innerClick1 = 0;
var innerClick2 = 0;
let result = false;
function playerOneClick() {
    if (result == true) {
        console.log('onelcick');
        return;
    }
    var playerOne =  document.getElementById('player-1-score');
    playerOne.innerHTML = oneClick;
      if(playerOne.innerHTML == document.getElementById('winning-score').innerHTML) {
         innerClick1++;
            if (innerClick1==1){
                winSound.play(); 
                var newDiv = document.createElement('h3');
                newDiv.setAttribute('class', 'new-div');
                document.getElementById('player-1-score').style.color = 'white';
                newDiv.innerHTML=('Player One Won!');
                document.getElementById('result').appendChild(newDiv);
                document.getElementById('inc-player-one-score').style.backgroundColor = 'rgb(107,106,106)';
                document.getElementById('inc-player-two-score').style.backgroundColor = 'rgb(107,106,106)';
                result = true;
         }
         document.querySelector('.new-div').style.color = 'yellowgreen';
           return;
       } 
       oneClick++;
       click.play();    
}

document.getElementById('inc-player-two-score').addEventListener('click', playerTwoClick);

function playerTwoClick() {
    if (result == true) {
        console.log('sdfsdfsdfsd');
        return;
    }
  var playerTwo =  document.getElementById('player-2-score');
  playerTwo.innerHTML = twoClick;
  var vnClick = oneClick;
    if(playerTwo.innerHTML == document.getElementById('winning-score').innerHTML) {
        innerClick2++;
        if (innerClick2==1){
                winSound.play();
                var newDiv = document.createElement('h3');
                newDiv.setAttribute('class', 'new-div');
                document.getElementById('player-2-score').style.color = 'white';
                newDiv.innerHTML=('Player Two Won!');
                document.getElementById('result').appendChild(newDiv);
                document.getElementById('inc-player-one-score').style.backgroundColor = 'rgb(107,106,106)';
                document.getElementById('inc-player-two-score').style.backgroundColor = 'rgb(107,106,106)';
                result = true;
        }
        document.querySelector('.new-div').style.color = 'rgb(230,49,67)';
     return;
    }
    twoClick++;
    click.play();
}

document.getElementById('reset').addEventListener('click',reset);

function reset() {
    resetSound.play();
    oneClick = 1;
    twoClick =1;
    innerClick2=0;
    innerClick1=0;
    result = false;
    var playerOne =  document.getElementById('player-1-score');
     playerOne.innerHTML = oneClick-1;
    var playerTwo = document.getElementById('player-2-score');
    playerTwo.innerHTML = twoClick-1;
    document.getElementById('player-2-score').style.color = 'rgb(230,49,67)';
    document.getElementById('player-1-score').style.color = 'greenyellow';
    document.getElementById('inc-player-one-score').style.backgroundColor = 'yellowgreen';
    document.getElementById('inc-player-two-score').style.backgroundColor = 'rgb(230,49,67)';
    document.querySelector('.new-div').remove();
}

document.querySelector('#inc-player-one-score').addEventListener('click',function(){
    
})


