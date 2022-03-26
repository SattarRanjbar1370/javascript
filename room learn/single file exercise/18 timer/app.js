
let timerReverse, elementID, i;
elementID = document.getElementById('Seconds')
i = 30
timerReverse = setInterval(function () {
    if (i === 0) {
        clearInterval(timerReverse)
    }
    console.log(i)
    elementID.innerText = i;
    i--
}, 1000);