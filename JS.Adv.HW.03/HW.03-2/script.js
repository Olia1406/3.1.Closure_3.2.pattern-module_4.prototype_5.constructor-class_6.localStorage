import * as shop from './module.js';

let getId = id => document.getElementById(id);
// функція, яка відображає нові значення в інпутах Баланс, Коктейль, Фреш, Вода
// нові значення викають в модулі
function displayAll() {
    getId('box1-inp1').value = shop.displayBank();
    getId('box1-inp2').value = shop.displayCoctails();
    getId('box1-inp3').value = shop.displayFrehses();
    getId('box1-inp4').value = shop.displayWaters();
}
displayAll();
// введу змінну previouseBank і запам'ятаю в неї поперднє значення bank(візьму з інпута)
// потім це використаю, щоб обчислити загальну вартість однієї покупки
let previouseBank;
// функція, яка додає відповідну покупку до списку, якщо кількість є в наявності,
// або виводить повідомлення про відсутність у модальному вікні, якщо кількості немає в наяності
function sellList() {
    previouseBank = getId('box1-inp1').value;
    let count = getId('box2-inp5').value;
// додаються коктейлі
    if (getId('box2-inp6').checked == true) {
        let messageCoct = shop.sellCoct(count);

        if (count - getId('box1-inp2').value <= 0) {
            getId('area').value += messageCoct + '\n';
        }
        else {
            getId('myModal').classList.remove('hide');
            getId('modal-mes').innerHTML = messageCoct;
        }
    }
// додаються фреші

    if (getId('box2-inp7').checked == true) {
        let messageFresh = shop.sellFresh(count);

        if (count - getId('box1-inp3').value <= 0) {
            getId('area').value += messageFresh + '\n';
        }
        else {
            getId('myModal').classList.remove('hide');
            getId('modal-mes').innerHTML = messageFresh;
        }
    }
// додається вода

    if (getId('box2-inp8').checked == true) {
        let messageWater = shop.sellWater(count);
        if (count - getId('box1-inp4').value <= 0) {
            getId('area').value += messageWater + '\n';
        }
        else {
            getId('myModal').classList.remove('hide');
            getId('modal-mes').innerHTML = messageWater;
        }
    }
    // оновляю значення інпута, де вказувалась кількіть продуктів
    getId('box2-inp5').value = '';
}
// функція, яка виводить в box3 повідомлення про покупку 
function showCheque(){
    displayAll();
    getId('box3').value = getId('area').value + '\n' + `Загальна вартість - ${shop.displayBank() - previouseBank} грн`;
    getId('area').value = '';
}
// клік на кнопку Додати
getId('add').addEventListener('click', sellList);
// клік на кнопку Купити
getId('buy').addEventListener('click', showCheque);

// модальне вікно закривається при кліку на позначку 'закрити'
getId('close').addEventListener('click', function () {
    getId('myModal').classList.add('hide');
    getId('box2-inp5').value = '';
})

// модальне вікно закривається при кліку на кнопку close
getId('btn-close').addEventListener('click', function () {
    getId('myModal').classList.add('hide');
    getId('box2-inp5').value = '';
})