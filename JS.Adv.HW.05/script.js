// Завдання 1.

// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: 
// firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), 
// days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), 
// який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість 
// відпрацьованих днів days.
// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат.


class Worker{
    constructor(firstName, lastName, rate, days){
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate*this.days
    }
}
const worker1 = new Worker('Ivan', 'Ivanov', 10, 21);
console.log(worker1.firstName);
console.log(worker1.lastName);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());

const worker2 = new Worker('Petro', 'Petriv', 20, 25);
console.log(worker2.firstName);
console.log(worker2.lastName);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());

let sum = worker1.getSalary() + worker2.getSalary();
console.log(sum);

// --------------------------------------------------------------------------------------------

// Завдання 2.

// Реалізуйте клас MyString, який матиме наступні методи: 
// метод reverse(),який параметром приймає рядок, а повертає її в перевернутому вигляді, 
//  метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, 
// зробивши її першу букву заголовної 
//  та метод ucWords(), який приймає рядок і робить капіталізації 
// першої літери кожного слова цього рядка.


class MyString {

    reverse(someString) {
        return someString.split('').reverse().join('')
    }
    ucFirst(someString) {
        return someString.charAt(0).toUpperCase() + someString.slice(1, someString.length)
    }
    ucWords(someString) {
        // до заданої стрічки додаю пробіл, бо інакше цикл завершиться на 1 крок раніше
        //  і якщо стрічка складається з одного слова, тоді теж виконається цикл 
        someString += ' ';
        let start = 0;
        let newStr = '';
        while (true) {
            let currentPos = someString.indexOf(' ', start);
            if (currentPos == -1) break
            else {
                newStr += someString.charAt(start).toUpperCase() + someString.slice(start + 1, currentPos + 1);
                start = currentPos + 1;
            }
        }
        return newStr;
    }
}

const str = new MyString;

console.log(str.reverse('abc123'))
console.log(str.ucFirst('abc123'))
console.log(str.ucWords('abc123 arsenal arsenal arsenal'))