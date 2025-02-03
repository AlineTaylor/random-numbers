//Ingredients
//Declaring level limits
const level = {
  easy: 5,
  medium: 10,
  hard: 100,
  impossible: 1000,
  ridiculous: 1000000,
};
//Calling inputs values from dom
//TODO test the '.value' added!
const input = {
  easy: document.getElementById("inputEasy").value,
  medium: document.getElementById("inputMedium").value,
  hard: document.getElementById("inputHard").value,
  impossible: document.getElementById("inputImpossible").value,
  ridiculous: document.getElementById("inputRidiculous").value,
};

//Call submit buttons and number display
//TODO isolate button response by level (so not all levels are displaying the section when one is attempted)
const submitButton = document.querySelectorAll(".submit");
const generatedNum = document.querySelectorAll(".generatedNum");
const tryAgain = document.querySelector(".tryAgain");

//Recipe
//function that generates numbers according to each level then displays it //TODO test the display
function generateNumber(levelSelection) {
  let displayNumber = Math.floor(Math.random() * levelSelection + 1);
  console.log(displayNumber);
  generatedNum.textContent = displayNumber;
  return displayNumber;
}

//TODO if the display works, add display to other levels as well and differentiate based on level?
//TODO think of ways to maximize function efficiency by reusing for all levels - maybe reference the RPS project on the videos to see how he went about it

generateNumber(level.easy); //OMG it works, holy cow, it works!...Now what lol

//Event listener to generate random numbers at the click of the submit button and display Try again button
submitButton.addEventListener("click", () => {
  generateNumber(/*TODO find a way to target the level the button is in*/);
  tryAgain.style.display = "block";
});

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

//TODO create reset fucntion using the tryAgain button to clear inputs but from that level only
