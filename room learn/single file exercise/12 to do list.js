
let toDoList = [
    { id: 1, text: 'sport', Status: true },
    { id: 2, text: 'contant the father', Status: true },
    { id: 3, text: 'art class', Status: false }
];

console.log('to do list: ', toDoList);
let optionList = prompt('1. add reminder\n2. remove reminder\n3. chenge status');
let plan, sendToDoList, testToDoList, arrayIndx;

if (optionList == 1) {
    plan = prompt('write a plan: ');
    sendToDoList = {
        id: toDoList.length + 1,
        text: plan,
        Status: false
    }
    toDoList.push(sendToDoList);
    console.log('to do list: ', toDoList);
} else if (optionList == 2) {
    plan = prompt('enter name plane: ');
    testToDoList = toDoList.some(function (item) {
        return item.text == plan
    });
    if (testToDoList) {
        arrayIndx = toDoList.findIndex(function (item) {
            return item.text == plan
        });
        toDoList.splice(arrayIndx, 1);
        console.log('to do list: ', toDoList);
    } else {
        console.log('input error\nplease try again');
    }
} 

// console.log(arrayIndx);
