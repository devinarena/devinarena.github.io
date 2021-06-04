window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scroll);
});