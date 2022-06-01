import { createCard } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo, submitEditFormHandler } from "../scripts/components/UserInfo.js";
import { addCardFormHandler } from "../scripts/components/Card.js";
import {
  initialCards,
  formConfig,
  buttonEditProfile,
  elementAddButton,
  nameInput,
  jobInput,
  profileEditForm,
  profileEditFormAdd,
  cardListSelector
} from "../scripts/utils/constants.js";

export const user = new UserInfo({ userName: '.profile__title', info: '.profile__subtitle' });

export const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item, '#template-сard');
    cardList.addItem(cardElement, 'end');
  },
},
  cardListSelector
);

cardList.renderItems();

export const popupImage = new PopupWithImage('.popup_place_img', '.popup__img', '.popup__img-sign');

export const popupAddCard = new PopupWithForm('.popup_place_add', addCardFormHandler);
popupAddCard.setEventListeners();

export const popupProfile = new PopupWithForm('.popup_place_edit', submitEditFormHandler);
popupProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  const currentUser = user.getUserInfo();
  nameInput.value = currentUser.name;
  jobInput.value = currentUser.info;
  popupProfile.open();
  formEdit.resetFormFields();
  formEdit.toggleSubmitButton();
});

elementAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formAdd.resetFormFields();
  formAdd.toggleSubmitButton();
});

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();
