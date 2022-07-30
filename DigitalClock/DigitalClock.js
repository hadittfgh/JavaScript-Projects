var clock = document.getElementById("Clock");
var interval = setInterval(MyTime,1000);
function MyTime(){
    clock.innerHTML = new Date().toLocaleTimeString();
}