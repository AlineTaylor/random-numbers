// drafting generator and response commands for level easy first
let easyNum = Math.random()*10;
// TODO generate script to generate numbers according to each level
// TODO create HTML display for randomly generated number that stays hidden until guess is submitted
const inputEasy = document.getElementById("inputEasy");
//TODO double-check to see if ther isn't a more efficient way to code the conditions below
if (inputEasy === easyNum){
  // Select the element with the class "correct"
  const correctAnswer = document.querySelector('.correct');
  // Unhide it by changing its display property
  correctAnswer.style.display = 'block';
} else if (inputEasy === easyNum+1){
    const closeAnswer = document.querySelector('.close');
    closeAnswer.style.display = 'block';
} else if (inputEasy === easyNum-1){
    const closeAnswer = document.querySelector('.close');
    closeAnswer.style.display = 'block';
} else (inputEasy > easyNum+1){
    const incorrectAnswer = document.querySelector('.close');
    incorrectAnswer.style.display = 'block';
}

//Try again button display
//TODO Make this button work and isolate response by level (so not all levels are displaying the section when one is attempted)
// Select the button and the message div
const submitButton = document.querySelector('.submit');
const tryAgain = document.querySelector('.tryAgain');

// Add a click event listener to the button
submitButton.addEventListener('click', () => {
    // Show the hidden portion by changing its display property
    tryAgain.style.display = 'block';
});

//TODO create reset fucntion using the tryAgain button to clear inputs but from that level only