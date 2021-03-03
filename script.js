// let bar = container.getElementsByTagName("div")[0];

let container = document.getElementsByClassName("bottomProgressBar")[0];
let hover = false;
let time = 1;

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    time = 1;
});

container.addEventListener('mouseenter', (e) => {
    hover = true;
});

container.addEventListener('mouseleave', (e) => {
    hover = false;
});

setInterval(() => {
    if(!hover) {
        if (time > 0.1)
            time -= 0.025;
    } else
        time = Math.min(time + 0.05, 1);
    document.body.style.setProperty('--time', time);
}, 1000 / 60);