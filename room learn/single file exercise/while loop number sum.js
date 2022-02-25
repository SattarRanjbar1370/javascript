let division, remaining, i, divisionPass, sumWhile;

divisionPass = prompt('please enter number');
while (isNaN(divisionPass)) {
    divisionPass = Number(prompt('please try again enter number'));
}
sumWhile = 0;
division = Number(divisionPass);
console.log('Recived number: ' + division);
i = 0;
console.log(isNaN(division));
console.log(typeof (division));
console.log('-----------------------------');


while (i < divisionPass.length) {

    remaining = division % 10;
    division = division / 10;
    division = Math.floor(division);
    console.log(division);
    console.log(remaining + ' <<<<');
    i++;
    console.log('-----------------------------');
    sumWhile += remaining;
}
console.log('sum >>>>>>  ' + sumWhile);