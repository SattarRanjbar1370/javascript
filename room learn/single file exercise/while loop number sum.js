let division = '345';
let i = 0;
let remaining = null;

while (i == division.length) {
    if (isNaN(division)) {
        division = Number(division)
        console.log(typeof (division));
    } else {
        i++;
    }
}