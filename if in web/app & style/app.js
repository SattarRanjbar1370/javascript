let age, jensit;

age = prompt("لطفا سن خود را وارد کنید :");
jensit = prompt("جنسیت شما چیست؟-زن\\مرد");

age = Number(age);
// document.getElementById('boxOne').innerText = "شما میتوانید وارد سایت شوید.";
if (isNaN(age)) {
    age = prompt("لطفا سن خود را به عدد وارد کنید :");
}

if (age > 18 && jensit == "مرد") {
    document.getElementById('boxOne').innerText = "شما میتوانید وارد سایت شوید.";
} else {
    document.getElementById('boxOne').innerText = "با عرض پوزش شما شرایط ورود به سایت را ندارید .";
}