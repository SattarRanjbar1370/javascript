// an even number

let receiveNumber, validition, division;

receiveNumber = new Array();
validition = confirm('Do you have a data to import?');
while(validition == true){
    receiveNumber.push(prompt());
    validition = confirm('Do you have a data to import?');
    console.log(receiveNumber);
}
