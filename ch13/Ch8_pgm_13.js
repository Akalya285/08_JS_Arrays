// Initial setup
var player1 = {
  name: "Kandra",
  place: "The Dungeon of Doom",
  health: 50,
  items: ["a trusty lamp"]
};

// Function to display player info
var showPlayerInfo = function(player, character) {
  console.log(getPlayerInfo(player, character));
};

// Display initial player info
showPlayerInfo(player1, "=");

// Adding an item
player1.items.push("a rusty key");
console.log("Added 'a rusty key' to player1's items.");
showPlayerInfo(player1, "*");

// Removing an item
var removedItem = player1.items.pop();
console.log("Removed '" + removedItem + "' from player1's items.");
showPlayerInfo(player1, "-");
