
let imgSelect = document.getElementById('image');
let buttunClick = document.getElementById('button');
let boolclick = false;
function clickTurnOn() {
    if (boolclick === false) {
        imgSelect.src = 'image/turn on.png';
        buttunClick.innerText = 'turn off';
        boolclick = true;
    } else {
        imgSelect.src = 'image/turn of.png';
        buttunClick.innerText = 'turn on';
        boolclick = false;
    }
}


