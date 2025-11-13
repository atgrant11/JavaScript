function sayHello(friendList) {
    let count = 0;
    for (i = 0; i < friendList.length; i++) {
        let friend = friendList[i];
        console.log("Hello, " + friend + "!");
        count++;
    }

    console.log("Number of friends greeted: " + count);

    return "All friends have been greeted!";
};

let myFriends = ["Donny", "Lori", "Braedon", "Jena", "Collin"];

let message = sayHello(myFriends);

console.log(message);