// exponent

let basicExponent, Exponent, counter, calculateNumbers;

basicExponent = new Array();
counter = 0;
Exponent = 0;
while (counter < 2) {
    basicExponent.push(Number(prompt('please enter one number:')));
    if (isNaN(basicExponent[counter])) {
        basicExponent.push(Number(prompt('please try again enter one number:')));
    }
    counter++;
}
console.log(basicExponent);

calculateNumbers = basicExponent[0] ** basicExponent[1];
let displayUser = basicExponent[0] + ' to the power of ' + basicExponent[1] + ' = ' + calculateNumbers;

console.log(displayUser);

let bodyTag, divContiner, divBox;

bodyTag = document.getElementById('body');
bodyTag.innerHTML = '<div class="continer" id="continere"></div>';
divContiner = document.getElementById('continere');
divContiner.innerHTML = '<div id="box1">' + displayUser + '</div><div id="box2">User input: ' + basicExponent + '</div>';