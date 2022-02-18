

let prompTime, timexon, timeshet, selectTime, timeLet, tagSelect, dayCounter, dayCounter2;
prompTime = Number(prompt('enter one noumber'));
timexon = prompTime / 60;
timeLet = Math.floor(timexon);
timeshet = prompTime % 60;
selectTime = timeLet + ' hours and ' + timeshet + ' minutes';
tagSelect = document.getElementById('box');

if (timeLet > 24) {
    dayCounter = timeLet / 24;
    dayCounter = Math.floor(dayCounter);
    timeLet = timeLet % 24;
    selectTime = dayCounter + ' day and ' + timeLet + ' hours and ' + timeshet + ' minutes';
    tagSelect.innerHTML = '<div class="box_center">' + selectTime + '</div>';
} else {
    tagSelect.innerHTML = '<div class="box_center">' + selectTime + '</div>';
}

