var scores;
var names;

scores = [3, 1, 8, 2];
names = ["Kandra", "Dax", "Blinky"];

// 1. Add an extra element to each array
scores.push(5);
names.push("Zoey");

console.log(scores); // [3, 1, 8, 2, 5]
console.log(names);  // ["Kandra", "Dax", "Blinky", "Zoey"]

// 2. Declare a third variable, akaScores
var akaScores;

// 3. Assign the scores array to akaScores
akaScores = scores;

// 4. Log akaScores to the console
console.log(akaScores); // [3, 1, 8, 2, 5]
