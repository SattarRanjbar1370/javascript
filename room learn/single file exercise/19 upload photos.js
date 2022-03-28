
let profileSet, checkprofile;

profileSet = false;

setTimeout(function () {
    if (!profileSet) {
        alert('please select a photo for the profile');
    } else {
        alert('Your profile photo is set');
    }
}, 5000)