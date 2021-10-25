window.onload = () => {
    document.body.style.setProperty('--scroll', 0);
    document.getElementById("home-button").style.setProperty('opacity', 'calc(max(var(--scroll) - 0.25, 0) * 4 / 3)');
}

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scroll);

    // handles the scroll up button
    // if (scroll == 0) {
    //     document.getElementsByClassName('home-button')[0].style.visibility = "hidden";
    // } else {
    //     document.getElementsByClassName('home-button')[0].style.visibility = "visible";
    // }
});