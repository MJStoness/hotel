const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if ( entry.isIntersecting ) {
            entry.target.classList.remove('hidden');
        } else if ( entry.boundingClientRect.top > 0 ) {
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: [.2, 1] });

const animElements = document.querySelectorAll(".anim");
animElements.forEach(element => observer.observe(element));