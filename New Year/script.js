const newYear = "1/1/2025";

const daysE1 = document.querySelector('.day');
const hourE1 = document.querySelector('.hour');
const minuteE1 = document.querySelector('.minute');
const secondE1 = document.querySelector('.seconds');

function timeCountDown() {
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.textContent = formatTime(days);
    hourE1.textContent = formatTime(hours);
    minuteE1.textContent = formatTime(minutes);
    secondE1.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);
