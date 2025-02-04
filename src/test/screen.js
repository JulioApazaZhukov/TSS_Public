function getFullscreenElement() {
    return document.fullscreenElement 
    || document.webkitFullscreenElement 
    || document.mozFullScreenElement 
    || document.msFullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen().catch((e) => {
            console.log("Exit fullscreen error");
        });
    } else {
        document.documentElement.requestFullscreen().catch((e) => {
            console.log("Fullscreen error");
        });
    }
}

document.addEventListener("dblclick", () => {
    toggleFullscreen();
});

document.addEventListener("fullscreenchange", () => {
    if (getFullscreenElement()) {
        console.log("Entered fullscreen");
    } else {
        console.log("Exited fullscreen");
    }
});