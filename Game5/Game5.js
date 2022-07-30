const dateInput = document.getElementById("dateInput");
dateInput.addEventListener("change", init);
let inputDate;
let interval;
let saveValue = localStorage.getItem("countDown") || false;
if(saveValue){
    startClock(saveValue);
    console.log(saveValue);
    saveValue = new Date(saveValue);
    console.log(saveValue);
    dateInput.valueAsDate = saveValue;
}

function init() {
    clearInterval(interval);
    inputDate = new Date(dateInput.value);
    startClock(inputDate);
    //console.log(inputDate);
    localStorage.setItem("countDown",inputDate);
}

function startClock(inputDate) {
    interval = setInterval(function () {
        let tempDate = calculations(inputDate);
        if (tempDate.total <= 0) {
            clearInterval(interval);
        } else {
            for (i in tempDate) {
                let el = document.querySelector("." + i);
                if (el) {
                    el.innerHTML = tempDate[i];
                }
            }
        }
    }, 1000);
}

function calculations(inputDate) {
    let nowDate = new Date();
    let tempDate = Date.parse(inputDate) - Date.parse(nowDate);
    //console.log(tempDate);
    let seconds = Math.floor((tempDate / 1000) % 60);
    let minutes = Math.floor((tempDate / (1000 * 60)) % 60);
    let hours = Math.floor((tempDate / (1000 * 60 * 60)) % 24);
    let days = Math.floor(tempDate / (1000 * 60 * 60 * 24));

    return {
        "total": tempDate,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
    }
}