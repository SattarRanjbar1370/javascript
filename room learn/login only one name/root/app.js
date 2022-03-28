let box_log, box_error_user, box_error_pass, box_base, div_base;
let userName, password, userNameLoad, passwordLoad;

div_base = document.getElementById('continer');
div_base.innerHTML = '<div class="box box-filter" id="box_log"></div>';
box_error_user = document.getElementById('box_log');
box_error_pass = document.getElementById('box_log');
box_log = document.getElementById('box_log');

userName = 'ali';
password = 'sattar0132831';
userNameLoad = prompt('please enter your name:');

if (userNameLoad.toLowerCase() == userName) {
    passwordLoad = prompt('please enter your password:');
    if (passwordLoad == password) {
        box_log.innerHTML = '<div class="error-user error" id="error-user">welcome<br>Enable special services for better access</div>';
    } else {
        box_error_pass.innerHTML = '<div class="error-user error" id="error-user">error password, please try</div>';
        let errorUser = document.getElementById('error-user');
        errorUser.style.color = '#ff6e6e';
        errorUser.style.fontSize = '2rem';
    }
} else {
    box_error_user.innerHTML = '<div class="error-user error" id="error-user">error user name, please try</div>';
}

let arrayItem, div2, listNameOne, showArray, cunter, bodyItem;
arrayItem = ['sattar', 'hassan', 'ali'];
div2 = document.createElement('div');
// div2.setAttribute('id', 'dox');
div2.setAttribute('class', 'box box-filter');
listNameOne = document.createElement('div');
cunter = 0;
bodyItem = document.getElementsByTagName('body');
console.log(bodyItem);
// bodyItem[0].append(div2);
div_base.append(div2);

console.log(div2);

let i = arrayItem.length;

showArray = setInterval(function () {
    if (cunter === i - 1) {
        clearInterval(showArray);
    }
    div2.append(arrayItem[cunter] + ', ');
    cunter++;
}, 3000)
// setTimeout(() => {


// }, 6000);
