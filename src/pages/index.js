import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Api } from "../scripts/components/Api.js";
import {
  initialCards,
  formConfig,
  token,
  buttonEditProfile,
  elementAddButton,
  profileEditForm,
  profileEditFormAdd,
  cardListSelector
} from "../scripts/utils/constants.js";

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
const user = new UserInfo({ usernameSelector: '.profile__title', infoSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' });

const userApi = new Api('https://nomoreparties.co/v1/cohort-43/users/me', token);

userApi.getUser()
  .then((obj) => {
    user.setUserInfo(obj.name, obj.about);
  })
  .catch((err) => console.log(err));

buttonEditProfile.addEventListener('click', () => {
  userApi.getUser()
  .then((obj) => {
    const currentUser = user.getUserInfo(obj.name, obj.about, obj.avatar);
    popupProfile.setInputValues(currentUser);
  })
  .catch((err) => console.log(err));
  popupProfile.open();
  formEdit.resetFormFields();
  formEdit.toggleSubmitButton();
})


function handleAddCardForm(evt, { placename, imgLink }) {
  evt.preventDefault();
  const cardElement = createCard({ name: placename, link: imgLink }, '#template-сard')
  cardList.addItem(cardElement, 'start');
  popupAddCard.close();
}

function submitEditFormHandler(evt, { jobInfo, username }) {
  evt.preventDefault();
  userApi.addUser({ about: jobInfo, name: username });
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

elementAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formAdd.resetFormFields();
  formAdd.toggleSubmitButton();
});

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();
