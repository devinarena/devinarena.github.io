
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

const toggleProject = (projectClass) => {
    const projectSection = document.querySelector(`.project-section.${projectClass}`);
    if (projectSection.classList.contains("expanded")) {
        projectSection.classList.remove("expanded");
        projectSection.style.maxHeight = `${projectSection.querySelector(".project-header h3").offsetHeight + 12}px`;
        document.querySelector(`.project-section.${projectClass} .toggle-button`).src = "./resources/expand_icon.png";
    } else {
        projectSection.classList.add("expanded");
        projectSection.style.maxHeight = `${projectSection.scrollHeight}px`;
        document.querySelector(`.project-section.${projectClass} .toggle-button`).src = "./resources/close_icon.png";
    }
}

window.onload = () => {
    for (const star of document.querySelectorAll(".star")) {
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
        updateColor(localStorage.getItem("linkColor") ?? "#ff0000");
    }
    document.querySelectorAll(".project-section").forEach((section) => {
        section.style.maxHeight = `${section.querySelector(".project-header h3").offsetHeight + 12}px`;
    });
}

window.onscroll = () => {
    for (const section of document.querySelectorAll(".section")) {
        section.style.opacity = Math.min(1, Math.max(0, (window.scrollY + window.innerHeight - section.offsetTop - 100) / (window.innerHeight / 2)));
        section.style.transform = `translateX(${(section.style.opacity-1) * 100}px)`;
    }
};