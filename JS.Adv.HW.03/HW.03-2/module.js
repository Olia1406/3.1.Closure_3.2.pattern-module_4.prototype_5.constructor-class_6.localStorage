let bank = 2000;
let cocktailCount = 100;
let freshCount = 50;
let waterCount = 200;
let cocktailPrice = 70;
let freshPrice = 60;
let waterPrice = 10;
// ф-ція, яка оновлює дані при продажі коктейлів 
function sellCoct(count) {
    if (cocktailCount >= count) {
        cocktailCount -= count;
        bank += count * cocktailPrice;
        return `${count} коктейлів, вартість - ${count * cocktailPrice} грн`
    }
    return `Вибачте, але у нас немає ${count} коктейлів`
}

// ф-ція, яка оновлює дані при продажі фрешів 
function sellFresh(count) {
    if (freshCount >= count) {
        freshCount -= count;
        bank += count * freshPrice;
        return `${count} фрешів, вартість - ${count * freshPrice} грн`
    }
    return `Вибачте, але у нас немає ${count} фрешів`
}

// ф-ція, яка оновлює дані при продажі води 
function sellWater(count) {
    if (waterCount >= count) {
        waterCount -= count;
        bank += count * waterPrice;
        return `${count} води, вартість - ${count * waterPrice} грн`
    }
    else {
        return `Вибачте, але у нас немає ${count} води`
    }
}
// повертає баланс
function displayBank() {
    return bank;
}
// поаертає к-сть коктейлів
function displayCoctails() {
    return cocktailCount;
}
// повертає к-сть фрешів
function displayFrehses() {
    return freshCount;
}
// повертає к-сть води
function displayWaters() {
    return waterCount;
}

export {sellCoct,sellFresh,sellWater, displayBank,displayCoctails,displayFrehses,displayWaters };