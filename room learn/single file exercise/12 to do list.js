
let toDoList = [
    { id: 1, text: 'sport', Status: true },
    { id: 2, text: 'contant the father', Status: true },
    { id: 3, text: 'art class', Status: false }
];

console.log('to do list: ', toDoList);
let optionList = prompt('1. add reminder\n2. remove reminder\n3. chenge status');
let plan, sendToDoList;
if (optionList == 1) {
    plan = prompt('write a plan: ');
    sendToDoList = {
        id: toDoList.length + 1,
        text: plan,
        Status: false
    }
    toDoList.push(sendToDoList);
    console.log('to do list: ', toDoList);
}
