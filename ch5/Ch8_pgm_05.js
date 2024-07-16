var reportFriday = getVisitorReport(visitors, 5); // Friday is index 4 (1-based), so dayInWeek = 5
console.log(reportFriday);

var getVisitorReport = function(visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

// Test for Sunday (dayInWeek = 7)
var reportSunday = getVisitorReport(visitors, 7);
console.log(reportSunday);

var getMonthlyVisitorReport = function(monthArray, weekIndex, dayIndex) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var week = monthArray[weekIndex - 1]; // weekIndex is 1-based
  var visitors = week[dayIndex - 1]; // dayIndex is 1-based
  var visitorReport = "There were " + visitors + " visitors on " + days[dayIndex - 1];

  return visitorReport;
};

// Example: Create week arrays and a month array
var week1 = [354, 132, 210, 221, 481, 599, 789];
var week2 = [400, 150, 220, 200, 500, 600, 700];
var week3 = [300, 120, 180, 190, 450, 550, 650];
var week4 = [380, 140, 200, 210, 470, 580, 680];
var monthArray = [week1, week2, week3, week4];

// Test the function for different weeks and days
var reportWeek3Wednesday = getMonthlyVisitorReport(monthArray, 3, 3); // Week 3, Wednesday
console.log(reportWeek3Wednesday);
var reportWeek4Sunday = getMonthlyVisitorReport(monthArray, 4, 7); // Week 4, Sunday
console.log(reportWeek4Sunday);
