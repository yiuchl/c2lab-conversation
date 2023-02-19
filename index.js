let observerOptions = {
    rootMargin: '0px',
    threshold: .11
}

var observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('entry', entry)
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    });
};

let target = '.peekaboo';
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});

//room and door metaphor