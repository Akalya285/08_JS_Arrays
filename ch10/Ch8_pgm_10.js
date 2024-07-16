// Step 1: Create an array of rectangle objects
var rectangles = [
  { length: 5, width: 3 },
  { length: 8, width: 4 },
  { length: 6, width: 6 }
];

// Step 2: Define an assignArea function
var assignArea = function(rectangle) {
  rectangle.area = rectangle.length * rectangle.width;
};

// Step 3: Define a showInfo function
var showInfo = function(rectangle) {
  console.log("Rectangle:");
  console.log("Length: " + rectangle.length);
  console.log("Width: " + rectangle.width);
  console.log("Area: " + rectangle.area);
  console.log("------------------");
};

// Step 4: Use forEach to display info about each rectangle
rectangles.forEach(function(rectangle) {
  assignArea(rectangle); // Assign area to each rectangle
  showInfo(rectangle);   // Display info about each rectangle
});
