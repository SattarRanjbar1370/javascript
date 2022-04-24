// 
let $ = document;

let inputText = $.getElementById('textValue');
inputText.setAttribute('onKeypress', 'pressValue()');
let inputPass = $.getElementById('passValue');
inputPass.setAttribute('onKeypress', 'pressValue2()');

function pressValue() {
    let smallSelect = $.getElementById('helpId');
    if (inputText.value.length < 5) {
        smallSelect.innerText = 'Number of characters is low';
        smallSelect.style.color = 'red';
    } else if (inputText.value.length >= 5) {
        smallSelect.innerText = 'true';
        smallSelect.style.color = 'green';
    }
}

function pressValue2() {
    let smallSelect = $.getElementById('helpId2');
    if (inputPass.value.length < 5) {
        smallSelect.innerText = 'Number of characters is low';
        smallSelect.style.color = 'red';
    } else if (inputPass.value.length >= 5) {
        smallSelect.innerText = 'true';
        smallSelect.style.color = 'green';
    }
}

