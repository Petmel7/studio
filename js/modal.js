(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[data-modal-open]"), 
      closeModalBtn: document.querySelector("[data-modal-close]"), 
      modal: document.querySelector("[data-modal]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
    } 
  })();





// const dataModal = document.querySelector('.backdrop');
// const modalForm = document.querySelector('.js-speacer-form');

// // Отримати елементи форми
// const nameInput = document.getElementById('name');
// const telInput = document.getElementById('tel');
// const mailInput = document.getElementById('mail');
// const commentInput = document.getElementById('comment');
// const agreementCheckbox = document.querySelector('.modal-label__checkbox');

// // Показати модальне вікно
// function showModal() {
//   modal.classList.remove('is-hidden');
// }

// // Сховати модальне вікно
// function hideModal() {
//   modal.classList.add('is-hidden');
// }

// // Обробник події відправлення форми
// function handleFormSubmit(event) {
//   event.preventDefault();
  
//   // Отримати значення полів форми
//   const name = nameInput.value;
//   const tel = telInput.value;
//   const mail = mailInput.value;
//   const comment = commentInput.value;
//   const agreement = agreementCheckbox.checked;

//   // Відправити дані форми на сервер або зберегти їх у локальному сховищі
//   // ...

//   // Очистити значення полів форми
//   nameInput.value = '';
//   telInput.value = '';
//   mailInput.value = '';
//   commentInput.value = '';
//   agreementCheckbox.checked = false;

//   // Сховати модальне вікно
//   hideModal();
// }

// // Додати обробники подій на кнопки
// modal.addEventListener('click', function(event) {
//   if (event.target.classList.contains('modal-cross__button') || event.target.classList.contains('backdrop')) {
//     hideModal();
//   }
// });

// modalForm.addEventListener('submit', handleFormSubmit);

// const modalWrapper = document.querySelector('.modal-wrapper');
// const modal = modalWrapper.querySelector('.modal');
// const closeButton = modal.querySelector('.modal-close');
// const form = modal.querySelector('.js-speaker-form');

// // функція для відкриття модального вікна
// function openModal() {
//   modalWrapper.classList.add('open');
//   document.body.classList.add('no-scroll');
// }

// // функція для закриття модального вікна
// function closeModal() {
//   modalWrapper.classList.remove('open');
//   document.body.classList.remove('no-scroll');
// }

// // закриття модального вікна при натисканні на кнопку закриття
// closeButton.addEventListener('click', closeModal);

// // закриття модального вікна при натисканні на затемнену область вікна
// modalWrapper.addEventListener('click', function(event) {
//   if (event.target === modalWrapper) {
//     closeModal();
//   }
// });

// // закриття модального вікна при натисканні клавіші "Escape"
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// });

// // обробка події submit форми
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   // код для відправки форми на сервер
//   closeModal();
// });

// // відкриття модального вікна при натисканні на кнопку або посилання
// const openModalButtons = document.querySelectorAll('[data-modal]');
// openModalButtons.forEach(function(button) {
//   button.addEventListener('click', openModal);
// });






// const modalWrapper = document.querySelector('.modal-wrapper');
// const modal = modalWrapper.querySelector('.modal');
// const closeButton = modal.querySelector('.modal-close');
// const form = modal.querySelector('.js-speaker-form');

// // Показати модальне вікно
// function openModal() {
//   modalWrapper.classList.add('open');
//   document.body.classList.add('no-scroll');
// }

// // Сховати модальне вікно
// function closeModal() {
//   modalWrapper.classList.remove('open');
//   document.body.classList.remove('no-scroll');
// }

// // Закриття модального вікна при натисканні на кнопку закриття
// closeButton.addEventListener('click', closeModal);

// // Закриття модального вікна при натисканні на затемнену область вікна
// modalWrapper.addEventListener('click', function(event) {
//   if (event.target === modalWrapper) {
//     closeModal();
//   }
// });

// // Закриття модального вікна при натисканні клавіші "Escape"
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// });

// // Обробка події submit форми
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   // Код для відправки форми на сервер
//   closeModal();
// });

// // Відкриття модального вікна при натисканні на кнопку або посилання
// const openModalButtons = document.querySelectorAll('[data-modal]');
// openModalButtons.forEach(function(button) {
//   button.addEventListener('click', openModal);
// });



 

// Отримуємо модальне вікно
// let modal = document.getElementById(".backdrop");
let modal = document.querySelector(".backdrop");
// console.log(modal);

// Отримуємо кнопку, яка відкриває модальне вікно
let btn = document.getElementsByClassName("hero-button")[0];
// console.log(btn);

// Отримуємо елемент span, який закриває модальне вікно
let button = document.getElementsByClassName("modal-cross__button")[0];
// console.log(button);

// Отримуємо форму
let form = document.querySelector('form js-speacer-form');
// console.log(form);

// Отримуємо елементи форми
let nameInput = document.getElementById("name");
let telInput = document.getElementById("tel");
let mailInput = document.getElementById("mail")
let textareaInput = document.getElementById("textarea");
// console.log(nameInput);
// console.log(telInput);
// console.log(mailInput);
// console.log(textareaInput);

// Додаємо обробник події для кнопки відправити
form.addEventListener('submit', function(e) {
  e.preventDefault(); // запобігаємо перезавантаженню сторінки після натискання кнопки відправити
  let name = nameInput.value;
  let tel = telInput.value;
  let mail = mailInput.value;
  let textarea = textareaInput.value;
  console.log("Ім'я: " + name);
  console.log("Телефон: " + tel);
  console.log("Пошта: " + mail);
  console.log("Повідомлення: " + textarea);
  modal.style.display = "none"; // закриваємо модальне вікно після відправлення форми
});

// Додаємо обробник події для кнопки відкриття модального вікна
btn.onclick = function() {
  modal.style.display = "block";
}

// Додаємо обробник події для закривання модального вікна
button.onclick = function() {
  modal.style.display = "none";
}