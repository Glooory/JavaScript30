const maxWalk = 300;
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
    const centerDot = {
        x: Math.round(text.offsetLeft + text.offsetWidth / 2),
        y: Math.round(text.offsetTop + text.offsetHeight / 2)
    }
    var xWalk = centerDot.x - e.offsetX;
    var yWalk = centerDot.y - e.offsetY;

    if (this !== e.target) {
        xWalk -= text.offsetLeft;
        yWalk -= text.offsetTop;
    }

    xWalk = Math.round(xWalk / centerDot.x * maxWalk);
    yWalk = Math.round(yWalk / centerDot.y * maxWalk);
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.5),
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.5)
        `;
}

hero.addEventListener('mousemove', shadow);