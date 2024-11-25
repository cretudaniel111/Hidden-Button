let randomNumber = 0

window.onload = (event) => {
    randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
}

function btnClick(elementId) {
    if (elementId == randomNumber) {
        document.getElementById('message').innerHTML = 'Winner!'
    } else {
        document.getElementById('message').innerHTML = 'Loser!'
    }
}

function playAgain() {
    window.location.reload();
}
