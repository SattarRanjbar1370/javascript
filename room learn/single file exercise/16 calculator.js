
let numberOne, numberTwo, operator, showUser;
numberOne = Number(prompt('enter the first number:'));
while (isNaN(numberOne)) {
    numberOne = Number(prompt('please try again, \ninput number was invalid'));
}
numberTwo = Number(prompt('enter the second number:'));
while (isNaN(numberTwo)) {
    numberTwo = Number(prompt('please try again, \ninput number was invalid'));
}
operator = prompt('select an operator to calculate:\n 1. *\n 2. / \n 3. + \n 4. -');

