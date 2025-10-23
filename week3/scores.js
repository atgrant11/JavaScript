//Friends
let Andrew = 95;
let Sam = 87;

// Comparison Vars
let compareAndrew = Andrew > Sam;
let compareSam = Andrew < Sam;

console.log("Is Andrew greater than Sam? " + compareAndrew);
console.log("Is Andrew less than Sam? " + compareSam);

let notEqual = Andrew != Sam;
console.log("Is Andrew score not equal to Sam? " + notEqual);

console.log("--------------------");
// Loose Equality
console.log(7 == "7");
console.log(0 == false);
console.log(0 == "");

// Strict Equality
console.log(7 === "7");
console.log(0 === false);
console.log(0 === "");