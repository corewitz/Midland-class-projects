/*function removeAbsValue (number) {
    if (number > 0) {
        return number
    } else {
        return number - (number * 2)
    }
} 

console.log(removeAbsValue(-6)); */



/* THE BOTTOM CODE WORKS*/
/*function pow(x, y) {
    let num = x;
    for (let i = 1; i < y; i++) {
      num = num * x;
    }
    return num;
  }
  console.log(pow(2, 3)); */

  
  
/* THE BOTTOM CODE DOES NOT WORK
  function pow(x, y) {
  
    for (let i = 1; i < y; i++) {
      x = x * x;
    }
    return x;
  }
  console.log(pow(2, 3));

*/


/* THE BOTTOM CODE WORKS*/
/*
function pow(x, y) {
    let num = x;
    for (let i = 1; i < y; i++) {
      num = num * x;
    }
    return num;
  }
  console.log(pow(2, 3)); */

  
  
/*THE BOTTOM CODE DOES NOT WORK BECAUSE IF THE LOOP. AT FIRST 2 IS ASSIGNED TO X BUT SINCE THE VARIABLE WAS SET BEFORE THE LOOP STARTS IT HOLDS ITS VALUE OF 2 INSTEAD OF MULTIPLYING */
  
/*function pow(x, y) {
  
    for (let i = 1; i < y; i++) {
      x = x * x;
    }
    return x;
  }
  console.log(pow(2, 3));
*/


/*const textToTest = "racecar"
const arrayOne = textToTest.split('');
const arrayOneBackwards = arrayOne.reverse();
const secondTextToTest = arrayOneBackwards.join('');

if (textToTest === secondTextToTest) {
  console.log('That is a palindrome!')
} else {
  console.log('that word is not a palidrome')
}; */


/*const bannedWordsArray = ['fuck', 'shit', 'piss', 'ass', 'poop'];
const wordsArray = ['poop', 'pee', 'chair', 'table', 'couch', 'shit', 'ass'];

function getMatch(a, b) {
    const matches = [];

    for ( let i = 0; i < a.length; i++ ) {
        for ( let e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
    
}


console.log(getMatch(bannedWordsArray, wordsArray)); */


/*function betweenAandB (a,b) {
  let newB = b - 1;
  while (a < newB) {
        a++ ;
    if (a % 2 == 0) {
      console.log('Fizz')
    } else if (a % 3 == 0) {
      console.log('Buzz')
    } else if (a % 2 == 0 && a % 3 == 0) {
      console.log('FizzBuzz')
    } else console.log(a);
    if (a == b) {
      return a;
    }
  }
    while (b + 1 < a) {
    a-- ;
    if (a % 2 == 0) {
      console.log('Fizz')
    } else if (a % 3 == 0) {
      console.log('Buzz')
    } else if (a % 2 == 0 && a % 3 == 0) {
      console.log('FizzBuzz')
    } else console.log(a);
    if (a == b) {
      return a;
    }
   
  } 
}

betweenAandB(1,10); */
   



/*function splitPizza(numPeople, numSlices) {
  if (numSlices % numPeople == 0) {
    console.log((numSlices / numPeople)+ ' slices') ;
  } else if (numPeople % numSlices !== 0) {
    console.log((numSlices % numPeople)+ ' people');
  }
}

splitPizza(3, 10); */



