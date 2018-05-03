const speed = document.querySelector('.speed');
const speedIndicator = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const minRate = 0.5;
const maxRate = 5;
let isMouseDown = false;

function handleSpeedChange(e) {
    const y = e.pageY - speed.offsetTop;
    const weight = (y / speed.offsetHeight);
    const rate = (weight * (maxRate - minRate) + minRate).toFixed(1);
    speedIndicator.textContent = `${rate}x`;
    speedIndicator.style.height = `${Math.round(weight * 100)}%`;
    video.playbackRate = rate;
}

speed.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    handleSpeedChange(e);
});

speed.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
        return;
    }

    handleSpeedChange(e);
});

speed.addEventListener('mouseup', (e) => {
    isMouseDown = false;
});

speed.addEventListener('mouseleave', (e) => {
    isMouseDown = false;
});