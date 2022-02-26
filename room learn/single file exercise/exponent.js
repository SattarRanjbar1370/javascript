// exponent

let basicExponent, Exponent, counter;

basicExponent = new Array();
counter = 0;
Exponent = 0;
while (counter < 2){
    basicExponent.push(Number(prompt('please enter one number:')));
    if(isNaN(basicExponent[counter])){
        basicExponent.push(Number(prompt('please try again enter one number:')));
    }
    counter++;
}
console.log(basicExponent)