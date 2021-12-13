// User information


let Name, familly, age, city, testAge, year, yearAge, textView;

Name = prompt('please enter name: ');
familly = prompt('please enter familly: ');
age = prompt('please enter age: ');
city = prompt('please enter city: ');
year = 1400;

age = Number(age);
yearAge = year - age;

textView = "your name = " + Name + " " + familly + "\n" + "city = " + city + "\n" + "years age = " + yearAge;

document.getElementById('textbox').innerText = textView;