let calculatorContent = document.getElementById("answer");
let aC = document.getElementById("ac");
let polarity = document.getElementById("polarity");
let percent = document.getElementById("%");
let division = document.getElementById("/");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let times = document.getElementById("*");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let minus = document.getElementById("-");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let plus = document.getElementById("+");
let zero = document.getElementById("0");
let period = document.getElementById(".");
let equals = document.getElementById("equals");
//let keyboard = document.getElementById("keyboard");
let keyboard = document.getElementById("keyboard");
let whatsDisplayed = [];
let memory = [];
keyboard.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")) {
        //console.log(e.target)
        //whatsDisplayed.push(e.target.id)
        //console.log(whatsDisplayed.join(""))
        memory.push(e.target.id);
        calculatorContent.innerHTML = memory.join("");  
    }
    if(e.target.classList.contains("operator")) {
      memory.push(e.target.id) 
      console.log(memory)  
      calculatorContent.innerHTML = memory.join(""); 
    }
    if (memory.length > 0) {
        aC.innerText = "C"
    }
    
});


aC.addEventListener("click", (e) => {
    console.log("acclicked");
    whatsDisplayed.length = 0;
    memory.length = 0;
    console.log(whatsDisplayed);
    console.log(memory)
    calculatorContent.innerHTML = "0";
    aC.innerText = "AC"
});

equals.addEventListener("click", (e) => {
    let calculation = eval(memory.join(""));
    console.log(calculation);
    calculatorContent.innerHTML = calculation;
    memory= [calculation];
})


