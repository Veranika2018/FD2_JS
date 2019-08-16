// Variables

const addForm = document.getElementById('add-form');
const getForm = document.getElementById('get-form');
const deleteForm = document.getElementById('delete-form');
const allForm = document.getElementById('all-form');

//-------------
const addDrink = document.querySelector('#form-drink');
const datesDrink = addDrink.getElementsByTagName('input');
const areaDrink = document.getElementById('des');
//-------------
const getDrink = document.querySelector('#get-drink');
const keyDrink = getDrink.getElementsByTagName('input');
const butDrink = document.getElementById('get-des');
//-------------
//const allDrink = document.querySelector('#all-drink');
//-------------
const deleteDrink = document.querySelector('#delete-drink');
const delDrink = getDrink.getElementsByTagName('input');

//_____________________________________
var drinkStorage = new HashStorage('initkey', 'initvalue');

// Event Listeners
eventListeners();

//_____________________________________

function eventListeners() {

    addDrink.addEventListener('click', addInfo1);
    getDrink.addEventListener('click', getInfo1);
    deleteDrink.addEventListener('click', deleteInfo1);

}


// Functions;

function styleA(nFunction) {
    addForm.style.display = 'none';
    getForm.style.display = 'none';
    deleteForm.style.display = 'none';
    allForm.style.display = 'none';
    switch (nFunction) {
        case 1:
            addForm.style.display = 'block';
            break;
        case 2:
            getForm.style.display = 'block';
            break;
        case 3:
            deleteForm.style.display = 'block';
            break;
        case 4:
            allForm.style.display = 'block';
            break;
    }
}

function addInfo(e) {
    styleA(1);
    console.log('____________addInfo__________');
}

function addInfo1(e) {
    styleA(1);

    console.log('____________addInfo1__________');
    console.log('datesDrink');
    console.log(datesDrink[0].value);
    console.log(datesDrink[1].checked);
    console.log(areaDrink.value);
    console.log('______________________');
    drinkStorage.addValue(datesDrink[0].value, [datesDrink[1].checked, areaDrink.value]);
    console.log('______________________');
}

function getInfo(e) {
    styleA(2);
}

function getInfo1() {

    console.log('____________getinfo1__________');
    console.log('keyDrink=' + keyDrink[0].value);
    console.log('______________________');
    var getInfo = drinkStorage.getValue(keyDrink[0].value);
    console.log(getInfo);
    if ((getInfo !== undefined)) {
        console.log('напиток найден');
        console.log(getInfo[0]);
        var alko = '';
        if ((getInfo[0] == true)) {
            alko = 'алкогольный ';
            console.log(alko = 'алкогольный ');
        } else {
            alko = 'безалкогольный ';
            console.log(alko = 'безалкогольный ');
        }
        butDrink.value = keyDrink[0].value + '=' + alko + 'напиток. Рецепт приготовления= ' + getInfo[1];
    } else {
        console.log('напиток не найден');
        butDrink.value = 'НАПИТОК НЕ НАЙДЕН';
    }

    console.log('______________________');
}


function deleteInfo() {
    styleA(3);
}

function deleteInfo1() {

    console.log('____________deleteInfo1__________');
    console.log('deleteDrink=' + deleteDrink[0].value);
    console.log('______________________');
    var deleteInfo = drinkStorage.deleteValue(deleteDrink[0].value);
    console.log("Функция deleteInfo1(), успешно удалила элемент? : " + deleteInfo);
    console.log('______________________');
}

function allInfo() {
    styleA(4);

    console.log('____________allinfo__________');
    var allInfo = drinkStorage.getKeys();
    console.log(allInfo);
    console.log('____________allinfo__________');
    console.log(allForm);

    var ul = allForm.querySelector('ul');
    console.log('ul=');
    console.log(ul);
    ul.textContent = '';


    allInfo.forEach(element => {
        var li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    })
}