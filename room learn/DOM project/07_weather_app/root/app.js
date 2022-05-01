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
let rand = Math.floor(Math.random()*10);
bgBasic.style.background = 'url(' + bgImageList[rand] + ')';
bgBasic.style.backgroundAttachment = 'fixed';
bgBasic.style.backgroundSize = 'cover';

//