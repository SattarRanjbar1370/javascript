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

console.log(basicExponent[0] + ' ** ' + basicExponent[1] + ' = ' + calculateNumbers);