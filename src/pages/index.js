import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import {
  initialCards,
  formConfig,
  buttonEditProfile,
  elementAddButton,
  profileEditForm,
  profileEditFormAdd,
  cardListSelector
} from "../scripts/utils/constants.js";

fetch('https://nomoreparties.co/v1/cohort-43/users/me', {
  headers: {
    'Authorization':'6c4179cf-c3ec-4b62-8222-3e29a4a7f86c',
  },
})
  .then((res) => {
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const popupImage = new PopupWithImage('.popup_place_img', '.popup__img', '.popup__img-sign',);
popupImage.setEventListeners();

const popupProfile = new PopupWithForm('.popup_place_edit', submitEditFormHandler);
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_place_add', handleAddCardForm);
popupAddCard.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item, '#template-сard');
    cardList.addItem(cardElement, 'end');
  },
},
  cardListSelector
);

cardList.renderItems();

const user = new UserInfo({ username: '.profile__title', info: '.profile__subtitle' });

function handleAddCardForm(evt, { placename, imgLink }) {
  evt.preventDefault();
  const cardElement = createCard({ name: placename, link: imgLink }, '#template-сard')
  cardList.addItem(cardElement, 'start');
  popupAddCard.close();
}

function submitEditFormHandler(evt, { jobInfo, username }) {
  evt.preventDefault();
  user.setUserInfo(username, jobInfo);
  popupProfile.close();
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

function createCard(cardData, cardSelector) {
  const card = new Card(cardData, cardSelector, handleCardClick);
  return card.generateCard();
}

buttonEditProfile.addEventListener('click', () => {
  const currentUser = user.getUserInfo();
  popupProfile.setInputValues(currentUser);
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
