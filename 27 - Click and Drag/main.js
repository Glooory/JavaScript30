const slider = document.querySelector('.items');
let startX = 0;
let scrolledLeft = 0;
let isMouseDown = false;

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrolledLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
        return;
    }
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const scrolledX = x - startX;
    slider.scrollLeft = scrolledLeft - scrolledX;
});

slider.addEventListener('mouseup', (e) => {
    isMouseDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', (e) => {
    isMouseDown = false;
    slider.classList.remove('active');
});