import {enableValidation, resetFormFields, toggleSubmitButton} from "./validate.js"
import {Card} from "./card.js"

export {popupImage, popupImageSign, elementPopupImg, buttonsSubmit, profileEditFormAdd, openPopup, deleteSubmitBtnDisabeld}
const buttonEditProfile = document.querySelector('.profile__edit-button');
const elementPopupEdit = document.querySelector('.popup_place_edit');
const elementPopupAdd = document.querySelector('.popup_place_add');
const elementPopupImg = document.querySelector('.popup_place_img');
// const buttonCloseEditForm = document.querySelector('.popup__close');
// const buttonCloseAddForm = document.querySelector('.popup__close_form_add');
const elementAddButton = document.querySelector('.profile__add-button');
const elementBody = document.querySelector('.root');
// const templateCard = document.querySelector('#template-сard');
const listCards = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_edit-form_name');
const jobInput = document.querySelector('.popup__input_edit-form_job');
const placeInput = document.querySelector('.popup__input_add-form_placename');
const placeLink = document.querySelector('.popup__input_add-form_link');
const profileEditForm = document.querySelector('.popup__content');
const profileEditFormAdd = document.querySelector('.popup__content_form_add');
// const buttonClosePic = document.querySelector('.popup__close_form_img');
const popupImage = document.querySelector('.popup__img');
const popupImageSign = document.querySelector('.popup__img-sign');
// const popupProfileBtn = document.querySelector('.popup__btn');
const buttonsSubmit = document.querySelectorAll('.popup__btn');
const popups = document.querySelectorAll('.popup');

const formConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
  elementBody.classList.remove('root_scroll');
  document.removeEventListener('keydown', setEscHandler);
  if (popup !== elementPopupImg) {
    resetFormFields(popup.querySelector('.popup__content'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  elementBody.classList.add('root_scroll');
  document.addEventListener('keydown', setEscHandler);
}

// function openPopupImg(img, imgSign) {
//   popupImage.src = img.src;
//   popupImage.alt = img.alt;
//   popupImageSign.textContent = imgSign.textContent;
//   openPopup(elementPopupImg);
// }

function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(elementPopupEdit);
}

function addCardFormHandler(evt) {
  evt.preventDefault();
  // const elementInputCard = createCard({ name: placeInput.value, link: placeLink.value });
  const elementInputCard = new Card({ name: placeInput.value, link: placeLink.value }, '#template-сard');
  listCards.prepend(elementInputCard.generateCard());
  profileEditFormAdd.reset();
  closePopup(elementPopupAdd);
}

function addCards() {
  initialCards.forEach((cardData) => {
  const card = new Card(cardData, '#template-сard');
  // const cardElement = card.generateCard();
  listCards.append(card.generateCard());
  });
  // const listInitialCards = initialCards.map(createCard);
  // listCards.append(...listInitialCards);
}

// function toggleLike(evt) {
//   evt.target.classList.toggle('element__like_active');
// }

// function deleteCard(evt) {
//   const element = evt.target.closest('.element');
//   element.remove();
// }

// function createCard(cardData) {
//   const cardElement = templateCard.content.cloneNode(true);
//   const cardElementTitle = cardElement.querySelector('.element__title');
//   const cardElementImage = cardElement.querySelector('.element__photo');
//   const cardElementLike = cardElement.querySelector('.element__like');
//   const cardElementTrash = cardElement.querySelector('.element__trash');
//   cardElementImage.src = cardData.link;
//   cardElementImage.alt = cardData.name;
//   cardElementTitle.textContent = cardData.name;
//   cardElementLike.addEventListener('click', toggleLike);
//   cardElementTrash.addEventListener('click', deleteCard);
//   cardElementImage.addEventListener('click', () => openPopupImg(cardElementImage, cardElementTitle));
//   return cardElement;
// }

function deleteSubmitBtnDisabeld() {
  buttonsSubmit.forEach((buttonElement) => {
    buttonElement.classList.remove('popup__btn_disabled');
  });
}

function setEscHandler(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_active');
    closePopup(popupActive);
  }
}

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

popups.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popupElement);
    }
  });
});

enableValidation(formConfig);

addCards();

