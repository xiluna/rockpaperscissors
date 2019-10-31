// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
let compRPS = ['rock', 'paper', 'scissors'];

$('#shoot').click(function() {
    let userInput = $('#input').val();
    $('#userChoice').append(userInput);
    let compChoice = compRPS[Math.floor(Math.random() * compRPS.length)];
    console.log(compChoice);
});

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

