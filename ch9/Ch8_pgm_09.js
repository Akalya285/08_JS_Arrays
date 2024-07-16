var players;
var showArguments;

// 1. Adding two more names to the players array
players = ["Dax", "Jahver", "Kandra"];
players.push("Blinky", "Grox");

// 2. Running the program to observe the output
showArguments = function(item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
};

players.forEach(showArguments);

// 3. Modifying the showArguments function
console.log("\nModified showArguments function:");
showArguments = function(item, index, wholeArray) {
    console.log("Current item in array: " + wholeArray[index]);
};

players.forEach(showArguments);
