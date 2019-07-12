"use strict";
// -- --Вашe ФИО === === =
var famQ = "Введите вашу фамилию";
do {
    var fam = prompt(famQ);
    famQ = "Введите вашу фамилию, длинной не менее 4 символов и не более 10";
}
while (!fam);
console.log('Ваше фио: ' + fam);

var nameQ = "Введите вашe имя";
do {
    var name = prompt(nameQ);
    nameQ = "Введите вашe имя, длинной не менее 3 символов и не более 10";
}
while (!name);
console.log('Ваше имя: ' + name);


var otchestvQ = "Введите вашe отчество";
do {
    var otchestv = prompt(otchestvQ);
    otchestvQ = "Введите вашe отчество, длинной не менее 9 символов и не более 15";
}
while (!otchestv);
console.log('Ваше отчество: ' + otchestv);


// ------ Ввод возраста-----
do {
    var age = prompt('введите ваш возраст в годах');
    if (age.toString() === 'null') continue;
    var age = parseInt(age.toString());
}
while (isNaN(age));
console.log('Введите ваш возраст в годах: ' + age);
console.log('Через 5 лет вам будет: ', age + 5);

//--------Введите ваш пол----
var a = 'мужской';
var b = 'женский';
var pol = confirm("Если Ваш пол 'мужской' нажмите 'Ok', если 'женский' - 'Отмена'");
var result = pol ? a : b;
console.log('Ваш пол: ', result);

// -------На пенсии ли вы--------
var pensiaM = 63;
var pensiaF = 58;
if (result == 'мужской' && age > pensiaM) {
    var napensii = 'да';
} else
    var napensii = 'нет';
if (result == 'женский' && age > pensiaF) {
    var napensii = 'да';
} else
    var napensii = 'нет';

console.log('Вы на пенсии: ' + napensii);

alert(`
        Ваше ФИО: ${fam} ${name} ${otchestv}
        Ваш пол:  ${result}
        Ваш возраст в годах: ${age} 
        Ваш возраст в днях:  ${age*365} 
        Через 5 лет вам будет:  ${age + 5}  
        Вы на пенсии: ${napensii}
        `);