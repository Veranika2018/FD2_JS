"use strict";

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}


function mood(colorsCount) {
    var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    var used = {}; // ключ хэша - число, которое уже встречалось
    var n = 1;
    console.log('цветов: ' + colorsCount);
    var colorName = '';

    while (Object.keys(used).length < colorsCount) {
        console.log(Object.keys(used).length);
        n = randomDiap(1, 7);
        colorName = colors[n];
        console.log('цвета:' + colorName);
        used[colorName] = true;

    }
    console.log(used);

}

mood(3);