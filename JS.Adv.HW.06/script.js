// ДЗ по localStorage

// Потрібно розробити форму для реєстрації, логінування а також блок профайлу.
// Всі дані проходять через localStorage. Основні пункти що має працювати.
// 1.	При реєстрації дані попадають в localStorage. Перед добавленням нового користувача провіряємо чи нема у нас вже користувача з такою поштою, якщо є то не добавляти його. Всі дані мають валідуватися регулярними виразами.
// 2.	При логінуванні перевіряти чи всі поля заповнені і чи правильний логін та пароль, якщо щось не так виводити відповідне повідомлення. Всі дані беруться з localStorage.
// 3.	Якщо правильний логін та пароль то перейти на блок профайлу.
// 4.	При натисканні на Sign Out переходимо назад на блок Sign In.
// ------------------------------------------------------------------------------------------

let regExp1 = /^[a-z]{1,20}$/i;
let regExp2 = /^[a-z]{1,20}$/i;
let regExp3 = /^[a-z0-9-.]+@((gmail\.com)|(net\.ua)|(org\.ua))$/;
let regExp4 = /^\w{8,15}$/;
let regs = [regExp1, regExp2, regExp3, regExp4];
let inps = document.querySelectorAll('.input1');
let messages = document.querySelectorAll('.message');
let cross = document.querySelectorAll('.cross');
let good = document.querySelectorAll('.good');
let f1 = document.forms.form1;
let f2 = document.forms.form2;
let signInMess = document.querySelector('.message2');
let nn;
let em;
let pas;
let input = document.getElementsByTagName('input');
// функція, що перевіряє чи валідні дані в полях, і якщо так,
// то викликає іншу ф-цію addToStorage(), яка перевіряє чи нема таких даних в Storage, і якщо нема, 
// то відсилає їх в Storage
function checkData() {
    // ввожу змінну count, щоб порахувати кількість правильно заповнених полів(перевірка на валідність)
    let count = 0;
    for (let i = 0; i < inps.length; i++) {
        // перевірка на валідність
        if (regs[i].test(inps[i].value)) {
            inps[i].style.border = '1px solid green';
            inps[i].style.marginBottom = '30px';
            inps[i].style.boxShadow = '0 0 3px green';
            messages[i].style.display = "none";
            good[i].style.display = 'block';
            cross[i].style.display = 'none';
            count++;
        }
        // якщо недобре заповнені поля, то з'являється повідомлення і відповідні стилі
        else {
            messages[2].textContent = "Please provide a valid Email address";
            inps[i].style.border = '1px solid red';
            inps[i].style.boxShadow = '0 0 3px red';
            inps[i].style.marginBottom = '0';
            messages[i].style.display = "flex";
            cross[i].style.display = 'block';
            good[i].style.display = 'none';
        }
    }
    // тут запам'ятовую значення полів
    nn = `${inps[0].value} ${inps[1].value}`;
    em = `${inps[2].value}`;
    pas = `${inps[3].value}`;
    // запускається ф-ція, що додає дані в Storage, якщо всі 4 поля правильно заповнені 
    // наявніять даних в Storage перевіряє вже сама addToStorage і додає їх, або ні
    if (count == 4) {
        addToStorage();
    }
    // це просто знадобилось походу
    signInMess.style.display = "none";
}

function addToStorage() {
    // створюю з ключів Storage-а об'єкт
    let keys = Object.keys(localStorage);
    // об'єкт з даними, що буде додаватись в Storage
    let data = {
        name: nn,
        email: em,
        password: pas
    };
    let toJson = JSON.stringify(data);

    if (localStorage.length > 0) {
        // створюю об'єкт з email-ми
        let ems = [];
        for (let j = 0; j < keys.length; j++) {
            ems.push(JSON.parse(localStorage.getItem(keys[j])).email);
        }
        for (let j = 0; j < keys.length; j++) {
            // перевіряю, чи хоча б один email зі Storage-а співпадає з введеним в полі(em)
            if (ems.some(value => value == em)) {
                // якщо так, то не відсилаю і з'являється повідомлення і міняються стилі
                messages[2].textContent = "This email alredy exist";
                messages[2].style.display = "flex";
                inps[2].style.border = '1px solid red';
                inps[2].style.boxShadow = '0 0 3px red';
                inps[2].style.marginBottom = '0px';
                cross[2].style.display = 'block';
                good[2].style.display = 'none';
            }
            else {
                // якщо ніодин не співпадає, то відсилаю дані в Storage
                localStorage.setItem(nn, toJson);
                // і повертаюсь до старих стилів
                for (let i = 0; i < inps.length; i++) {
                    messages[i].style.display = "none";
                    inps[i].style.border = '1px solid rgb(150, 137, 137)';
                    inps[i].style.boxShadow = 'none';
                    inps[i].style.marginBottom = '30px';
                    cross[i].style.display = 'none';
                    good[i].style.display = 'none';
                    inps[i].onfocus = function() {
                        inps[i].style.border = '1px solid rgb(127, 166, 248)';
                        inps[i].style.boxShadow = '0 0 2px 2px rgb(141, 174, 247)'; 
                    }
                    inps[i].onblur = function() {
                        inps[i].style.border = '1px solid rgb(150, 137, 137)';
                        inps[i].style.boxShadow = 'none'; 
                    }
                  
                }
                // це просто знадобилось походу
                messages[2].textContent = "Please provide a valid Email address";
                f1.reset();
            }
        }
    }
    // якщо Storage був пустий, то зразу відправляю дані в нього
    else {
        localStorage.setItem(nn, toJson);
        // тут просто міняю стилі полів
        for (let i = 0; i < inps.length; i++) {
            messages[i].style.display = "none";
            inps[i].style.border = '1px solid rgb(150, 137, 137)';
            inps[i].style.boxShadow = 'none';
            inps[i].style.marginBottom = '30px';
            cross[i].style.display = 'none';
            good[i].style.display = 'none';
        }
        f1.reset();
    }
}
// ф-ція, що перевіряє чи існує такий email в Storage і , якщо так, то відображає профіль
function compareWithStorage() {
    let signInEmail = document.querySelector('.section2-inp1').value;
    let signInPass = document.querySelector('.section2-inp2').value;
    let userName = document.querySelector('.name');
    let userEmail = document.querySelector('.email');

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let data = localStorage.getItem(localStorage.key(i));
            let fromJSON = JSON.parse(data);
            // якщо Storage не пустий і email і password в ньому є, то відображається профіль
            if (signInEmail == fromJSON.email && signInPass == fromJSON.password) {
                document.querySelector('#section3').style.display = 'flex';
                document.querySelector('#section2').style.display = 'none';
                // у профілі ім'я і email такі як у відповідних полях або зі Storage-а
                userName.textContent = `${fromJSON.name}`;
                userEmail.textContent = `${fromJSON.email}`;
            }
            else {
                // якщо email-а або пароля немає в Storage, то з'являється повідомлення
                signInMess.textContent = "Incorrect email or password";
                signInMess.style.display = "flex";
            }
        }
    }
    else {
        // якщо Storage пустий, то з'являється повідомлення
        signInMess.textContent = "Local Storage is empty";
        signInMess.style.display = "flex";
    }
}

function signOut() {
    // нічого осбливого не робить, лише те, що походу десь треба було
    // само signOut робиться через посилання(виходить на signIn)
    document.querySelector('#section2').style.display = 'flex';
    signInMess.style.display = "none";
    f2.reset();
}

function hideSignInMess() {
    // приховує повідомлення
    signInMess.style.display = "none";
}