

let prompTime, timexon, timeshet, selectTime, timeLet, tagSelect;
prompTime = Number(prompt('enter one noumber'));
timexon = prompTime / 60;
timeLet = Math.floor(timexon);
timeshet = prompTime % 60;
selectTime = timeLet + ' : ' + timeshet;
console.log(selectTime);

tagSelect = document.getElementById('box');
tagSelect.innerHTML = '<div class="box_center">' + selectTime + '</div>';