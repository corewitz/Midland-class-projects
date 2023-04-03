

let green = document.getElementById("0");
let red = document.getElementById("1");
let blue = document.getElementById("2");
let yellow = document.getElementById("3");
let start = document.getElementById("start");
let gameArray = [];
let playerArray = []; 
let run;
let clear;
let defaultTime = '2000';
let turnCount = 0;


  let playerChoice = document.querySelectorAll(".color");
  for (let i = 0; i < playerChoice.length; i++) {
      playerChoice[i].addEventListener('click', (e) => {
         e.target.id;
         e.target.style.opacity = "1";
         let dim = setTimeout(() => {
            e.target.style.opacity = ".3";
          }, 1000); 
         playerArray.push(e.target.id)  
        console.log (playerArray);
        checkArrays();
        
      });
    }
  
  let computerChoice = function () {
  
    const randomSelection = document.getElementById(Math.floor(Math.random() * 4));
   gameArray.push(randomSelection.id);
    console.log(gameArray);
    randomSelection.style.opacity = "1"; 
    let dim = setTimeout(() => {
        randomSelection.style.opacity = ".3";
      }, 1000); 
      
    }



/*let computerPlay = function () {
 
    let run = setInterval(computerChoice, 2000);
  
  let clear =  setTimeout (() => {
    clearInterval(run)}, defaultTime);
    
  } */

  let checkArrays = function () {

    if (JSON.stringify(gameArray) === JSON.stringify(playerArray)) {
        console.log('game array is' + gameArray);
        console.log('player array is' + playerArray);
        console.log("arrays match");
        defaultTime += 2000;
        //playerArray = [];
        //gameArray = [];
        //computerPlay();
        computerChoice();
        turnCount += 1;
    } else {
        console.log("arrays do not match");
        playerArray = [];
        gameArray = [];
        turnCount = 0;
    }
}

  start.addEventListener('click',computerChoice);
  

