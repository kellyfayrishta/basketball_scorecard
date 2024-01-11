// increment home score +1 button 

let homeScoreBtnOne = document.getElementById('homeScoreBtnOne');
let homeStoreEl = document.getElementById('home-score');
let homeScore = 0;

function increaseHomeScoreOne() {
    homeScore += 1;
    homeStoreEl.textContent = homeScore
}


// increment home score +2 button 

// get id from the html button click the button
let homeScoreBtnTwo = document.getElementById("homeScoreBtnTwo");
// get the id from the html button to store the score
let homeStoreElTwo = document.getElementById("home-score");

function increaseHomeScoreTwo() {
  // define a variable to increment the score by 2
  homeScore += 2;
  // define a variable to show the increment score when the button is clicked
  homeStoreElTwo.textContent = homeScore;
}


// increment home score +3 button

let homeScoreBtnThree = document.getElementById("homeScoreBtnThree");
// get the id from the html button to store the score
let homeStoreElThree = document.getElementById("home-score");

function increaseHomeScoreThree() {
  // define a variable to increment the score by 3
  homeScore += 3;
  // define a variable to show the increment score when the button is clicked
  homeStoreElThree.textContent = homeScore;
}


// increment guest score +1 button
let guestScoreBtnOne = document.getElementById('guestScoreBtnOne');
let guestStoreEl = document.getElementById('guest-score');
let guestScore = 0;


function increaseGuestScoreOne() {
    guestScore += 1;
    guestStoreEl.textContent = guestScore
}

// increment guest score +2 button

let guestScoreBtnTwo = document.getElementById("guestScoreBtnTwo");
let guestStoreElTwo = document.getElementById("guest-score");

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestStoreElTwo.textContent = guestScore;
}

// increment guest score +3 button

let guestScoreBtnThree = document.getElementById("guestScoreBtnThree");
let guestStoreElThree = document.getElementById("guest-score");

function increaseGuestScoreThree() {
  guestScore += 3;
  guestStoreElThree.textContent = guestScore;
}