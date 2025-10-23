// Generate a random number 1-10
 let randomNumber = Math.floor(Math.random() * 10) + 1;
 
 //Prompt user for their guess
 let guess = prompt("Guess a number between 1-10:");

//Convert the guess to a number
guess = parseInt(guess);

//Check if guess is correct
if (guess === randomNumber) {
    alert("You guessed it!")
} else if (guess > randomNumber) {
    alert("Your guess is greater than the number. It was " + randomNumber);
} else if (guess < randomNumber) {
    alert("Your guess is less than the number. It was " + randomNumber);
} else {
    alert("You broke it dawg idk")
}