
let nameSymmetrical = prompt('لطفا یک نام متقارن وارد کنید');

let arraySymmetrical = nameSymmetrical.split('');
let reverseArray = arraySymmetrical.reverse();
let reverseWord = reverseArray.join('');

if (nameSymmetrical == reverseWord){
    console.log('name : ' + nameSymmetrical + ' ===> true');
}else{
    console.log('error name\nplease try ')
}