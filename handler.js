
const bgcheck = document.getElementById("background-button");

/**
 * Handles toggling scroll effect on checkbox press
 */
 bgcheck.onchange = () => {
    for (let layer of document.getElementById("background-container").children) {
        if (bgcheck.checked) {
            layer.className += " noscroll";
        } else {
            layer.className = layer.className.substring(0, layer.className.length - 9);
        }
    }
}