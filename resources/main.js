
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

const openProject = (projectClass) => {
    document.querySelector("#terrain").classList.add("growing");
    document.querySelector("#terrainGlow").classList.add("growing");
    document.querySelector("#navbar").style.opacity = "0.0";
    const sections = document.querySelectorAll("#content > div");
    sections.forEach(section => {
        section.style.opacity = "0.0";
    });
    setTimeout(() => {
        document.querySelector(`.project-section.${projectClass}`).style.display = "flex";
    }, 900);
    setTimeout(() => {
        document.querySelector("#content").classList.add("expanded");
        document.querySelector(`.project-section.${projectClass}`).style.opacity = "1.0";
    }, 1000);
}

const closeProject = () => {
    document.querySelector("#terrain").classList.remove("growing");
    document.querySelector("#terrainGlow").classList.remove("growing");
    document.querySelector("#navbar").style.display = "flex";
    setTimeout(() => {
        document.querySelector("#navbar").style.opacity = "1.0";
    }, 1000);
    const sections = document.querySelectorAll("#content > div");
    sections.forEach(section => {
        section.style.removeProperty("display");
    });
    setTimeout(() => {
        document.querySelector("#content").classList.remove("expanded");
        sections.forEach(section => {
            section.style.opacity = "1.0";
        });
    }, 1000);
    document.querySelectorAll(`.project-section`).forEach(section => {
        section.style.opacity = "0.0";
        section.style.display = "none";
    });
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
        updateColor(savedColor);
    }
    const toUpdate = [];
    document.querySelectorAll("#content > div").forEach(section => toUpdate.push(section));
    toUpdate.push(document.querySelector("#navbar"));
    toUpdate.push(document.querySelector("#footer"));
    toUpdate.forEach(item => {
        item.addEventListener("transitionend", event => {
            if (event.propertyName === "opacity") {
                if (parseFloat(item.style.opacity) >= 0.99) {
                    item.style.removeProperty("display");
                } else {
                    item.style.display = "none";
                }
            }
        });
    });
}