import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Api } from "../scripts/components/Api.js";
import {
  avatarElement,
  formConfig,
  token,
  buttonEditProfile,
  elementAddButton,
  profileEditForm,
  profileEditFormAdd,
  profileEditAvatarForm,
  cardListSelector
} from "../scripts/utils/constants.js";

const popupImage = new PopupWithImage('.popup_place_img', '.popup__img', '.popup__img-sign',);
popupImage.setEventListeners();

const popupProfile = new PopupWithForm('.popup_place_edit', submitEditFormHandler);
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_place_add', submitAddCardFormHandler);
popupAddCard.setEventListeners();

const popupDelCard = new PopupWithConfirmation('.popup_delete_card');
popupDelCard.setEventListeners();

const popupAvatar = new PopupWithForm('.popup__avatar', submitEditAvatarFormHandler);
popupAvatar.setEventListeners();

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();

const formAvatar = new FormValidator(formConfig, profileEditAvatarForm);
formAvatar.enableValidation();

const user = new UserInfo({ usernameSelector: '.profile__title', infoSelector: '.profile__subtitle' });

const api = new Api('https://nomoreparties.co/v1/cohort-43/users/me', token);

const cardList = new Section({
  items: {},
  renderer: (item) => {
    const currentUser = user.getUserInfo();
    const cardOwner = item.owner.name === currentUser.username ? true : false;
    const userSetLike = item.likes.some(item => item.name === currentUser.username);
    const cardElement = createCard(item, '#template-сard', cardOwner, userSetLike);
    cardList.addItem(cardElement, 'end');
  },
},
  cardListSelector
);

api.getUser()
  .then((obj) => {
    user.setUserInfo(obj.name, obj.about);
    avatarElement.src = obj.avatar;
  })
  .catch((err) => console.log(err));

Promise.all([api.getUser()])
  .then(() => {
    api.getInitialCards('https://mesto.nomoreparties.co/v1/cohort-43/cards')
      .then((obj) => {
        cardList.items = obj;
        cardList.renderItems();
      })
      .catch((err) => console.log(err));
  })

function submitAddCardFormHandler(evt, { placename, imgLink }, { buttonElement, buttonText }) {
  evt.preventDefault();
  buttonElement.textContent = 'Сохранение...'
  api.addCard(placename, imgLink)
    .then((obj) => {
      const cardElement = createCard({ name: placename, link: imgLink, likes: obj.likes, _id: obj._id }, '#template-сard', true, false)
      cardList.addItem(cardElement, 'start');
    })
    .catch((err) => console.log(err));
  popupAddCard.close();
  setTimeout(() => buttonElement.textContent = buttonText, 1000);
}

function submitEditAvatarFormHandler(evt, { avatarLink }, { buttonElement, buttonText }) {
  evt.preventDefault();
  buttonElement.textContent = 'Сохранение...'
  api.setAvatar('https://mesto.nomoreparties.co/v1/cohort-43/users/me/avatar', avatarLink)
    .then((obj) => {
      avatarElement.src = obj.avatar;
    })
    .catch((err) => console.log(err));
  popupAvatar.close();
  setTimeout(() => buttonElement.textContent = buttonText, 1000);
}

function submitEditFormHandler(evt, { jobInfo, username }, { buttonElement, buttonText }) {
  evt.preventDefault();
  buttonElement.textContent = 'Сохранение...'
  api.addUser({ about: jobInfo, name: username })
    .catch((err) => console.log(err));
  user.setUserInfo(username, jobInfo);
  popupProfile.close();
  setTimeout(() => buttonElement.textContent = buttonText, 1000);
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

function createCard(cardData, cardSelector, cardOwner, cardHasLike) {
  const card = new Card(cardData, cardSelector, handleCardClick, {
    deleteCard: (item, cardId) => {
      popupDelCard.open();
      popupDelCard.setSubmitHandler(() => {
        api.deleteCard('https://mesto.nomoreparties.co/v1/cohort-43/cards/', cardId)
          .then((res) => {
            if (res.ok) {
              card.deleteCard(item);
              popupDelCard.close();
            }
            else
              return Promise.reject(`Возникла ошибка ${res.status}`);
          })
          .catch((err) => console.log(err));
      });
    },
    addLike: (evt, cardId, likeAmountElement) => {
      api.addLike('https://mesto.nomoreparties.co/v1/cohort-43/cards/' + `${cardId}` + '/likes')
        .then((obj) => {
          likeAmountElement.textContent = obj.likes.length;
          card.toggleLike(evt, likeAmountElement, obj.likes.length, 'like');
        })
        .catch((err) => console.log(err));

    },
    delLike: (evt, cardId, likeAmountElement) => {
      api.deleteLike('https://mesto.nomoreparties.co/v1/cohort-43/cards/' + `${cardId}` + '/likes')
        .then((obj) => {
          likeAmountElement.textContent = obj.likes.length;
          card.toggleLike(evt, likeAmountElement, obj.likes.length, 'empty');
        })
        .catch((err) => console.log(err));
    },
    cardOwner,
    cardHasLike
  });
  return card.generateCard();
}

elementAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formAdd.resetFormFields();
  formAdd.toggleSubmitButton();
});

buttonEditProfile.addEventListener('click', () => {
  const currentUser = user.getUserInfo();
  popupProfile.setInputValues(currentUser);
  popupProfile.open();
  formEdit.resetFormFields();
  formEdit.toggleSubmitButton();
})

avatarElement.addEventListener('click', () => {
  popupAvatar.open();
  formAvatar.resetFormFields();
});


