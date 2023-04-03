

let sequence = [];
let humanSequence = [];
let level = 0;
const tileContainer = document.querySelector('.main-board');
const startButton = document.getElementById("start");
const score = document.querySelector('.score');

function activateTile(color) {
    const tile = document.querySelector(`[data-tile='${color}']`);
    tile.classList.add('activated');
    setTimeout(() => {
      tile.classList.remove('activated');
    }, 300);
  }
  
  function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
      setTimeout(() => {
        activateTile(color);
      }, (index + 1) * 600);
    });
  }

function nextStep() {
    const tiles = ['red', 'green', 'blue', 'yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
  
    return random;
  }

function nextRound() {
    level += 1;

    tileContainer.classList.add('unclickable');
    score.textContent = level;
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);
    
    sequence = [...nextSequence];
    setTimeout(() => {
        humanTurn(level);
    }, level * 600 + 1000);
  }

  function handleClick(tile) {
    const index = humanSequence.push(tile) - 1;
    activateTile(tile);
  
    const remainingTaps = sequence.length - humanSequence.length;

    if (humanSequence[index] !== sequence[index]) {
        resetGame('Oops! Game over, you pressed the wrong tile');
        return;
    }
  
    if (humanSequence.length === sequence.length) {
        if(humanSequence.length === 20) {
            resetGame('Congrats! You completed all the levels');
            return
        }
      humanSequence = [];
      setTimeout(() => {
        nextRound();
      }, 1000);
      return;
    }

  }

startButton.addEventListener('click', nextRound);

tileContainer.addEventListener('click', event => {
    const { tile } = event.target.dataset;
  
    if (tile) handleClick(tile);
  });
  
  function resetGame(text) {
    alert(text);
    sequence = [];
    humanSequence = [];
    level = 0;
    score.innerText = 0;
    tileContainer.classList.add('unclickable');
  }

function humanTurn(level) {
    tileContainer.classList.remove('unclickable');
  
  }
