let password;
let tries = 0;

do {
    password = prompt("Enter a password:");
    tries++;
} while (password !== "collargate" && tries < 3);

if (password === "collargate") {
    alert("Welcome!")
} else {
    alert("Too many tries! Sorry.")
}