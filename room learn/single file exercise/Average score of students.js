// average score of studdent ...!!

let score, average, receivedData, counter, sumOfNumber;   //  Computable variables
// receivedData = 0;
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
score.pop(); // remove the loop stop condition
sumOfNumber = 0;
for (counter = 0; counter < score.length; counter++) {
    sumOfNumber += score[counter];
}
console.log('average: ', sumOfNumber / counter);
console.log(score);