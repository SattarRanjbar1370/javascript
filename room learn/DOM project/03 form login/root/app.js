//

let selectTag = document.getElementById('alert');
let selectInput = document.querySelectorAll('input');
// console.log(selectInput[0],selectInput[1])

function setAlertText() {
    if (selectInput[0].value.length < 4) {
        selectTag.style.display = 'block';
        selectTag.style.background = 'red';
        selectTag.innerText = 'error character';
    } else if (selectInput[0].value.length >= 4) {
        // selectTag.style.display = 'block';
        selectTag.style.background = 'rgb(35, 149, 230)';
        selectTag.innerText = 'true text';
    }
}

function setAlertPass() {
    if (selectInput[1].value.length < 4) {
        selectTag.style.display = 'block';
        selectTag.style.background = 'red';
        selectTag.innerText = 'error pass';
    } else if (selectInput[1].value.length >= 4) {
        // selectTag.style.display = 'none';
        selectTag.style.background = 'rgb(35,149,230)';
        selectTag.innerText = 'true pass';
    }
}

let selectInputName = document.getElementById('inputName');
selectInputName.setAttribute('onfocus', 'setAlertTest()');
selectInputName.setAttribute('onblur', 'setAlertTest2()')
let selectBody = document.getElementsByTagName('body');
let setDiv = document.createElement('span');
selectBody[0].append(setDiv);
setDiv.setAttribute('class','alert-set');


function setAlertTest() {
    setDiv.style.display = 'block';
    setDiv.innerText = 'select item';
}

function setAlertTest2(){
    setDiv.style.display = 'none';
}
