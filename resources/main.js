
const updateQuickLinksVisibility = () => {
    const root = document.querySelector("#navbar ul");

    if (root.style.getPropertyValue("--quick-links-display") === "flex") {
        root.style.setProperty("--quick-links-display", "none");
    } else {
        root.style.setProperty("--quick-links-display", "flex");
    }
};