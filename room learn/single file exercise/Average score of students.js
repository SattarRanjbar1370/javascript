// average score of studdent ...!!

let score, average, receivedData, counter, sumOfNumber;   //  Computable variables
let bodyTag, divContiner, divbox;   // display tag variables

///////////////////////////////////////////////////////////////////////////////////
///////////////// define the variables displayed to the user //////////////////////
///////////////////////////////////////////////////////////////////////////////////

bodyTag = document.getElementById('body');
bodyTag.innerHTML = '<div class="continer" id="continer"></div>';
divContiner = document.getElementById('continer'); 
divbox = document.getElementById('continer');

///////////////////////////////////////////////////////////////////////////////////
////////////////////////// define calculation loop ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

counter = 0;
score = new Array();
while (score[counter - 1] != -1) {
    score.push(Number(prompt('please enter one number:\n Enter -1 to exit!')));   //  Push data received from the user
    while (isNaN(score[counter])) {
        score[counter] = Number(prompt('please try again enter one number:\n Enter -1 to exit!'));
    }
    counter++;
    console.log(counter + ' <<<<<<');
}
// divContiner.innerHTML = '<div class="box">Number of loop repeated : ' + counter + '</div>';

score.pop(); // remove the loop stop condition
sumOfNumber = 0;
for (counter = 0; counter < score.length; counter++) {
    sumOfNumber += score[counter];
}
console.log('average: ', sumOfNumber / counter);
console.log(score);
divbox.innerHTML = '<div class="box">Average : ' + (sumOfNumber/counter) + '</div><div class="box">Number of loop repeated : ' + counter + '</div><div class="box">While loop members : ' + score + '</div><div class="box">Designer Sattar Ranjbar</div>';