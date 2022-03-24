
let plan, sendToDoList, testToDoList, arrayIndx, optionList, confirmList, toDoList;
toDoList = [
    { id: 1, text: 'sport', Status: true },
    { id: 2, text: 'contant the father', Status: true },
    { id: 3, text: 'art class', Status: false }
];
console.log('to do list: ', toDoList);
confirmList = confirm('Do you went to edit the list?');
while (confirmList) {
    optionList = prompt('1. add reminder\n2. remove reminder\n3. chenge status');
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
    } else if (optionList == 3) {
        plan = prompt('enter the name of the job you did: ');
        testToDoList = toDoList.some(function (item) {
            return item.text == plan
        });
        if (testToDoList) {
            arrayIndx = toDoList.findIndex(function (item) {
                return item.text == plan
            });
            plan = prompt('1. work done\n2. work not done');
            if (plan == 1) {
                toDoList[arrayIndx].Status = true;
                console.log('to do list: ', toDoList);
            } else if (plan == 2) {
                toDoList[arrayIndx].Status = false;
                console.log('to do list: ', toDoList);
            } else {
                console.log('enter the correct option :(');
            }
        }
    } else {
        console.log('enter the correct option :(');
    }
    confirmList = confirm('Do you went to edit the list again?');
}
// console.log(arrayIndx);
