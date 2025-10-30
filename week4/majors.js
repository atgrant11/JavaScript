const major = prompt("Enter your major: ").toLowerCase();

if(major == "computer science" || "web development") {
    alert("Youre one of them smartypants aint ya");
} else if (major.includes("arts") || major == "english") {
    alert("You might be the creatin sort");
} else {
    alert("I aint heard of it but whatever pays the bills");
};

let desiredSalary = prompt("How much would you like to make?");

if (desiredSalary >= 50000 && (major == "computer science" || major == "software development")) {
    alert("You just might be one of them brainiacs");
} else {
    alert("Don't quit your day job")
};