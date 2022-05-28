export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const elementBody = document.querySelector('.root');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const elementPopupEdit = document.querySelector('.popup_place_edit');
export const elementPopupAdd = document.querySelector('.popup_place_add');
export const elementAddButton = document.querySelector('.profile__add-button');
export const profileName = document.querySelector('.profile__title');
export const profileJob = document.querySelector('.profile__subtitle');
export const nameInput = document.querySelector('.popup__input_edit-form_name');
export const jobInput = document.querySelector('.popup__input_edit-form_job');
export const placeInput = document.querySelector('.popup__input_add-form_placename');
export const placeLink = document.querySelector('.popup__input_add-form_link');
export const profileEditForm = document.querySelector('.popup__content');
export const profileEditFormAdd = document.querySelector('.popup__content_form_add');
export const popups = document.querySelectorAll('.popup');
export const cardListSelector = '.elements__list';

export const popupImage = document.querySelector('.popup__img');
export const popupImageSign = document.querySelector('.popup__img-sign');
export const elementPopupImg = document.querySelector('.popup_place_img');
