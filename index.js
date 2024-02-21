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

let goToBedLittleBaby = "9684961596159641";
console.log(shouter(goToBedLittleBaby));


