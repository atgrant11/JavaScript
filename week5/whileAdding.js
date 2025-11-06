let num = 0;
let sum = 0;

num = parseInt(prompt("Enter a number. Enter 0 or a negative to stop: "));

while (num >= 0) {
    sum += num;
    if (num >= 0) {
        num = parseInt(prompt("Enter a number. Enter 0 or a negative to stop: "));
    }
}

console.log("The sum of entered numbers is " + sum);