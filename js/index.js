// Your code goes here
let logo = document.getElementsByClassName('logo-heading');
let images = document.querySelectorAll('img');
let signUpButton = document.getElementsByClassName('btn');
let destinationText = document.querySelector('.content-destination h2');

// Callback Functions

function blueFont(event){
    event.target.style.color = 'blue';
}

function pinkBackground(event){
    event.target.style.background = 'pink';    
  };

function hideTarget(event){
    event.target.style.display = 'none';
}


// Event Listeners

// mouseover
logo[0].addEventListener('mouseover', blueFont);

// click
for (i = 0; i < signUpButton.length; i++){
signUpButton[i].addEventListener('click', pinkBackground)};

// tried keydown and select - did not work
destinationText.addEventListener('click', hideTarget);