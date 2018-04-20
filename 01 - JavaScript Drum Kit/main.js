function playSound(e) {
    const keyCode = e.keyCode;
    const key = document.querySelector(`.key[data-key="${keyCode}"`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"`);
    if (!audio) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }

    e.target.classList.remove('playing');
}

var keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);