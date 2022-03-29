
let dataBase = [
    { id: 1, userName: 'mohammad', pass: 'jd45322f' },
    { id: 2, userName: 'sattar', pass: 'hgmk5643' },
    { id: 3, userName: 'reza', pass: '0125reza' },
    { id: 4, userName: 'amin', pass: 'kamkam32' },
    { id: 5, userName: 'hassan', pass: 'a1234567' },
    { id: 6, userName: 'ali', pass: 'loadpass' },
    { id: 7, userName: 'mostafa', pass: 'thHkF123' },
];

let inputNmae = document.querySelector('.input-1');
let inputPass = document.querySelector('.input-2');
let boxAlertOn, boxAlertOff, searchData, testData, receiveName, receivePassI, boxalert;
boxalert = document.getElementById('boxAlert')
boxAlertOn = document.getElementById('boxAlert');
boxAlertOff = document.getElementById('boxAlert')
boxalert.style.display = 'none';
function receiveLogIn() {
    receiveName = inputNmae.value;
    receivePass = inputPass.Value;
}

testData = dataBase.every(function (item) {
    return item.userName === receiveName
});
searchData = dataBase.find(function (item) {
    return item.userName === receiveName
});
if (testData) {
    boxAlertOn.style.display = 'flex';
    boxAlertOn.style.backgroundColor = 'green';
    boxAlertOn.innerText = 'Login done'
} else {
    boxAlertOff.style.display = 'flex';
}

setTimeout(function () {
    boxalert.style.display = 'none';
}, 5000)

console.log(searchData);