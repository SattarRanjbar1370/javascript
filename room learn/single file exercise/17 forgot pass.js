
let dataBase = [
    { id: 1, userName: 'mohammad', pass: 'jd45322f' },
    { id: 2, userName: 'sattar', pass: 'hgmk5643' },
    { id: 3, userName: 'reza', pass: '0125reza' },
    { id: 4, userName: 'amin', pass: 'kamkam32' },
    { id: 5, userName: 'hassan', pass: 'a1234567' },
    { id: 6, userName: 'ali', pass: 'loadpass' },
    { id: 7, userName: 'mostafa', pass: 'thHkF123' },
];

let receiveName, receivePass, searchName, searchPass, recoveryPass;

receiveName = prompt('please enter user name:');
searchName = dataBase.some(function (item) { // ‌username evaluation
    return receiveName === item.userName
});
if (searchName) {
    searchName = dataBase.find(function (item) { // Search for a username in a database
        return receiveName === item.userName
    });
    receivePass = prompt('please enter password:'); // receive a password
    if (receivePass === searchName.pass) {
        alert(true);
    } else {
        recoveryPass = prompt('Password recovery:\n 1. yes\n 2. no');
        if (recoveryPass === '2') {
            alert('end')
        } else if (recoveryPass === '1') {
            searchPass = +prompt('enter your ID to recoveer your password: ');

            if (searchPass === searchName.id) {
                alert('your password: ' + searchName.pass);
            }
        } else {
            alert('invalid data!');
        }
    }
} else {
    alert('User not found');
}

// console.log(searchName);
