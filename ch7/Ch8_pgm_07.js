var items;
var showInfo;
var totalLetters;

// 1. Adding extra items to the array
items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

items.push("Eiffel Tower");
items.push("Great Wall of China", "Machu Picchu");

// 2. Updating showInfo function to display item and its length
showInfo = function(itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

// Iterating over items array and calling showInfo for each item
console.log("Items:");
items.forEach(showInfo);

// 3. Writing a function to find the total number of letters in items array
totalLetters = function() {
    var total = 0;
    items.forEach(function(item) {
        total += item.length;
    });
    return total;
};

console.log("Total number of letters in all items: " + totalLetters());
