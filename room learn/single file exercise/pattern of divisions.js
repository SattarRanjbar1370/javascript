let receiveData = Number(prompt('please enter one number: '));
while (isNaN(receiveData)) {
    receiveData = Number(prompt('try again enter one number: '));
}
receiveData = String(receiveData);

let arrayRecive = Array.from(receiveData);
console.log(arrayRecive);
let total = 0;


// total += Number(arrayRecive[1]);
// console.log(total)
for (var i = 0; i < arrayRecive.length; i++) {
    total += Number(arrayRecive[i]);
}
console.log(total);