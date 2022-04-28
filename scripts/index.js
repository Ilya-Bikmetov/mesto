const buttonEditProfile = document.querySelector('.profile__edit-button');
const elementPopupEdit = document.querySelector('.popup_place_edit');
const elementPopupAdd = document.querySelector('.popup_place_add');
const elementPopupImg = document.querySelector('.popup_place_img');
const buttonCloseEditForm = document.querySelector('.popup__close');
const buttonCloseAddForm = document.querySelector('.popup__close_form_add');
const elementAddButton = document.querySelector('.profile__add-button');
const elementBody = document.querySelector('.root');
const templateCard = document.querySelector('#template-сard');
const listCards = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_edit-form_name');
const jobInput = document.querySelector('.popup__input_edit-form_job');
const placeInput = document.querySelector('.popup__input_add-form_placename');
const placeLink = document.querySelector('.popup__input_add-form_link');
const profileEditForm = document.querySelector('.popup__content');
const profileEditFormAdd = document.querySelector('.popup__content_form_add');
const buttonClosePic = document.querySelector('.popup__close_form_img');
const popupImage = document.querySelector('.popup__img');
const popupImageSign = document.querySelector('.popup__img-sign');
const popupProfileBtn = document.querySelector('.popup__btn');
const buttonsSubmit = document.querySelectorAll('.popup__btn');
const popups = document.querySelectorAll('.popup');

function closePopup() {
  document.querySelector('.popup_active').classList.remove('popup_active');
  elementBody.classList.remove('root_scroll');
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  elementBody.classList.add('root_scroll');
}

function openPopupImg(img, imgSign) {
  popupImage.src = img.src;
  popupImage.alt = img.alt;
  popupImageSign.textContent = imgSign.textContent;
  openPopup(elementPopupImg);
}

function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function addCardFormHandler(evt) {
  evt.preventDefault();
  const elementInputCard = createCard({ name: placeInput.value, link: placeLink.value });
  listCards.prepend(elementInputCard);
  profileEditFormAdd.reset();
  closePopup();
}

function addCards() {
  const listInitialCards = initialCards.map(createCard);
  listCards.append(...listInitialCards);
}

function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active')
}

function deleteCard(evt) {
  const element = evt.target.closest('.element');
  element.remove();
}

function createCard(cardData) {
  const cardElement = templateCard.content.cloneNode(true);
  const cardElementTitle = cardElement.querySelector('.element__title');
  const cardElementImage = cardElement.querySelector('.element__photo');
  const cardElementLike = cardElement.querySelector('.element__like');
  const cardElementTrash = cardElement.querySelector('.element__trash');
  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;
  cardElementTitle.textContent = cardData.name;
  cardElementLike.addEventListener('click', toggleLike);
  cardElementTrash.addEventListener('click', deleteCard);
  cardElementImage.addEventListener('click', () => openPopupImg(cardElementImage, cardElementTitle));
  return cardElement;
}

function resetFormFields(formElement) {
  inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    hideInputError('popup__input_type_error', 'popup__input-error_active', inputElement, formElement);
  });
  deleteSubmitBtnDisabeld();
  if (formElement.classList.contains('popup__content_form_add')) {
    profileEditFormAdd.reset();
  }

}

function deleteSubmitBtnDisabeld() {
  buttonsSubmit.forEach((buttonElement) => {
    buttonElement.classList.remove('popup__btn_disabled');
  });
}

buttonCloseEditForm.addEventListener('click', () => {
  closePopup();
  resetFormFields(profileEditForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonCloseAddForm.addEventListener('click', () => {
  closePopup();
  resetFormFields(profileEditFormAdd);
  profileEditFormAdd.reset();
});

profileEditForm.addEventListener('submit', submitEditFormHandler);
profileEditFormAdd.addEventListener('submit', addCardFormHandler);
elementAddButton.addEventListener('click', () => {
  openPopup(elementPopupAdd);
  toggleSubmitButton('popup__btn_disabled', profileEditFormAdd);
});

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(elementPopupEdit);
  toggleSubmitButton('popup__btn_disabled', profileEditForm);
});

buttonClosePic.addEventListener('click', () => closePopup());

popups.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup();
      resetFormFields(evt.target.querySelector('.popup__content'));
    }
  });
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (elementPopupAdd.classList.contains('popup_active')) {
      resetFormFields(profileEditFormAdd);
    }
    if (elementPopupEdit.classList.contains('popup_active')) {
      resetFormFields(profileEditForm);
    }
    closePopup();
  }
});

enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

addCards();

