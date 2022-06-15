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

const popupDelCard = new PopupWithConfirmation('.popup_delete_card');
popupDelCard.setEventListeners();

const user = new UserInfo({ usernameSelector: '.profile__title', infoSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' });
const api = new Api('https://nomoreparties.co/v1/cohort-43/users/me', token);

const cardList = new Section({
  items: {},
  renderer: (item) => {
    const currentUser = user.getUserInfo();
    const isOwner = item.owner.name == currentUser.username ? true : false;
    const cardElement = createCard(item, '#template-сard', isOwner);
    cardList.addItem(cardElement, 'end');
  },
},
  cardListSelector
);

api.getInitialCards('https://mesto.nomoreparties.co/v1/cohort-43/cards')
  .then((obj) => {
    cardList.items = obj;
    cardList.renderItems();
  })
  .catch((err) => console.log(err));

api.getUser()
  .then((obj) => {
    user.setUserInfo(obj.name, obj.about);
  })
  .catch((err) => console.log(err));

buttonEditProfile.addEventListener('click', () => {
  const currentUser = user.getUserInfo();
  popupProfile.setInputValues(currentUser);
  popupProfile.open();
  formEdit.resetFormFields();
  formEdit.toggleSubmitButton();
})

function handleAddCardForm(evt, { placename, imgLink }) {
  evt.preventDefault();
  api.addCard(placename, imgLink)
    .then((obj) => {

      const cardElement = createCard({ name: placename, link: imgLink, likes: obj.likes, _id: obj._id }, '#template-сard', true)
      cardList.addItem(cardElement, 'start');
    })
    .catch((err) => console.log(err));

  popupAddCard.close();
}

function submitEditFormHandler(evt, { jobInfo, username }) {
  evt.preventDefault();
  api.addUser({ about: jobInfo, name: username })
    .catch((err) => console.log(err));
  user.setUserInfo(username, jobInfo);
  popupProfile.close();
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

function createCard(cardData, cardSelector, isOwner) {
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
    addLike: (evt, cardId, likeAmountElement, amountLikes) => {
      api.addLike('https://mesto.nomoreparties.co/v1/cohort-43/cards/' + `${cardId}` + '/likes')
        .then((res) => {
          if (res.ok) {
            amountLikes++;
            likeAmountElement.textContent = amountLikes;
            card.toggleLike(evt, likeAmountElement, amountLikes);
          }
          else
            return Promise.reject(`Возникла ошибка ${res.status}`);
        })
        .catch((err) => console.log(err));

    },
    delLike: (evt, cardId, likeAmountElement, amountLikes) => {
      api.deleteLike('https://mesto.nomoreparties.co/v1/cohort-43/cards/' + `${cardId}` + '/likes')
        .then((res) => {
          if (res.ok) {
            amountLikes--;
            likeAmountElement.textContent = amountLikes;

            card.toggleLike(evt, likeAmountElement, amountLikes);
          }
          else
            return Promise.reject(`Возникла ошибка ${res.status}`);
        })
        .catch((err) => console.log(err));
    },
    isOwner
  });
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
