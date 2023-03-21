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
        //should store e.target.id in a variable to use later
         let id = e.target.id;
         e.target.style.opacity = "1";
         let dim = setTimeout(() => {
            e.target.style.opacity = ".3";
          }, 1000); 
          //push the id
         playerArray.push(id)  
        console.log (playerArray);
        // if the player finished their turn
        if (gameArray.length === playerArray.length) {
            checkArrays();
        }
        // return playerArray; don't need this return
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
    //   return gameArray; don't need this return
    }



let computerPlay = function () {
    run = setInterval(computerChoice, 2000);
  
//   let clear =  setTimeout (() => {
//     clearInterval(run)}, defaultTime);
    
//   }
    // set it like this instead
    clear = setTimeout(() => {
        clearInterval(run)
    }, defaultTime);

    

}


//This is will check if the player did it correctly
let checkArrays = function () {
    // When we use '==' or '===' for two arrays, we are checking 
    // whether the two arrays reference the same object in memory,
    // not whether they contain the same elements.
    // To fix this, we can use JSON.stringify,
    // which turns them into strings so we can compare them.
    if (JSON.stringify(gameArray) === JSON.stringify(playerArray)) {
        console.log("arrays match");
        defaultTime += 2000;
        playerArray = [];
        gameArray = [];
        computerPlay();
        turnCount += 1;
    } else {
        console.log("arrays do not match");
        playerArray = [];
        gameArray = [];
        turnCount = 0;
    }
}

  start.addEventListener('click',computerPlay);
  

// Because the if statement is outside of any function, it will run immediately when the script starts.
// I put this in the checkArrays function so it can be called instead.
//  if (gameArray === playerArray) {
//   console.log(gameArray);
//   console.log(playerArray);
//     defaultTime += 2000;
//     computerPlay();
//     turnCount +=1;
//   } 