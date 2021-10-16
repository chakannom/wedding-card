function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function countdown() {
    const weddingDate = new Date('12 Feb 2022 12:00:00 GMT+0900');
    const nowDate = new Date();

    const totalSeconds = (weddingDate - nowDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('clock-days').innerText = formatTime(days);
    document.getElementById('clock-hours').innerText = formatTime(hours);
    document.getElementById('clock-minutes').innerText = formatTime(minutes);
    document.getElementById('clock-seconds').innerText = formatTime(seconds);
}

setInterval(countdown, 1000);