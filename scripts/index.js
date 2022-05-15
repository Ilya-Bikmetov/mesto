import { Card } from "./card.js"
import { FormValidator } from "./formValidator.js"
export { popupImage, popupImageSign, elementPopupImg, buttonsSubmit, profileEditFormAdd, openPopup, deleteSubmitBtnDisabeld }

const buttonEditProfile = document.querySelector('.profile__edit-button');
const elementPopupEdit = document.querySelector('.popup_place_edit');
const elementPopupAdd = document.querySelector('.popup_place_add');
const elementPopupImg = document.querySelector('.popup_place_img');
const elementAddButton = document.querySelector('.profile__add-button');
const elementBody = document.querySelector('.root');
const listCards = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_edit-form_name');
const jobInput = document.querySelector('.popup__input_edit-form_job');
const placeInput = document.querySelector('.popup__input_add-form_placename');
const placeLink = document.querySelector('.popup__input_add-form_link');
const profileEditForm = document.querySelector('.popup__content');
const profileEditFormAdd = document.querySelector('.popup__content_form_add');
const popupImage = document.querySelector('.popup__img');
const popupImageSign = document.querySelector('.popup__img-sign');
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

  if (popup == elementPopupEdit) {
    formEdit.resetFormFields();
  }

  if (popup == elementPopupAdd) {
    formAdd.resetFormFields();
  }
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  elementBody.classList.add('root_scroll');
  document.addEventListener('keydown', setEscHandler);
}

function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(elementPopupEdit);
}

function addCardFormHandler(evt) {
  evt.preventDefault();
  const elementInputCard = new Card({ name: placeInput.value, link: placeLink.value }, '#template-сard');
  listCards.prepend(elementInputCard.generateCard());
  profileEditFormAdd.reset();
  closePopup(elementPopupAdd);
}

function addCards() {
  initialCards.forEach((cardData) => {
    const card = new Card(cardData, '#template-сard');
    listCards.append(card.generateCard());
  });
}

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
  formAdd.toggleSubmitButton();
});

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(elementPopupEdit);
  formEdit.toggleSubmitButton();
});

popups.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popupElement);
    }
  });
});

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();

addCards();

