// average score of studdent ...!!

let score, average, receivedData, counter;   //  Computable variables
// receivedData = 0;
counter = 0;
score = new Array();
while (score[counter - 1] != -1) {
    score.push(Number(prompt('please enter one number:\n Enter -1 to exit!')));   //  Push data received from the user
    while (isNaN(score[counter])) {
        // score.push(Number(prompt('please try again enter one number:\n Enter -1 to exit!')));
        score[counter] = Number(prompt('please try again enter one number:\n Enter -1 to exit!'));
    }
    counter++;
    console.log(counter + ' <<<<<<');
}
score.pop();
console.log(score)