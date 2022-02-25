// an even number

let receiveNumber, validition, division, oddNumber;

receiveNumber = new Array();
division = new Array();
oddNumber = new Array();
validition = confirm('Do you have a data to import?');
while (validition == true) {
    receiveNumber.push(prompt());
    validition = confirm('Do you have a data to import?');
    // console.log(receiveNumber);
}
console.log('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-');
console.log(receiveNumber);
console.log(receiveNumber.length);
console.log('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-');

for (var i = 0; i < receiveNumber.length; i++) {
    if (Number(receiveNumber[i] % 2) == 0) {
        division.push(receiveNumber[i]);
    }else{
        oddNumber.push(receiveNumber[i]);
    }
}

console.log('division >>> ' + oddNumber);
console.log('oddNumber >>> ' + division);