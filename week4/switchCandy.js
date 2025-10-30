let favCandy = prompt ("What is your favorite Halloween candy?");

if (favCandy === null) {
    alert("You canceled, no candy for you!")
} else {
    switch (favCandy.toLowerCase()) {
        case "skittles":
            confirm("Taste the rainbow!");
            break;
        case "twix":
            confirm("Left side or right side?");
            break;
        case "reeses":
            confirm("peanut butter chocolate flavor");
            break;
        case "hershey":
            confirm("classic");
            break;
        default:
            confirm("sounds really good");
    }
};