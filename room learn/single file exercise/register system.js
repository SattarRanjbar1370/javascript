// Register system

let dataBase, counter, stopCondition, userName, userFamily, userAge, userEmail, objectModel;
dataBase = new Array(
    { id: 1, name: 'sattar', family: 'Ranjbar', age: 30, email: 'iran.kalkoush@gmail.com' },
    { id: 2, name: 'nima', family: 'lotfi', age: 23, email: 'nima.lotfi@gmail.com' },
    { id: 3, name: 'hassan', family: 'Ranjbar', age: 25, email: 'hassan74ranjbar@gmail.com' }
);



counter = 3;
stopCondition = confirm('Do you have another member to register?');
while (stopCondition == true) {
    userName = prompt('please enter your name: ');
    while (userName.length > 10 || userName.length < 3) {
        userName = prompt('The name should be from 3 to 10 characters, try again:');
    }
    userFamily = prompt('please enter your family: ');
    while (userFamily.length > 15 || userFamily.length < 4) {
        userFamily = prompt('The family should be from 4 to 15 characters, try again:');
    }
    userAge = prompt('please enter your age: ');
    while (isNaN(userAge)) {
        userAge = prompt('Enter the age correctly, age must be a number. try again: ');
    }
    userEmail = prompt('please enter your email: ');

    objectModel = {
        id = counter + 1,
        name: userName,
        family: userFamily,
        age: Number(userAge),
        email: userEmail
    };
    dataBase.push(objectModel);
}

console.log(dataBase);

///////////////////////////////////////////////////////////////////////
////////////////////////////// display ////////////////////////////////
///////////////////////////////////////////////////////////////////////
