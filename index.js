// guest-score needs to be able to display count each time guest-score-btn is clicked. 
//the same as guest-score, home-score needs to be able to display count each time home-score-btn is clicked.
//we will need to create a function that will display the count for each team.
//we will need to create a function that will reset the count for each team.    
//bonus: we will need to create a function that will display the count for each team and save the count for each team.
let guestScore = 0;
let homeScore = 0;
let count = 0;

guestScoreElement = document.getElementById("guest-score");
homescore = document.getElementById("home-score");

function increaseGuestScoreOne() {
  guestScore++;
  guestScoreElement.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestScoreElement.textContent = guestScore;
}

function increaseGuestScoreThree() {
  guestScore += 3;
  guestScoreElement.textContent = guestScore;
}

function increaseHomeScoreOne() {
  homeScore++;
  homescore.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homescore.textContent = homeScore;
}

function increaseHomeScoreThree() {
  homeScore += 3;
  homescore.textContent = homeScore;
}

function saveAndResetScores() {
  var guestScoreValue = guestScore;
  var homeScoreValue = homeScore;

  alert("Scores have been saved and reset.\n\nGuest Score: " + guestScoreValue + "\nHome Score: " + homeScoreValue);

  guestScore = 0;
  homeScore = 0;

  guestScoreElement.textContent = guestScore;
  homescore.textContent = homeScore;
}
