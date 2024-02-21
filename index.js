function sayHello(name){
    let greeting = "Hello " + name;

    return greeting;
}

let newGreeting = sayHello("John");

// console.log(newGreeting);

function shouter(someString){
    let theString = someString.toString();
    let loudString = theString.toUpperCase();
    return loudString + "!!!";
}

const goToBedLittleBaby = "go to sleep";
// console.log(shouter(goToBedLittleBaby));

function add(x, y){
    return x + y;
}

// console.log("Add Function", add(1, 2));

let subtract = function(x, y){
    return x - y;
}

// console.log("Subtract Function", subtract(2, 1));

let multiply = function(x, y){
    return x * y;
}

// console.log("Multiply Function", multiply(2, 3));

let divide = (theCarIsSoSlow, theMotorcycleIsVeryFast) => theCarIsSoSlow / theMotorcycleIsVeryFast;

const x = 10;
const y = 2;

// console.log("Divide Function", divide(x, y));

// console.log(x)
// console.log(y)

function fizzBuzz(number){
    // some code
    for(let i = 0; i <= number; i++){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(15);

function fizzBuzzRecursive(num, maxNumber){
    if(num > maxNumber){
        return;
    }
        
    if(num % 15 === 0){
        console.log("FizzBuzz");
    } else if (num % 3 === 0){
        console.log("Fizz");
    } else if (num % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(num);
    }
    fizzBuzzRecursive(num + 1, maxNumber);
}

// fizzBuzzRecursive(1, 15);

function toTitleCase(sentence){
    // split into individual words
    const words = sentence.toLowerCase().split(" ");

    let titleCaseSentence = "";

    for(let i = 0; i < words.length; i++){
        let word = words[i]; // first word in the array
        titleCaseSentence += word[0].toUpperCase() + word.slice(1) + " ";
    }

    return titleCaseSentence.trim(); // remove any trailing spaces
}

let result = toTitleCase("My name is Grammy and I got a really cool hammy.");
console.log(result);
