
let timerReverse, elementID, elementIdMin, counterSecond, counterMin, counterHour, sec;
elementID = document.getElementById('Seconds');
elementIdMin = document.getElementById('minuts');


counterMin = +prompt('enter the time (minute) from 1 to 60: ');
while (counterMin <= 0 && counterMin >= 59) {
    counterHour = prompt('error \nenter the time (minute) from 1 to 59:');
}
counterSecond = +prompt('enter the time (second) from 1 to 60: ');
while (counterSecond <= 0 && counterSecond >= 59) {
    counterHour = prompt('error \nenter the time (second) from 1 to 59:');
}

timerReverse = setInterval(function () {
    if (counterSecond !== 0) {
        sec = counterSecond;
        counterSecond = 0;
    } else if (sec === -1) {
        counterMin--;
        sec = 59;
    }

    if (sec === 0 && counterMin === 0) {
        clearInterval(timerReverse);
    }


    elementID.innerText = sec;
    elementIdMin.innerText = counterMin;
    sec--;
}, 1000);