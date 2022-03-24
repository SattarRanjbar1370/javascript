
let listOfQuestions = [
    { id: 1, question: 'The little old man made ……… out of wood.', answer: ['toys', 'boxes', 'soup', 'food'], answerTrue: 2 },
    { id: 2, question: 'We should not be ……….. to animals.', answer: ['kind', 'real', 'good', 'cruel'], answerTrue: 3 },
    { id: 3, question: 'Do you know that smoking in this place is against the ……….?', answer: ['low', 'light', 'law', 'loaf'], answerTrue: 1 },
    { id: 4, question: 'TOne of the muscles starts jerking for no good …………… .', answer: ['illness', 'hiccups', 'reason', 'advice'], answerTrue: 1 },
    { id: 5, question: 'TRita isn\'t a ……………student. She always gets good marks.', answer: ['weak', 'clever', 'cruel', 'busy'], answerTrue: 4 },
    { id: 6, question: 'THow much does a ………of jam cost?', answer: ['bar', 'box', 'bottle', 'jar'], answerTrue: 3 },
    { id: 7, question: 'T Breakfast is eaten ………………..', answer: ['at noon', 'in the morning', 'in the afternoon', 'at night'], answerTrue: 1 },
    { id: 8, question: 'we were ………… tired after our long walk. ', answer: ['about', 'rather', 'same', 'lots of'], answerTrue: 2 },
    { id: 9, question: 'He had a good …………..of mathematics .', answer: ['knowledge', 'feeling', 'taste', 'hearing'], answerTrue: 3 },
    { id: 10, question: 'Which word does not go with others?', answer: ['wide', 'high', 'long', 'weight'], answerTrue: 4 }
];

console.log(listOfQuestions)

let prompetAnswer, counter, answerLoop, questions, loadloop, sumQuestion, totalPoints;
totalPoints = 0;
listOfQuestions.forEach(function (item) {
    counter = 1;
    answerLoop = [];
    questions = item.question;
    item.answer.forEach(function (ans) {
        loadloop = counter + '. ' + ans;
        answerLoop.push(loadloop);
        counter++;
    })
    sumQuestion = answerLoop.join('\n');
    prompetAnswer = prompt(questions + '\n' + sumQuestion);
    if (prompetAnswer == item.answerTrue) {
        totalPoints++;
    } else {
        console.log(false);
    }
});
console.log(totalPoints);
alert('Total points: ' + totalPoints);
