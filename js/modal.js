
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




  // const openModalBtn = document.querySelector("[data-modal-open]");
  // const closeModalBtn = document.querySelector("[data-modal-close]");
  // const modal = document.querySelector("[data-modal]");

  // openModalBtn.addEventListener("click", openModal);
  // closeModalBtn.addEventListener("click", closeModal);

  // function openModal() {
  //   modal.classList.add("is-hidden");
  // }

  // function closeModal() {
  //   modal.classList.remove("is-hidden");
  // }




  // Отримуємо форму
  const form = document.querySelector('.js-speacer-form');

  // Отримуємо елементи форми
  const nameInput = document.getElementById("name");
  const telInput = document.getElementById("tel");
  const mailInput = document.getElementById("mail")
  const textareaInput = document.getElementById("textarea");

  // Додаємо обробник події для кнопки відправити
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // запобігаємо перезавантаженню сторінки після натискання кнопки відправити
    const name = nameInput.value;
    const tel = telInput.value;
    const mail = mailInput.value;
    const textarea = textareaInput.value;
    console.log("Ім'я: " + name);
    console.log("Телефон: " + tel);
    console.log("Пошта: " + mail);
    console.log("Повідомлення: " + textarea);
    //Отримуємо дані з форми і відправляємо на сервер за допомогою AJAX-запиту
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'url_for_sending_data.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.send('name=' + name + '&tel=' + tel + '&mail=' + mail + '&textarea=' + textarea);
    refs.modal.style.display = "none"; // закриваємо модальне вікно після відправлення форми
  });