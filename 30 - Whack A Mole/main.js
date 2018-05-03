const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
const startButton = document.querySelector('.start');
let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length)
    const hole = holes[index];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function pop() {
    const duration = randomTime(400, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(function() {
        hole.classList.remove('up');
        if (!timeUp) {
            pop();
        } else {
            startButton.removeAttribute('disabled');
        }
    }, duration);
}

function scoring(e) {
    if (!e.isTrusted) {
        return;
    }
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    startButton.disabled = true;
    pop();
    setTimeout(function() {
        timeUp = true;
    }, 10000);
}

startButton.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', scoring));