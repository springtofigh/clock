// ANALOG CLOCK
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // DIGITAL CLOCK
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('am-pm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let session = "PM";

    // ADD ZERO FOR SINGLE NUMBERS
    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    // SHOW 24 HOUR CLOCK
    if (h > 12) {
        h = h-12;
        ampm.innerHTML = session;
    } else {
        ampm.innerHTML = "AM";
    };

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
})
