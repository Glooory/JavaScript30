const player = document.querySelector('.player')
const video = player.querySelector('.player-video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const playBtn = player.querySelector('button.toggle');
const ranges = player.querySelectorAll('.player-slider');
const skips = player.querySelectorAll('button[data-skip]');

function updateProgress(e) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleKeyUp(e) {
    if (e.keyCode === 32) {
        togglePlay(e);
    }
}

function togglePlay(e) {
    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }
}

function updatePlayStateButton(e) {
    const icon = this.paused ? '►' : '❚ ❚';
    playBtn.textContent = icon;
}

function handleRangeChange(e) {
    video[this.name] = this.value;
}

function skip(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

window.addEventListener('keyup', handleKeyUp);

video.addEventListener('click', togglePlay);
video.addEventListener('pause', updatePlayStateButton);
video.addEventListener('play', updatePlayStateButton)
video.addEventListener('timeupdate', updateProgress);

let shouldScrub = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => shouldScrub = true);
progress.addEventListener('mouseup', () => shouldScrub = false);
progress.addEventListener('mousemove', (e) => shouldScrub && scrub(e));
playBtn.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('change', handleRangeChange));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeChange));
skips.forEach(button => button.addEventListener('click', skip));