/*let firstName = prompt('What is your first name?');
console.log(firstName);
let numberGuess = prompt('What is a number between 0 and 100?');
console.log(numberGuess);
if(numberGuess % 2 === 0) {
    console.log('your number is even')
} else {
    console.log ('your number is odd')
};

if (numberGuess < 50) {
    console.log('your number is less than 50')
} else if (numberGuess > 50) {
    console.log('your number is greater than 50')
} else {
    console.log('your number has to be 50')
};

for(let i = 0; i < numberGuess; i++) {
    console.log(i);
}

for(let i = 100; i > numberGuess; i--) {
    console.log(i);
}

if (firstName === 'Jay') {
    alert('That is a great name')
}; */


let common = 0;
let arr1 = [-1,-2,2,10,7,8];
let arr2 = [4,-2,2,7,9,5];

for (let i = 0; i < arr1.length; i++) {
    for(let j= 0; j < arr2.length; j++) {

    

if(arr1[i] === arr2[j]) {
    common++;
    }
  }
}

console.log(`There are ${common} items in common`);






