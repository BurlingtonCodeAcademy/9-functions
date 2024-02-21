function sayHello(name){
    let greeting = "Hello " + name;

    return greeting;
}

let newGreeting = sayHello("John");

console.log(newGreeting);

function shouter(someString){
    let theString = someString.toString();
    let loudString = theString.toUpperCase();
    return loudString + "!!!";
}

const goToBedLittleBaby = "go to sleep";
console.log(shouter(goToBedLittleBaby));

function add(x, y){
    return x + y;
}

console.log("Add Function", add(1, 2));

let subtract = function(x, y){
    return x - y;
}

console.log("Subtract Function", subtract(2, 1));

let multiply = function(x, y){
    return x * y;
}

console.log("Multiply Function", multiply(2, 3));

let divide = (theCarIsSoSlow, theMotorcycleIsVeryFast) => theCarIsSoSlow / theMotorcycleIsVeryFast;

const x = 10;
const y = 2;

console.log("Divide Function", divide(x, y));

console.log(x)
console.log(y)