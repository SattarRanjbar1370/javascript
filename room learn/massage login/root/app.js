let tagBody, divWrapper, divBox;

divWrapper = document.getElementById('wrapper');
divWrapper.innerHTML = '<div class="box" id="box"></div>';

let login, passW, htmlAlarm;

htmlAlarm = '<div id="box_one" class="box_min box_two">لطفا چک کنید یوزرنیم بیشتر از چهار کارکتر و پسورد بیستر از  هفت کارکتر باشد</div>'

login = prompt('please enter user name: ');
passW = prompt('please enter your password: ');

divBox = document.getElementById('box');

if (login.length < 4 || passW.length < 7) {
    divBox.innerHTML = '<div id="box_one" class="box_min box_one"> نام یا پسورد وارد شده صحیح نیست . لطفا دوباره تلاش کنید.</div>' + htmlAlarm;
} else {
    divBox.innerHTML = '<div id="box_one" class="box_min box_one">عملیات با موفقیت انجام شد.</div>'
}
