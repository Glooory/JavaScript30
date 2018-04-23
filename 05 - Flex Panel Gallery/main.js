const panels = document.querySelectorAll('.panel');

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        e.target.classList.toggle('active');
    }
}

function toggleOpen(e) {
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));