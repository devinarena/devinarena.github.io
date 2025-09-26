
const updateQuickLinksVisibility = () => {
    const root = document.querySelector("#navbar ul");

    if (root.style.getPropertyValue("--quick-links-display") === "flex") {
        root.style.setProperty("--quick-links-display", "none");
    } else {
        root.style.setProperty("--quick-links-display", "flex");
    }
};

const showColorPicker = () => {
    document.querySelector("#colorPicker").click();
}

const updateColor = (color) => {
    document.body.style.setProperty("--link-color", color);
    document.body.style.setProperty("--link-color-hover", `color-mix(in srgb, ${color} 70%, white)`);
    document.body.style.setProperty("--bg-color", `color-mix(in srgb, ${color} 5%, black)`);
    localStorage.setItem("linkColor", color);
}

window.onload = () => {
    for (const star of document.querySelectorAll(".star")) {
        console.log(star);
        let size = Math.random() * 3 + 4;
        star.style = `
            position: absolute;
            top: ${Math.random() * 60}vh;
            left: ${Math.random() * 100}vw;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: white;
            border-radius: 3%;
            box-shadow: 0 0 ${size}px ${size}px white;
            animation: twinkle ${Math.random() * 2 + 0.8}s infinite;
        `;
    }
    const savedColor = localStorage.getItem("linkColor");
    if (savedColor) {
        updateColor(savedColor);
    }
}

