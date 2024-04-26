let hour=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');


function startClock(){
    let t=new Date();

    let hh =t.getHours();
    let mm =t.getMinutes();
    let ss= t.getSeconds();

    let hroted=30*hh+mm/2;
    let mroted=6*mm;
    let sroted=6*ss;

    hour.style.transform=`rotate(${hroted}deg)`;
    min.style.transform=`rotate(${mroted}deg)`;
    sec.style.transform=`rotate(${sroted}deg)`;


}
setInterval(startClock,1000);