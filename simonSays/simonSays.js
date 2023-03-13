

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
         playerArray.push(e.target)  
        console.log (playerArray);
        return playerArray;
      });
    }
  
  let computerChoice = function () {
    const randomSelection = document.getElementById(Math.floor(Math.random() * 4));
   gameArray.push(randomSelection);
    console.log(gameArray);
    randomSelection.style.opacity = "1"; 
    let dim = setTimeout(() => {
        randomSelection.style.opacity = ".3";
      }, 1000); 
      return gameArray;
    }



let computerPlay = function () {
    let run = setInterval(computerChoice, 2000);
  
  let clear =  setTimeout (() => {
    clearInterval(run)}, defaultTime);
    
  }

  start.addEventListener('click',computerPlay);
  


 if (gameArray === playerArray) {
  console.log(gameArray);
  console.log(playerArray);
    defaultTime += 2000;
    computerPlay();
    turnCount +=1;
  } 

