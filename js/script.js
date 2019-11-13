// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
let compRPS = ['rock', 'paper', 'scissors'];

$('#shoot').click(function() {
    let userInput = $('#input').val();
    let user = userInput.toLowerCase();
    $('#userChoice').text(user);
    let compChoice = compRPS[Math.floor(Math.random() * compRPS.length)];
    $('#computerChoice').text(compChoice);
    
    if (compChoice === user) {
      $('#result').text('Its a Draw!!! reShoot!');

    }else if (user === 'paper' && compChoice === 'rock') {
      $('#result').text('Paper beats rock!!! User WINS!');
    }else if (compChoice === 'paper' && user === 'rock') {
      $('#result').text('Paper beats rock!!! Computer WINS!');

    }else if (user === 'scissors' && compChoice === 'paper') {
      $('#result').text('Scissors beats paper!!! User WINS!');
    }else if (compChoice === 'scissors' && user === 'paper') {
      $('#result').text('Scissors beats paper!!! Computer WINS!');

    }else if (user === 'rock' && compChoice === 'scissors') {
      $('#result').text('Rock beats scissors!!! User WINS!');
    }else if (compChoice === 'rock' && user === 'scissors') {
      $('#result').text('Rock beats scissors!!! Computer WINS!');
    }
});

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

