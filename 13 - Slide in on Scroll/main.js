const images = document.querySelectorAll('img.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}

function checkSlide(e) {
    images.forEach(img => {
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrollPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkSlide);