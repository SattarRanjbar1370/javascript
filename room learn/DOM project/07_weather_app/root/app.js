// backgruond random

let bgImageList = [
    'https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_toystory_16x9_8461039f.jpeg',
    'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg',
    'https://wallpaperaccess.com/full/187163.jpg',
    'https://www.itl.cat/pngfile/big/0-9577_pc-desktop-wallpaper-popular-desktop-backgrounds.jpg',
    'https://cdn.wallpapersafari.com/34/70/9rfwF5.jpg',
    'https://cdn.wallpapersafari.com/13/37/3dELnR.jpg',
    'https://cdn.wallpapersafari.com/86/75/Jc0mxS.jpg',
    'https://cdn.wallpapersafari.com/75/19/YCLw16.jpg',
    'https://cdn.wallpapersafari.com/64/31/lOqsPZ.jpg'
]

let bgBasic = document.getElementById('bg-basic');
let rand = Math.floor(Math.random() * 10);
bgBasic.style.background = 'url(' + bgImageList[rand] + ')';
bgBasic.style.backgroundAttachment = 'fixed';
bgBasic.style.backgroundSize = 'cover';

// weather info

let infoWeather = [
    { city: 'Tehran', favicon: '<i class="bi bi-cloud-drizzle-fill"></i>', scale: '۲۷︒' },
    { city: 'Alborz', favicon: '<i class="bi bi-cloud-sun-fill"></i>', scale: '۱۵︒' },
    { city: 'Mazndaran', favicon: '<i class="bi bi-cloud-drizzle-fill"></i>', scale: '۱۲︒' },
    { city: 'Kermanshah', favicon: '<i class="bi bi-brightness-high-fill"></i>', scale: '۲۵︒' },
    { city: 'Sannadej', favicon: '<i class="bi bi-cloud-sun-fill"></i>', scale: '۱۷︒' },
    { city: 'Illam', favicon: '<i class="bi bi-cloud-haze2-fill"></i>', scale: '۲۰︒' },
    { city: 'Ahvaz', favicon: '<i class="bi bi-brightness-high-fill"></i>', scale: '۳۰︒' },
    { city: 'Oromie', favicon: '<i class="bi bi-cloud-snow-fill"></i>', scale: '۲۷︒' },
    { city: 'Rasht', favicon: '<i class="bi bi-brightness-high-fill"></i>', scale: '۱۹︒' },
    { city: 'Mashahad', favicon: '<i class="bi bi-cloud-drizzle-fill"></i>', scale: '۱۲︒' },
    { city: 'Yazd', favicon: '<i class="bi bi-brightness-high-fill"></i>', scale: '۳۱︒' },
    { city: 'Anzali', favicon: '<i class="bi bi-brightness-high-fill"></i>', scale: '۳۲︒' }
];

let btnSearch = document.getElementById('btn-search');
let searchBoxValue = document.getElementById('text-search');
let h3Elemnt = document.getElementById('city');
let faviconWeather = document.getElementById('favicon');
let iconWeather = document.getElementById('icon-weather');
let boxWeather = document.getElementById('box-weather')

btnSearch.addEventListener('click', receiveValue);

function receiveValue() {
    let findData = infoWeather.find(function (item) {
        return item.city === searchBoxValue.value;
    });
    boxWeather.classList.remove('d-none');
    boxWeather.classList.add('d-block');
    if (findData === undefined) {
        h3Elemnt.innerText = searchBoxValue.value + ' is not available';
        h3Elemnt.classList.add('h4');
        h3Elemnt.classList.remove('display-5')
        faviconWeather.classList.add('d-none');
        iconWeather.classList.add('d-none');
    } else {
        h3Elemnt.classList.remove('h4');
        h3Elemnt.classList.add('display-5')
        h3Elemnt.innerText = searchBoxValue.value;
        faviconWeather.classList.remove('d-none');
        faviconWeather.innerHTML = findData.favicon;
        iconWeather.classList.remove('d-none');
        iconWeather.innerText = findData.scale;
    }
}