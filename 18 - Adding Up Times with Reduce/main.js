const videos = Array.from(document.querySelectorAll('li[data-time]'));

const totalSeconds = videos.map(video => video.dataset.time)
    .map(time => {
        const [mins, secs] = time.split(':').map(parseFloat);
        return mins * 60 + secs;
    })
    .reduce((total, seconds) => total + seconds);

let seconds = totalSeconds;
const hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;
const mins = Math.floor(seconds / 60);
seconds = seconds % 60;

console.log(`${hours}h ${mins}m ${seconds}s`);