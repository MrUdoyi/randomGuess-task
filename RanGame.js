const randomNumber = Math.floor(Math.random() *10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');

    if (userGuess === randomNumber){
        message.textContent = 'You guessed correctly';
    }else if (userGuess > randomNumber){
        message.textContent = 'Number too high';
    }else{
        message.textContent = 'Number too low';
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        message.textContent = '';
    }, 7000);

}