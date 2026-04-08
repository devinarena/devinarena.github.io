document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');
    if(!items.length) return;
    const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
        if (e.isIntersecting){
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    })
    }, {threshold: 0.15});
    items.forEach(i => obs.observe(i));
});