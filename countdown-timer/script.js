const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const aguinaldo = '15 Dec 2022';

function countdown(){
    const aguinaldoFecha = new Date(aguinaldo);
    const hoy = new Date();

    const seconds = (aguinaldoFecha - hoy)/1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds/60) % 3600 % 24;
    const secs = Math.floor(seconds) % 3600 % 24;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(secs);
}

function formatTime(time){
    return time < 10 ? (`0${time}`):time;
}
countdown();
setInterval(countdown, 1000);