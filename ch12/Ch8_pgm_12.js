// Step 1: Add two more question objects
var question2 = {
  question: "Which planet is known as the Red Planet?",
  answers: [
      "Mars",
      "Jupiter",
      "Neptune",
      "Mercury"
  ],
  correctAnswer: "Mars"
};

var question3 = {
  question: "What is the largest ocean on Earth?",
  answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
  ],
  correctAnswer: "Pacific Ocean"
};

// Step 2: Create an array with your question objects
var questions = [question1, question2, question3];

// Step 3: Use forEach to call displayQuestion on each question
questions.forEach(function(question, index) {
  console.log("\nQuestion " + (index + 1) + ":");
  displayQuestion(question);
});

// Step 4: Optionally, execute a command to display a particular question
// For example, to display the second question (index 1):
console.log("\nDisplaying the second question:");
displayQuestion(questions[1]);
