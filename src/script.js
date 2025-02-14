function updateCandle(open, close, high, low) {
    const body = document.querySelector('.candle-body');
    const wick = document.querySelector('.candle-shadow');

    const isBullish = close > open;
    const bodyHeight = Math.abs(close - open) * 3;
    const wickHeight = (high - low) * 3;
    const wickTopOffset = (Math.min(open, close) - low) * 3;

    body.style.height = `${bodyHeight}px`;
    body.style.backgroundColor = isBullish ? 'rgba(36,161,106,255)' : 'rgba(204,47,61,255)';

    wick.style.height = `${wickHeight}px`;
    wick.style.backgroundColor = isBullish ? 'rgba(36,161,106,255)' : 'rgba(204,47,61,255)';
    wick.style.top = `-${wickTopOffset}px`;
}

// Example usage: updateCandle(open, close, high, low)
updateCandle(100, 110, 115, 95);

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