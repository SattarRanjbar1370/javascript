let receiveData = Number(prompt('please enter one number: '));
while (isNaN(receiveData)) {
    receiveData = Number(prompt('try again enter one number: '));
}
receiveData = String(receiveData);

let arrayRecive = Array.from(receiveData);
console.log(arrayRecive);
console.log('Number of digits : ', arrayRecive.length);
let total = 0;


for (var i = 0; i < arrayRecive.length; i++) {
    total += Number(arrayRecive[i]);
}
console.log(total);