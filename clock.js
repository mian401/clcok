const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

setInterval(() => {

    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    const hourhand = document.getElementById('hour');
    const minhand = document.getElementById('second');
    const sechand = document.getElementById('minute');
    
    let hrotation = 30 * hour + minute / 2;
    let mrotation = minute * 6;
    let srotation = second * 6;

    hourhand.style.transform=`rotate(${hrotation}deg)`
    minhand.style.transform=`rotate(${mrotation}deg)`
    sechand.style.transform = `rotate(${srotation}deg)`
    
    document.getElementById('h').innerHTML = hour;
    document.getElementById('m').innerHTML = minute;
    document.getElementById('s').innerHTML = second;

}, 1000);

