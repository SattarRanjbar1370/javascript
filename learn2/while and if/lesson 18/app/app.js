// test




let arrayOne = [];
let promptUser;
let sum = 0;
let avrage;


lengthArray = arrayOne.length;

for (var i = 0; i < 4; i++) {
    promptUser = prompt("please enter one number : ");
    promptUser = Number(promptUser);
    while (isNaN(promptUser)) {
        promptUser = prompt("please agin enter one number : ");
        promptUser = Number(promptUser);
    }
    arrayOne.push(promptUser);
}

for (var i = 0; i < arrayOne.length; i++) {
    sum = sum + arrayOne[i];
}

avrage = sum / 4;

document.getElementById('docme').innerText = 'data : ' + arrayOne + '\n' + 'number : ' + sum + '\n' + 'avrage : ' + avrage;


{
    /* document.write('data : ' + arrayOne + '      ');
    document.write('number : ' + sum + '      ');
    document.write('avrage : ' + avrage + '      '); */
}