// if else and prompt

// 1) Попросити юзера число
// 2) Попросити чи рівне воно 12
// 3) На основі перевірки запустити if або else

// const userNumber = Number(prompt('Enter number'));

// if (userNumber === 12) {
//     console.log('Correct');
// } else {
//     console.log('Error');
// }

// Програма яка получае від юзера число і оприділить парне воно чи не парне

// 1) Получити число
// 2) Написати перевірку на парне не парне число
// 3) Вивести результат

// const day = prompt('Enter day');

// if (day % 2 === 0); {
//     console.log('Парне');
// } else {
//     console.log('Непарне');
// }

// Програма: питаєм в юзера номер місяця і показуєм до якої пори року він відноситься

// 1) Получити дані від юзера
// 2) Перевірка на пору року
// 3) ивести результат

// Перший варіант

// const monthNumber = prompt('Enter month number');

// if (monthNumber === 1) {
//     console.log('Зима');
// } else if (monthNumber === 2) {
//     console.log('Зима');
// } else if (monthNumber === 12) {
//     console.log('Зима');
// }

// Другий варіант, коротший

// const monthNumber = Number(prompt('Enter month number'));

// if (monthNumber === 1 || monthNumber == 2 || monthNumber === 12) {
//     console.log('Зима');
// } else if (monthNumber === 3 || monthNumber == 4 || monthNumber === 5) {
//     console.log('Весна');
// } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
//     console.log('Літо');
// } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
//     console.log('Осінь');
// } else {
//     console.log('Дані не валідні');
// }

// Третій варіант

// const monthNumber = Number(prompt('Enter month number'));

// if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
//     console.log('Зима');
// } else if (monthNumber >= 3 && monthNumber <= 5) {
//     console.log('Весна');
// } else if (monthNumber >= 6 && monthNumber <= 8) {
//     console.log('Літо');
// } else if (monthNumber >= 9 && monthNumber <= 11) {
//     console.log('Осінь');
// } else {
//     console.log('Дані невалідні');
// }

// Програма яка перевіряє логін пароль користувача і виводи привітання

// const login = 'user@gmail.com'
// const password = '1354587'

// const userLogin = prompt('Enter login');
// const userPassword = prompt('Enter password');

// if (login === userLogin && password === userPassword) {
//     console.log('Wellcome');
// } else {
//     console.log('Error');
// }

// Другий спосіб тернарний оператор

// const login = 'user@gmail.com'
// const password = '1354587'

// const userLogin = prompt('Enter login');
// const userPassword = prompt('Enter password');

// const result = login === userLogin && password === userPassword ? 'Wellcom' : 'Error'

// console.log('result', result);

// Третій варіант свіч кейс

// const period = prompt('Enter period');

// if (period === 'День') {
//     console.log('5.99');
// } else if (period === 'Тиждень') {
//     console.log('10.99');
// } else if (period === 'Місяць') {
//     console.log('50.99');
// } else if (period === 'Рік') {
//     console.log('100.99');
// }

// const period = prompt('Enter period');

// switch (period) {
//     case 'День':
//     console.log('5.99');
//     break;

//     case 'Тиждень':
//     console.log('10.99');
//     break;

//     case 'Місяць':
//     console.log('50.99');
//     break;

//     case 'Рік':
//     console.log('100.99');
//     break;

//     default:
//     console.log('Error');
//     break;
// }

// Цикл for який виводить в консоль браузера числа за зменшенням від max до min

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
// } 

// Вивести числа кратні 10, перший варіант

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 10) {
//     console.log(i);
// } 

// Другий варіант

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
//     continue;
// } 

// Третій варіфнт

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//     if (i % 10 !== 0) {
//       continue;  
//     }
//     console.log(i);
// } 

// Зупинка лічильника на 50

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//     if (i === 50) {
//     break;
//     }
//     console.log(i);
// }

// Другий спосіб

// const min = 20;
// const max = 100;

// for (let i = min; i <= 50; i += 1) {
    
//     console.log(i);
// }

// Цикл while and do while

// Написати змінну
// Попросити користувача номер
// Написати цикл while do while

// let number = 0;

// while (number !== null && number <= 100) {
//     number = prompt ('Enter number');
//     console.log('number', number);
// }

// let number = 0;

// do {
//     number = prompt ('Enter number');
//     console.log('number', number);
// } while (number !== null && number <= 100);

// Масиви

// Знайти в масиві саму меншу число (Саму меншу монетку)

// const numbers = [23, 53, 8, 43, 32, 12, 15, 20, 5, 1,];
// let smallNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallNumber) {
//         smallNumber = number;
//     }
// }

// console.log(smallNumber);

// Домашнє завдання вивисти з масиву найбільше число

// const numbers = [23, 53, 8, 43, 32, 12, 15, 20, 5, 1,];
// let bigNumber = numbers[0];

// for (const number of numbers) {
//     if (number > bigNumber) {
//         bigNumber = number;
//     }
// }

// console.log(bigNumber);

// Добавлення і заміні імя в масиві

// const clients = ['Mango', 'Ajacs', 'Poly'];

// clients[0] = 'Kiwi';
// // console.log(clients[0]);
// clients[3] = 'Alex';
// console.log(clients);

// push Добавляє елементи в кінець масиву

// const numbers = [1, 2, 3, 4,];
// numbers.push(5, 6, 7,);
// console.log(numbers);

// slice Вирізаеє елементи з масиву

// const numbers = [1, 2, 3, 4, 5,];
// console.log(numbers.slice(3));
// console.log(numbers);

// const numbers = [1, 7, 3, 6, 5,];
// console.log(numbers.indexOf(3));
// console.log(numbers);

// Базові операції з масивом

// Створити масив styles з елементами <<Джаз>> і <<Блюз>>
// Добавити <<Роке-н-Ролл>> в кінець
// Замінити значення в середині на <<Класика>>
// Видалити перший елемент і виссти його в консоль
// Вставити <<Реп>> і <<Регі>> на початок масиву

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// console.log(styles);

// styles.splice(1, 1, 'Класика');
// console.log(styles);

// // Змінна const deleteStyles для того щоб зберегти видалиний елемент як що він буде потрібний в подальшому
// const deleteStyles = styles.shift();
// console.log(styles);

// styles.unshift('Реп', 'Регі');
// console.log(styles);

// const users = ["Mango", "Poly", "Kiwi"];

// for (let user of users) {
//     console.log(users.indexOf(user));
//     console.log(user);
// }

// Тернарний апарат для логшнів

// const logins = ['Hldndjv', 'Jkfkltn', 'Liurhvh', 'Yjfngkl'];

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайдений`
//     : `Користувач ${loginToFind} не знайдений`
// }

// console.log(findLogin(logins, 'Hldndjv'));
// console.log(findLogin(logins, 'Gfdcbcb'));
// console.log(findLogin(logins, 'Liurhvh'));
// console.log(findLogin(logins, 'Tijnkjn'));

// Добавлення і видалення курсів з корзини

// const courses = ["HTML", "CSS", "JavaScript", "React"];

// function addCourse(course) {
//     if (courses.includes(course)) {
//         console.log("В вас вже є такий курс");
//         return;
//     }
//     courses.push(course);
// }

// Стрілочна функція

// const addCourse = (course) => {
//     if (courses.includes(course)) {
//         console.log("В вас вже є такий курс");
//         return;
//     }
//     courses.push(course);
// }

// const removeCourse = (course) => {
//     const indexCourse = courses.indexOf(course);

//     console.log("removeCourse", removeCourse);
// }

// addCourse("Express");
// addCourse("CSS");
// removeCourse("React");
// console.log(courses);

// let remainder = 11 % 3;
// console.log(remainder);

// let lastNameLength = 0;
// const lastName = "Lovelace"
// lastNameLength = 8;
// console.log(lastName.length);

// const myArray = [];
//  let i = 5;

//  while (i >= 0) {
//     myArray.push(i--);
//  }

//  console.log(myArray);

// const myArray = [];

// for (let i = 1; i < 10; i += 2) {
//     myArray.push(i);
// }

// console.log(myArray); 

// const myArray = [];

// for (let i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }

// console.log(myArray);

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;

// for (let i = 0; i < myArr.length; i++) {
//     console.log(i);
// }

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Знаходимо кнопку героя та модальне вікно
// let heroButton = document.querySelector(".hero-button");
// let modal = document.getElementById("myModal");

// // Знаходимо елемент для закриття модального вікна
// let closeBtn = document.querySelector(".close");

// // Додаємо обробник події для кнопки героя
// heroButton.addEventListener("click", function() {
//   // Показуємо модальне вікно
//   modal.style.display = "block";
// });

// // Додаємо обробник події для елемента закриття
// closeBtn.addEventListener("click", function() {
//   // Ховаємо модальне вікно
//   modal.style.display = "none";
// });


// Отримуємо модальне вікно
let modal = document.getElementById("myModal");

// Отримуємо кнопку, яка відкриває модальне вікно
let btn = document.getElementsByClassName("hero-button")[0];

// Отримуємо елемент span, який закриває модальне вікно
let span = document.getElementsByClassName("close")[0];

// Отримуємо форму
let form = document.querySelector('form');

// Отримуємо елементи форми
let nameInput = document.getElementById("name");
let surnameInput = document.getElementById("surname");
let messageInput = document.getElementById("message");

// Додаємо обробник події для кнопки відправити
form.addEventListener('submit', function(e) {
  e.preventDefault(); // запобігаємо перезавантаженню сторінки після натискання кнопки відправити
  let name = nameInput.value;
  let surname = surnameInput.value;
  let message = messageInput.value;
  console.log("Ім'я: " + name);
  console.log("Прізвище: " + surname);
  console.log("Повідомлення: " + message);
  modal.style.display = "none"; // закриваємо модальне вікно після відправлення форми
});

// Додаємо обробник події для кнопки відкриття модального вікна
btn.onclick = function() {
  modal.style.display = "block";
}

// Додаємо обробник події для закривання модального вікна
span.onclick = function() {
  modal.style.display = "none";
}

// Додаємо обробник події для закривання модального вікна при кліку на будь-яке місце поза модальним вікном
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







