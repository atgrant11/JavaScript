let user = "John";

function showMessage() {
    user = "Bob";
    let message = "Hello, " + user;
    console.log(message)
}

showMessage();

// JS checks for local variables first, then checks for global if no local variables are present
// If both are present, JS defaults to local variables

function addNums(a , b) {
    const sum = a + b;
    return sum;
}

addNums(1 , 2);
console.log(sum);