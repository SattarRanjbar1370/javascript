// loop --> for and while
// array


let nameArray = [];
let peapleName, nameArrayTest;

nameArrayTest = confirm('آیا اسمی برای ثبت دارید؟');

while (nameArrayTest == true) {
    peapleName = prompt("یک نام وارد کنید");
    nameArray.push(peapleName);
    nameArrayTest = confirm('آیا اسمی برای ثبت دارید؟');
}

lengthArray = nameArray.length;

for (let xArray = 0; lengthArray > xArray; xArray++) {
    // document.getElementById('box').innerText = nameArray[xArray] + '\n';
    // alert(nameArray[xArray] + '\n');
    console.log(nameArray[xArray]);
}