const dailySales = [100, 150, 200, 120, 180, 250, 150]
let totalSales = 0;

for (let i = 0; i < dailySales.length; i++) {
    console.log("Sales for the day " + (i + 1) + ": $" + dailySales[i]);
    totalSales += dailySales[i];
    console.log("The total is now: $" + totalSales);
    console.log(" ");
}

console.log("Total sales for the week: $" + totalSales)