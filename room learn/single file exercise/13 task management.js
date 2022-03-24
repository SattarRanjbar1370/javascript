
let listManagement, management, task, userTask, objecTask;

listManagement = [
    { id: 1, nameUser: 'mohammad', task: 'ropeacces' },
    { id: 2, nameUser: 'ahmadi', task: 'elevator tecnesian' },
    { id: 3, nameUser: 'sadeghi', task: 'gardener' },
    { id: 4, nameUser: 'ghasemi', task: 'security' },
];
console.log('list management: ',listManagement);
management = confirm('Do you add a user?');

while (management) {
    task = prompt('write a task: ');
    userTask = prompt('write the user name of the task:');
    objecTask = {
        id: listManagement.length + 1,
        nameUser: userTask,
        task: task
    }
    listManagement.push(objecTask);
    management = confirm('Do you add a user again?');
}
console.log('list management: ',listManagement);
