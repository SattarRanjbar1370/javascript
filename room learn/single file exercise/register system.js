// Register system

let dataBase, counter, stopCondition;
dataBase = new Array(
    { name: 'sattar', familly: 'Ranjbar', age: 30, email: 'iran.kalkoush@gmail.com' },
    { name: 'nima', familly: 'lotfi', age: 23, email: 'nima.lotfi@gmail.com' },
    { name: 'hassan', familly: 'Ranjbar', age: 25, email: 'hassan74ranjbar@gmail.com' }
);

let userName = prompt('please enter your name: ');
while (userName.length > 10 || userName.length < 3) {
    userName = prompt('The name should be from 3 to 10 characters, try again:');
}
let userFamily = prompt('please enter your family: ');
while (userFamily.length > 15 || userFamily.length < 4) {
    userFamily = prompt('The family should be from 4 to 15 characters, try again:');
}
let userAge = prompt('please enter your age: ');
while (isNaN(userAge)) {
    userAge = prompt('Enter the age correctly, age must be a number. try again: ');
}
let userEmail = prompt('please enter your email: ');

// counter = 0;
// stopCondition = confirm('Do you have another member to register?');
// while (stopCondition == true) {

// }

console.log(dataBase);

///////////////////////////////////////////////////////////////////////
////////////////////////////// display ////////////////////////////////
///////////////////////////////////////////////////////////////////////
