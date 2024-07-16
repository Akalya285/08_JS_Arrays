var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log(days[dayInWeek]);       // Display "Friday"
console.log(days[dayInWeek - 1]);   // Display "Thursday"

// 1. Change the value of dayInWeek to display a different day
dayInWeek = 2;
console.log(days[dayInWeek]);       // Display "Wednesday"

// 2. Write a function to get the day of the week by index
var getDay = function(dayIndex) {
    return days[dayIndex];
};

// 3. Call the function with 4 as the day of the week
console.log(getDay(4));             // Display "Friday"
