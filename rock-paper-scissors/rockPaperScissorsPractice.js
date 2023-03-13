
let rock = document.getElementById('rock');
rock.addEventListener('click', function () {
    console.log('YOU CHOSE ROCK!');
}); 

let paper = document.getElementById('paper');
paper.addEventListener('click', function () {
    console.log('YOU CHOSE PAPER!');
}); 

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', function () {
    console.log('YOU CHOSE SCISSORS!');
}); 

let randomNumber = Math.floor(Math.random() * 3);

function game (randomNumber) {
    if (randomNumber === 0) {
        alert("ROCK WON")
    } else if (randomNumber === 1) {
        alert("PAPER WON") 
    } else if (randomNumber === 2) {
        alert("SCISSORS WON")
    }
};


let choice = document.querySelectorAll('.choice');
let played = function() {
    console.log('You played!');
}

choice.forEach((div) => {
    div.addEventListener("click", played);
})

