var items = [];
var item = "The Pyramids";
var removed;

// Pushing items onto the array
items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items); // Output the current items array

// Removing an item from the end
removed = items.pop();
console.log(removed + " was removed");

// Output the remaining items joined with " and "
console.log(items.join(" and "));

// Further Adventures:

// 1. Push another item onto the array
items.push("The Taj Mahal");

// 2. Log the joined items after adding the new item
console.log(items.join(" and "));

// 3. Set one of the items using square brackets
items[1] = "Machu Picchu";
console.log(items.join(" and "));

// 4. Test pushing more than one item at a time
items.push("Statue of Liberty", "Great Wall of China");
console.log(items.join(" and "));
