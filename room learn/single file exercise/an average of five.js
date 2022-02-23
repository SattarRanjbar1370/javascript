// an average of five
let receiveData = Array();
for (var i = 0; i < 5; i++) {
    receiveData[i] = Number(prompt('enter one number :'));
    while (isNaN(receiveData[i])) {
        receiveData[i] = Number(prompt('Try again :'));
    }
}
console.log(receiveData);
let avregeArray = 0;

for (var x = 0; x < receiveData.length; x++) {
    console.log('Commodity prices '+ (x+1) + ' : '+receiveData[x]);
    avregeArray += receiveData[x];
}

console.log(avregeArray);