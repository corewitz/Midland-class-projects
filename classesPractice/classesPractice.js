/*let array1 = [1,10,5]
let array2 = [6,2,8]
let array3 = [...array1, ...array2];
console.log(array3);

let array3Sorted = array3.sort(function (a, b) {  return a - b;  });
console.log(array3Sorted);

let array3SortedArrowStyle = array3.sort((a,b) => a - b)

console.log(array3SortedArrowStyle); */


 class Animal {
   constructor(name) {
    this.name = name;
   } 

   speak() {
    console.log(`${this.name} makes a noise.`);
  }

 }

 class Cat extends Animal {
   constructor(name) {
    super(name);
   }
   speak() {
    console.log(`${this.name} meows.`);
   }
 }

 class Snake extends Animal {
   constructor(name) {
    super(name);
    }
       speak() {
        console.log(`${this.name} hisses.`);
       }
 }

 class OrangeCat extends Cat {
    constructor(name) {
        super(name);
       }

     }
 

 class BlackCat extends Cat{
    constructor(name) {
        super(name);
       }

     
 }

 class YellowSnake extends Snake {
    constructor(name) {
        super(name);
       }
 
     
 }

 class RedSnake extends Snake {
    constructor(name) {
        super(name);
       }

 }

const Aiden = new BlackCat('Aiden');
Aiden.speak();

const Voldemort = new RedSnake('Voldemort');
Voldemort.speak();