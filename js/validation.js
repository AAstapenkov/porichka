let phoneInput = document.querySelector("#form-phone");
let btn = document.querySelector(".form-button");
let nameInput = document.querySelector("#form-name");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{359} (00) 000 000",
  lazy: false,  // make placeholder always visible
  placeholderChar: '_'   
});

phoneInput.addEventListener("input", inputHandler);
nameInput.addEventListener("input", inputHandler);


// Если ввели правильно - кнопка активна
function inputHandler() {
  if (phoneMask.masked.isComplete && nameInput.value) {
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
}