// Your code goes here
let logo = document.getElementsByClassName('logo-heading');
let images = document.querySelectorAll('img');
let signUpButton = document.getElementsByClassName('btn');
let destinationHeader = document.querySelector('.content-destination h2');
let words = document.getElementsByTagName('p');
let headers = document.querySelectorAll('h2');

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

function changeText(element){
    element.innertext = 'Text has changed!';
}

function coolText(event){
    event.target.innerText = 'Melissa is an awesome developer';
}


// Event Listeners

// mouseover
logo[0].addEventListener('mouseover', blueFont);

// keydown
for (i = 0; i < signUpButton.length; i++){
signUpButton[i].addEventListener('keydown', pinkBackground)};

//dblclick
for(i=0; i < headers.length; i++){
    headers[i].addEventListener('dblclick', coolText)};

