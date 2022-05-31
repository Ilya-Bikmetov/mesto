import { createCard } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
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

function submitEditFormHandler(evt, inputs) {
  evt.preventDefault();
  user.setUserInfo(inputs[0].value, inputs[1].value);
  popupProfile.close();
}

function addCardFormHandler(evt, inputs) {
  evt.preventDefault();
  const cardElement = createCard({ name: inputs[0].value, link: inputs[1].value }, '#template-сard')
  cardList.addItem(cardElement, 'start');
  popupAddCard.close();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item, '#template-сard');
    cardList.addItem(cardElement, 'end');
  },
},
  cardListSelector
);

const popupAddCard = new PopupWithForm('.popup_place_add', addCardFormHandler);
popupAddCard.setEventListeners();

const popupProfile = new PopupWithForm('.popup_place_edit', submitEditFormHandler);
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

const user = new UserInfo({ userName: '.profile__title', info: '.profile__subtitle' });

cardList.renderItems();

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();
