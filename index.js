let homeEl = document.getElementById('home-score');
let guestEl = document.getElementById('guest-score');
let resetBtn = document.getElementById('reset-btn');
let homeScore = 0;
let guestScore = 0;

// let homeBtn1 = document.getElementById('home-btn-1');
// let homeBtn2 = document.getElementById('home-btn-2');
// let homeBtn3 = document.getElementById('home-btn-3');
// let guestBtn1 = document.getElementById('guest-btn-1');
// let guestBtn2 = document.getElementById('guest-btn-2');
// let guestBtn3 = document.getElementById('guest-btn-3');

// Home Score Buttons
function add1Home() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}
function add2Home() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}
function add3Home() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}
// Guest Score Buttons 
function add1Guest() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}
function add2Guest() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}
function add3Guest() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}

// RESET BUTTON 
function resetAll() {
    // console.log('Button Clicked');
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = 0;
    guestEl.textContent = 0;
}
