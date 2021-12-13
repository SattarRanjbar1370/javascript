// The if and confirm commands were checked



let confirmTest = confirm("Are you 18 old? ");

if (confirmTest) {
    document.getElementById('textbox').innerText = 'شما میتوانید از سایت دیدن کنید';
} else {
    document.getElementById('textbox').innerText = 'شما به سن قانونی نرسیدید    ';
}