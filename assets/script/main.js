let userRock = document.querySelector("#userRock"); 
let userPaper = document.querySelector("#userPaper");
let userScissors = document.querySelector("#userScissors"); 
let userChoice;
let resetBtn = document.querySelector("#reset");


let userScore = document.querySelector("#userScore");
let aiScore = document.querySelector("#computerScore");
// Match-result
let result = document.querySelector("#result");
// score display
let userScoreValue = 0;
let aiScoreValue = 0;
userScore.innerHTML = userScoreValue;
aiScore.innerHTML = aiScoreValue;
//player/user display
let userDisplayRock = document.querySelector("#userDisplayRock");
let userDisplayPaper = document.querySelector("#userDisplayPaper");
let userDisplayScissors = document.querySelector("#userDisplayScissors");
//computer display
let aiDisplayRock = document.querySelector("#computerDisplayRock");
let aiDisplayPaper = document.querySelector("#computerDisplayPaper");
let aiDisplayScissors = document.querySelector("#computerDisplayScissors");



// for choosing Rock
userRock.addEventListener("click", chooseRock);

function chooseRock () {
let aiRandom = Math.floor((Math.random() * 3)); //0 = rock, 1 = paper, 2 = scissors

// initialize score
userScore.innerHTML = userScoreValue;
aiScore.innerHTML = aiScoreValue;

// makes the icons visible
userDisplayRock.setAttribute('style', 'display: block');
userDisplayPaper.setAttribute('style', 'display: none');
userDisplayScissors.setAttribute('style', 'display: none');

if (aiRandom == 0) {
  
  aiDisplayRock.setAttribute('style', 'display: block');
  aiDisplayPaper.setAttribute('style', 'display: none');
  aiDisplayScissors.setAttribute('style', 'display: none');

  result.innerHTML = "DRAW";
  result.style.color = "green";
  return ;

}else if (aiRandom == 1) {

  aiDisplayPaper.setAttribute('style', 'display: block');
  aiDisplayRock.setAttribute('style', 'display: none');
  aiDisplayScissors.setAttribute('style', 'display: none');

  result.innerHTML = "YOU LOSE";
  result.style.color = "red";
  aiScoreValue++;
}else if (aiRandom == 2) {

  aiDisplayScissors.setAttribute('style', 'display: block');
  aiDisplayPaper.setAttribute('style', 'display: none');
  aiDisplayRock.setAttribute('style', 'display: none');

  result.innerHTML = "YOU WIN!";
  result.style.color = "blue";
  userScoreValue++; 
} 
}

//for choosing papers
userPaper.addEventListener("click", choosePaper);

function choosePaper (){

let aiRandom = Math.floor((Math.random() * 3)); // 0 = rock, 1 = paper, 2 = scissors

// initialize score
userScore.innerHTML = userScoreValue;
aiScore.innerHTML = aiScoreValue;

// make the icons visible
userDisplayPaper.setAttribute('style', 'display: block');
userDisplayRock.setAttribute('style', 'display: none');
userDisplayScissors.setAttribute('style', 'display: none');

if (aiRandom == 2) {
  aiDisplayScissors.setAttribute('style', 'display: block');
  aiDisplayRock.setAttribute('style', 'display: none');
  aiDisplayPaper.setAttribute('style', 'display: none');

  result.innerHTML = "YOU LOSE";
  result.style.color = "red"
  userScoreValue++; 
} else if (aiRandom == 1) {

  aiDisplayPaper.setAttribute('style', 'display: block');
  aiDisplayRock.setAttribute('style', 'display: none');
  aiDisplayScissors.setAttribute('style', 'display: none');

  result.innerHTML = "DRAW";
  result.style.color = "green"

} else if (aiRandom == 0) {
  aiDisplayRock.setAttribute('style', 'display: block');
  aiDisplayScissors.setAttribute('style', 'display: none');
  aiDisplayPaper.setAttribute('style', 'display: none');

  result.innerHTML = "YOU WIN!";
  result.style.color = "blue"
  userScoreValue++; 
} 
}

// choocing scissors
userScissors.addEventListener("click", chooseScissors)

function chooseScissors () {

let aiRandom = Math.floor((Math.random() * 3)); // 0 = rock, 1 = paper, 2 = scissors

// initialize score
userScore.innerHTML = userScoreValue;
aiScore.innerHTML = aiScoreValue;

// makes choice visible
userDisplayScissors.setAttribute('style', 'display: block');
userDisplayPaper.setAttribute('style', 'display: none');
userDisplayRock.setAttribute('style', 'display: none');

if (aiRandom == 2) {

  aiDisplayScissors.setAttribute('style', 'display: block !important;');
  aiDisplayPaper.setAttribute('style', 'display: none');
  aiDisplayRock.setAttribute('style', 'display: none');

  result.innerHTML = "DRAW";
  result.style.color = "green"
  return ;
}else if (aiRandom == 1) {
  
  aiDisplayPaper.setAttribute('style', 'display: block'); 
  aiDisplayRock.setAttribute('style', 'display: none'); 
  aiDisplayScissors.setAttribute('style', 'display: none'); 

  result.innerHTML = "YOU WIN!"; 
  result.style.color = "blue"; 
  userScoreValue++; 
}else if (aiRandom == 0) {

  aiDisplayRock.setAttribute('style', 'display: block');
  aiDisplayScissors.setAttribute('style', 'display: none');
  aiDisplayPaper.setAttribute('style', 'display: none');

  result.innerHTML = "YOU LOSE...";
  result.style.color = "red";
  aiScoreValue++;
} 
}
function restartGame() {
  resetBtn.restart();
}
alert("Start New Game")

// if ai=scissors and user=paper (AI WINS) 
// if ai=scissors and user= rock (AI WINS) 
// if ai=scissors and user= scissors (DRAW)
// if ai=paper and user= paper (DRAW)
// if ai=paper and user= rock (AI WINS)
// if ai=paper and user= scissors (AI lOSE)
// if ai=rock and user= scissors (AI lOSE)
// if ai=rock and user= paper (AI WINS)
// if ai=rock and user= scissors (AI lOSE)
