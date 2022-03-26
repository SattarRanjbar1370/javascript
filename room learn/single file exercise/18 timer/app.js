
let timerReverse, elementID, counterSecond, counterMin, counterHour;
counterHour = +prompt('enter the time (hour) from 1 to 24:');
counterMin = +prompt('enter the time (minute) from 1 to 60: ');
counterSecond = +prompt('enter the time (second) from 1 to 60: ');


elementID = document.getElementById('Seconds')
i = 59
timerReverse = setInterval(function () {
    if (i === 0) {
        clearInterval(timerReverse)
    }
    console.log(i)
    elementID.innerText = i;
    i--
}, 1000);