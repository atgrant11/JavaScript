// Andrew Grant 10/30/25
const favMonth = prompt("Enter your favorite month: ");


if (favMonth === null) {
    alert("You didn't enter a month.")
} else {
    switch (favMonth.toLowerCase()) {
        case "january":
            confirm("You entered January? Happy New Year!");
            break;
        case "february":
            confirm("You entered February? Happy Valentine's Day!");
            break;
        case "march":
            confirm("You entered March? Have fun watching college basketball!");
            break;
        case "april":
            confirm("You entered April? Don't get pranked!" );
            break;
        case "may":
            confirm("You entered May? May the Fourth be With You!");
            break;
        case "june":
            confirm("You entered June? Yay summer is here!");
            break;
        case "july":
            confirm("You entered July? Happy Fourth of July!");
            break;
        case "august":
            confirm("You entered August? Seems like the leaves are changing!");
            break;
        case "september":
            confirm("You entered September? Yay fall is here!");
            break;
        case "october":
            confirm("You entered October? Happy Halloween!");
            break;
        case "november":
            confirm("You entered November? Happy Thanksgiving!");
            break;
        case "december":
            confirm("You entered December? Happy Holidays!");
            break;
    }
};

if ( favMonth === "january" || favMonth === "february" || favMonth === "december") {
    alert("You like the winter months!");
} else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
    alert("You like the summer months!");
} else {
    alert("Other months are cool too!");
};


