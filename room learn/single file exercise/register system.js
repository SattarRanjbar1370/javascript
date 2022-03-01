// Register system

let dataBase, counter, stopCondition;
dataBase = new Array(
    { name: 'sattar', familly: 'Ranjbar', age: 30, email: 'iran.kalkoush@gmail.com' },
    { name: 'nima', familly: 'lotfi', age: 23, email: 'nima.lotfi@gmail.com' },
    { name: 'hassan', familly: 'Ranjbar', age: 25, email: 'hassan74ranjbar@gmail.com' }
);

counter = 0;
stopCondition = confirm('Do you have another member to register?');
while (stopCondition == true) {
    dataBase.unshift({});
    dataBase[0].name = prompt('name:');
    // while (10 < dataBase[0].name.length < 3){
    //     dataBase[0].name = prompt('try entring the name again:');
    // }
    dataBase[0].familly = prompt('familly:');
    dataBase[0].age = Number(prompt('age:'));
    dataBase[0].email = prompt('email:');
    stopCondition = confirm('Do you have another member to register?');
}

console.log(dataBase);

///////////////////////////////////////////////////////////////////////
////////////////////////////// display ////////////////////////////////
///////////////////////////////////////////////////////////////////////

let bodyTag, divContiner, divBox;
bodyTag = document.getElementById('body').innerHTML = '<div id="continer" class="continer"></div>';
divContiner = document.getElementById('continer').innerHTML = '<div class="box">Hi, good time<br>please log in to the console to see the result.</div>';