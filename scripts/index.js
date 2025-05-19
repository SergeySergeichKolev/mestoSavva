//-------------ПЕРЕМЕННЫЕ--------------------

let cardTemplate = document.querySelector("#card-template"); //шаблон карточки
let cardsList = document.querySelector(".places__list"); //внутри будут карточки, это список для них

// ------------ РЕДАКТИРОВАНИЕ ПРОФИЛЯ ---------------
let popupEdit = document.querySelector(".popup_type_edit");
let openPopupEdit = document.querySelector(".profile__edit-button");
let closePopupEdit = popupEdit.querySelector(".popup__close");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
let popupEditForm = popupEdit.querySelector(".popup__form");
let inputName = document.querySelector(".popup__input_type_name");
let inputJob = document.querySelector(".popup__input_type_description");

// ------------ ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ -------------
let popupCard = document.querySelector(".popup_type_new-card");
let openPopupCard = document.querySelector(".profile__add-button");
let closePopupCard = popupCard.querySelector(".popup__close");
let popupCardForm = popupCard.querySelector(".popup__form");
let inputMesto = document.querySelector(".popup__input_type_card-name");
let inputLink = document.querySelector(".popup__input_type_url");

//окно увеличения изображения
let popupImage = document.querySelector(".popup_type_image");
let closePopupImage = popupImage.querySelector(".popup__close");

//Кнопка сохранить
let editSaveButton = popupEdit.querySelector(".popup__button");

// profileName.textContent = input.value
// profileJob.textContent  =

//Механика сборки карточки
//Лайк, мусорка, увеличение изображения
function createCard(title, image) {
  let cardClone = cardTemplate.content.cloneNode(true);
  let cardImage = cardClone.querySelector(".card__image");
  let cardTitle = cardClone.querySelector(".card__title");
  let cardDelete = cardClone.querySelector(".card__delete-button");
  let cardLike = cardClone.querySelector(".card__like-button");

  cardTitle.textContent = title;
  cardImage.src = image;

  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__like-button_is-active");
  });

  cardDelete.addEventListener("click", function () {
    cardDelete.parentElement.remove();
  });

  cardImage.addEventListener("click", function () {
    popupImage.querySelector(".popup__image").src = image;
    popupImage.querySelector(".popup__caption").textContent = title;
    openPopup(popupImage);
  });

  cardsList.prepend(cardClone);
}

//Цикл который отображает 6 карточек
//Стартовое отображение карточек

for (let i = 0; i < initialCards.length; i++) {
  let cardClone = cardTemplate.content.cloneNode(true);
  let cardImage = cardClone.querySelector(".card__image");
  let cardTitle = cardClone.querySelector(".card__title");
  let cardLike = cardClone.querySelector(".card__like-button");
  let cardDelete = cardClone.querySelector(".card__delete-button");

  cardTitle.textContent = initialCards[i].name;
  cardImage.src = initialCards[i].link;

  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__like-button_is-active");
  });

  cardDelete.addEventListener("click", function () {
    cardDelete.parentElement.remove();
  });

  cardImage.addEventListener("click", function () {
    popupImage.querySelector(".popup__image").src = initialCards[i].link;
    popupImage.querySelector(".popup__caption").textContent =
      initialCards[i].name;
    openPopup(popupImage);
  });

  cardsList.append(cardClone);
}

//Обработка октрытия попапов

openPopupEdit.addEventListener("click", function () {
  openPopup(popupEdit);
});

openPopupCard.addEventListener("click", function () {
  openPopup(popupCard);
});

//Обработка закрытия попапов

closePopupEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});

closePopupCard.addEventListener("click", function () {
  closePopup(popupCard);
});

closePopupImage.addEventListener("click", function () {
  closePopup(popupImage);
});

//открытие любого окна
function openPopup(modal) {
  modal.style.display = "flex";
}

//закрытие любого окна
function closePopup(modal) {
  modal.style.display = "none";
}

//обработка отправки формы новой карточки
popupCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createCard(inputMesto.value, inputLink.value);
  closePopup(popupCard);
  inputMesto.value = "";
  inputLink.value = "";
});

//изменение данных профиля
popupEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
  inputName.value = "";
  inputJob.value = "";
});

//Array.from - массив из
// создает массив из другого объекта

//обычная функция - function createCard(){}

//стрелочная функция - const createCard = () => {}

// показывать ошибку
const showError = (form, input, error) => {};

//скрывать ошибку
const hideError = (form, input) => {};

//проверка input на правильность данных
const isValid = (form, input) => {
  //если данные введены верно - скрыть ошибку, иначе - показать
  if (input.validity.valid === true) {
    hideError();
  } else {
    showError();
  }
};

//функция вклчить валидацию
const enableValidation = () => {
  //собрать все формы на сайте и сделать из них массив
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  // [форма1, форма2, форма3, форма4]
  //для каждой формы в массиве formList сделать что-то
  formList.forEach(() => {});
};

const setEventListeners = (form) => {
  //находить в форме все инпуты
  //на каждый инпут ставить датчик
};

// console.log(inputJob.validity.valid);
