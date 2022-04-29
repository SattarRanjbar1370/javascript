// data base

const dataCountry = {
    iran: ['tehran', 'esfahan', 'kermanshah',],
    usa: ['new yourk', 'vashington'],
    russia: ['Moscow', 'Saint Petersburg', 'Samara', 'Volgagrad']
};

let selectBoxCountry = document.getElementById('box-country');
selectBoxCountry.addEventListener('change', setValue);
let selectCity = document.getElementById('box-city');
let setElemnt;

function setValue() {
    if (selectBoxCountry.value == 'select country') {
        selectCity.innerHTML = '<option selected>Select one</option>';
    } else {
        selectCity.innerHTML = '';
        dataCountry[selectBoxCountry.value].forEach(element => {
            setElemnt = document.createElement('option');
            setElemnt.setAttribute('value', element);
            setElemnt.innerText = element;
            selectCity.append(setElemnt);
        });
    }
}