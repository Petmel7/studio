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

// const modal = document.querySelector('.backdrop');
// const modalForm = document.querySelector('.js-speacer-form');

// Отримати елементи форми
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
// // modal.addEventListener('click', function(event) {
// //   if (event.target.classList.contains('modal-cross__button') || event.target.classList.contains('backdrop')) {
// //     hideModal();
// //   }
// // });

// // modalForm.addEventListener('submit', handleFormSubmit);

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



  