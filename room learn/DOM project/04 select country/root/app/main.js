// 


let selectCode = document.getElementById('code-country');
let selectForm = document.getElementById('staticEmail2');
let selectButton = document.querySelectorAll('button');
let item = document.getElementById('show-item');

selectButton[0].setAttribute('onClick', 'selectModal()');
selectForm.setAttribute('onchange', 'testValue()')

function selectModal() {
    item.innerText = selectCode.value + selectForm.value;
}

Number(selectForm.value)
function testValue() {
    if (isNaN(selectForm.value)) {
        let modalAlert = document.getElementById('modal-alert');
        modalAlert.innerText = 'error character'
    } else {
        modalAlert.style.display = 'none';
    }
}