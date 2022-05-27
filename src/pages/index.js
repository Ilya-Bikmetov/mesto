import { Card } from "../scripts/components/Card.js"
import { FormValidator } from "../scripts/components/FormValidator.js"
export { openPopup }

const elementBody = document.querySelector('.root');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const elementPopupEdit = document.querySelector('.popup_place_edit');
const elementPopupAdd = document.querySelector('.popup_place_add');
const elementAddButton = document.querySelector('.profile__add-button');
const listCards = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_edit-form_name');
const jobInput = document.querySelector('.popup__input_edit-form_job');
const placeInput = document.querySelector('.popup__input_add-form_placename');
const placeLink = document.querySelector('.popup__input_add-form_link');
const profileEditForm = document.querySelector('.popup__content');
const profileEditFormAdd = document.querySelector('.popup__content_form_add');
const popups = document.querySelectorAll('.popup');

const formConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
  elementBody.classList.remove('root_scroll');
  document.removeEventListener('keydown', setEscHandler);
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  elementBody.classList.add('root_scroll');
  document.addEventListener('keydown', setEscHandler);
  if (popup == elementPopupEdit)
    formEdit.resetFormFields();
  if (popup == elementPopupAdd) {
    formAdd.resetFormFields();
    profileEditFormAdd.reset();
  }
}

function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(elementPopupEdit);
}

function createCard(cardData, cardSelector) {
  const card = new Card(cardData, cardSelector);
  return card.generateCard();
}

function addCardFormHandler(evt) {
  evt.preventDefault();
  listCards.prepend(createCard({ name: placeInput.value, link: placeLink.value }, '#template-сard'));
  profileEditFormAdd.reset();
  closePopup(elementPopupAdd);
}

function addCards() {
  initialCards.forEach((cardData) => listCards.append(createCard(cardData, '#template-сard')));
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
