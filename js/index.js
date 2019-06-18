// Your code goes here
let logo = document.getElementsByClassName('logo-heading')[0];
let headerImage = document.querySelector('.intro img');
let signUpButton = document.getElementsByClassName('.btn');


// Callback Functions

// Change the font color
function fontColor(event){
    event.target.style.color = 'blue';
}


// Event Listeners

logo.addEventListener('mouseover', fontColor);
