"use strict";

var vowels = 'Генеалогическое древо Пушкина. Происхождение Александра Сергеевича Пушкина идёт от разветвлённого нетитулованного дворянского рода Пушкиных, восходившего по генеалогической легенде к ';
var vowels1 = vowels.split('');
var vowels0 = "уёеыаояиэю";
var isVowel = 'false';


var sum = countVowelLetters(vowels1);
var sum2 = countVowelLettersForEach(vowels1);
var sum3 = countVowelLettersFilter(vowels1);
var sum4 = countVowelLettersReduce(vowels1);



console.log('for= ' + sum);
console.log('foreach=' + sum2);
console.log('filter=' + sum3);
console.log('reduce=' + sum4);




function countVowelLetters(text) {
    console.log('сработала ф-я for');
    var count = 0;

    for (var i = 0; i < text.length; i++) {
        isVowel = vowels0.indexOf(text[i].toLowerCase()) >= 0 ? true : false;
        if (isVowel == true) {
            ++count;
        }
    }
    return count;
}


function countVowelLettersForEach(text) {
    console.log('сработала ф-я forEach');
    var count = 0;
    text.forEach(a => {
        isVowel = vowels0.indexOf(a.toLowerCase()) >= 0 ? true : false;
        if (isVowel == true) {
            ++count;
        }
    });
    return count;
}


function countVowelLettersFilter(text) {
    console.log('сработала ф-я filter');
    var count = 0;
    var text1 = text.filter(a => vowels0.indexOf(a.toLowerCase()) >= 0 ? true : false);
    count = text1.length;
    return count;
}


function countVowelLettersReduce(text) {
    console.log('сработала ф-я Reduce');
    var count = 0;
    var result = text.reduce((arr, charr) => {
        isVowel = vowels0.indexOf(charr.toLowerCase()) >= 0 ? true : false;
        if (isVowel) {
            return arr + charr
        } else return arr
    }, '');
    count = result.length;
    return count;
}