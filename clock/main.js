
const clock = document.querySelector("#clock");


function Time(){
    let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}


clock.textContent = hours + ":" + minutes + ":" + seconds;

}
 window.onload = () =>{
    setInterval(Time)
 }
