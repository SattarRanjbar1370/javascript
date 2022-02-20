let box_log, box_error_user, box_error_pass, box_base, div_base;
let userName, password, userNameLoad, passwordLoad;

div_base = document.getElementById('continer');
div_base.innerHTML = '<div class="box box-filter" id="box_log"></div>';
box_error_user = document.getElementById('box_log');
box_error_pass = document.getElementById('box_log');
box_log = document.getElementById('box_log');

userName = 'ali';
password = 'Sattar0132831';
userNameLoad = prompt('please enter your name:');

if (userNameLoad == userName) {
    passwordLoad = prompt('please enter your password:');
    if (passwordLoad == password) {
        box_log.innerHTML = '<div class="error-user error" id="error-user">welcome<br>Enable special services for better access</div>';
    } else {
        box_error_pass.innerHTML = '<div class="error-user error" id="error-user">error password, please try</div>';
    }
} else {
    box_error_user.innerHTML = '<div class="error-user error" id="error-user">error user name, please try</div>';
}