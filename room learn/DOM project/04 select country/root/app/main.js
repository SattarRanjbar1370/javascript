// 


let selectCode = document.getElementById('code-country');
let selectForm = document.getElementById('staticEmail2');
let selectButton = document.querySelectorAll('button');
let item = document.getElementById('show-item');

selectButton[0].setAttribute('onClick', 'selectModal()');

function selectModal() {
    item.innerText = selectCode.value + selectForm.value;
}