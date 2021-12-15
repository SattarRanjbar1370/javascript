let listprof = [];

let userName = prompt('لطفا نام خود را بنویسید');
let userFamilly = prompt('نام خانوادگی خود را وارد کنید');
let userage = prompt('سن خود را وارد کنید');

while (isNaN(userage)) {
    alert('سن اشتباه وارد شده!!');
    userage = prompt('سن خود را به درستی وارد کنید وارد کنید');
}

listprof.push(userName);
listprof.push(userFamilly);
listprof.push(userage);

let userYes = confirm("آیا با نمایش اطلاعات موافقید؟");

if (userYes == true) {
    alert(listprof[0] + ' ' + listprof[1] + '\n سن شما: ' + listprof[2]);
} else {
    alert('اطلاعات شما با موفقیت ثبت شد');
}