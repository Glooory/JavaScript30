const dropdownTriggers = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdown-background');
const nav = document.querySelector('.top');

function enterTrigger(e) {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 150);

    const dropdownCoords = this.querySelector('.dropdown').getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    let bgCoords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }
    dropdownBackground.style.width = `${bgCoords.width}px`;
    dropdownBackground.style.height = `${bgCoords.height}px`;
    dropdownBackground.style.transform = `translate(${bgCoords.left}px, ${bgCoords.top}px)`;
    dropdownBackground.classList.add('open');
}

function leaveTrigger(e) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBackground.classList.remove('open');
}

dropdownTriggers.forEach(trigger => trigger.addEventListener('mouseenter', enterTrigger));
dropdownTriggers.forEach(trigger => trigger.addEventListener('mouseleave', leaveTrigger));