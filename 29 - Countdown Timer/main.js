const timeLeftElement = document.querySelector('.display-time-left');
const endTimeElement = document.querySelector('.display-end-time');
let countdownInterval;

function startCountdown(seconds) {
    clearInterval(countdownInterval);
    const then = Date.now() + seconds * 1000;
    displayLeftTime(seconds);
    displayEndTime(then);
    countdownInterval = setInterval(function() {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdownInterval);
            return;
        }
        displayLeftTime(secondsLeft);
    }, 1000);
}

function displayLeftTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const content = `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    document.title = content;
    timeLeftElement.textContent = content;
}

function displayEndTime(endTime) {
    const date = new Date(endTime);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()
    const content = `Be back at ${hour < 10 ? '0' : ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    endTimeElement.textContent = content;
}

function startTimer() {
    startCountdown(this.dataset.time);
}

document.querySelectorAll('[data-time]').forEach(element => element.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    startCountdown(this.minutes.value * 60);
    this.reset();
});