//function that generate numbers according to each level
const level = {
  easy: 5,
  medium: 10,
  hard: 100,
  impossible: 1000,
  ridiculous: 1000000,
};

function generateNumber(levelSelection) {
  let displayNumber = Math.floor(Math.random() * levelSelection + 1);
  console.log(displayNumber);
  return displayNumber;
}

generateNumber(level.easy); //OMG it works, holy cow, it works
// Now what lol

// TODO create HTML display for randomly generated number that stays hidden until guess is submitted
const input = {
  easy: document.getElementById("inputEasy"),
  medium: document.getElementById("inputMedium"),
  hard: document.getElementById("inputHard"),
  impossible: document.getElementById("inputImpossible"),
  ridiculous: document.getElementById("inputRidiculous"),
};
//TODO double-check to see if there isn't a more efficient way to code the conditions below
if (input.easy === generateNumber(level.easy.value)) {
  // Select the element with the class "correct"
  const correctAnswer = document.querySelector(".correct");
  // Unhide it by changing its display property
  correctAnswer.style.display = "block";
} else if (input.easy === generateNumber(level.easy.value) + 1) {
  const closeAnswer = document.querySelector(".close");
  closeAnswer.style.display = "block";
} else if (input.easy === generateNumber(level.easy.value) - 1) {
  const closeAnswer = document.querySelector(".close");
  closeAnswer.style.display = "block";
} else {
  const incorrectAnswer = document.querySelector(".close");
  incorrectAnswer.style.display = "block";
}

//Try again button display
//TODO Make this button work and isolate response by level (so not all levels are displaying the section when one is attempted)
// Select the button and the message div
const submitButton = document.querySelector(".submit");
const tryAgain = document.querySelector(".tryAgain");

// Add a click event listener to the button
submitButton.addEventListener("click", () => {
  // Show the hidden portion by changing its display property
  tryAgain.style.display = "block";
});

//TODO create reset fucntion using the tryAgain button to clear inputs but from that level only
