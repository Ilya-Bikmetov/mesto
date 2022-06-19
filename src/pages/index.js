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
  apiConfig,
  formConfig,
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

const popupAvatar = new PopupWithForm('.popup_avatar', submitEditAvatarFormHandler);
popupAvatar.setEventListeners();

const popupDelCard = new PopupWithConfirmation('.popup_delete_card');
popupDelCard.setEventListeners();

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();

const formAvatar = new FormValidator(formConfig, profileEditAvatarForm);
formAvatar.enableValidation();

const user = new UserInfo({ usernameSelector: '.profile__title', infoSelector: '.profile__subtitle' });

const api = new Api(apiConfig);

const cardList = new Section({
  items: {},
  renderer: (item) => {
    const cardOwner = item.owner._id === user.userId ? true : false;
    const userSetLike = item.likes.some(item => item._id === user.userId);
    const cardElement = createCard(item, '#template-сard', cardOwner, userSetLike);
    cardList.addItem(cardElement, 'end');
  },
},
  cardListSelector
);

Promise.all([api.getUser('users/me'), api.getInitialCards('cards')])
  .then(([userData, cards]) => {
    user.setUserInfo({ name: userData.name, info: userData.about, id: userData._id, avatar: userData.avatar, avatarElement });
    cardList.items = cards;
    cardList.renderItems();
  })
  .catch((err) => console.log(err));

function submitAddCardFormHandler(evt, { placename, imgLink }) {
  evt.preventDefault();
  popupAddCard.changeSubmitBtnActionName('Сохранение...');
  api.addCard(placename, imgLink, 'cards')
    .then((obj) => {
      const cardElement = createCard({ name: placename, link: imgLink, likes: obj.likes, _id: obj._id }, '#template-сard', true, false)
      cardList.addItem(cardElement, 'start');
      popupAddCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddCard.setSubmitBtnTimer());
}

function submitEditAvatarFormHandler(evt, { avatarLink }) {
  evt.preventDefault();
  popupAvatar.changeSubmitBtnActionName('Сохранение...')
  api.setAvatar('users/me/avatar', avatarLink)
    .then((obj) => {
      user.changeAvatar(obj.avatar);
      popupAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAvatar.setSubmitBtnTimer());
}

function submitEditFormHandler(evt, { jobInfo, username }) {
  evt.preventDefault();
  popupProfile.changeSubmitBtnActionName('Сохранение...')
  api.addUser({ about: jobInfo, name: username }, 'users/me')
    .then(() => {
      user.changeUserInfo({ name: username, info: jobInfo });
      popupProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupProfile.setSubmitBtnTimer());
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

function createCard(cardData, cardSelector, cardOwner, cardHasLike) {
  const card = new Card(cardData, cardSelector, handleCardClick, {
    deleteCard: (item, cardId) => {
      popupDelCard.open();
      popupDelCard.setSubmitHandler(() => {
        popupDelCard.changeSubmitBtnActionName('Удаление...');
        api.deleteCard(`cards/${cardId}`)
          .then(() => {
            card.deleteCard(item);
            popupDelCard.close();
          })
          .catch((err) => console.log(err))
          .finally(() => popupDelCard.setSubmitBtnTimer());
      });
    },
    addLike: (evt, cardId, likeAmountElement) => {
      api.addLike(`cards/${cardId}/likes`)
        .then((obj) => {
          likeAmountElement.textContent = obj.likes.length;
          card.toggleLike(evt, likeAmountElement, obj.likes.length, 'like');
        })
        .catch((err) => console.log(err));

    },
    delLike: (evt, cardId, likeAmountElement) => {
      api.deleteLike(`cards/${cardId}/likes`)
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


