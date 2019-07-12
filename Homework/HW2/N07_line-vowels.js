"use strict";

var vowels = 'Генеалогическое древо Пушкина. Происхождение Александра Сергеевича Пушкина идёт от разветвлённого нетитулованного дворянского рода Пушкиных, восходившего по генеалогической легенде к ';
// var vowels1 = 'ууууу';

var sum = countVowelLetters(vowels);
console.log('Количество гласных букв= ' + sum);

function countVowelLetters(text) {
    console.log('countVowelLetters= ' + text);
    var count = 0;
    var isVowel = 'false';
    for (var i = 0; i < text.length; i++) {
        isVowel = isVowelLetter(text[i]);
        if (isVowel == true) {
            ++count;
        }
    }
    return count;
}

function isVowelLetter(vowel) {
    var vowels = "уёеыаояиэю";
    var isVowel = vowels.indexOf(vowel) >= 0 ? true : false;
    return isVowel;
}