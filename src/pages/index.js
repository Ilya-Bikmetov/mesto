import { createCard } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import {
  initialCards,
  formConfig,
  buttonEditProfile,
  elementAddButton,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  placeInput,
  placeLink,
  profileEditForm,
  profileEditFormAdd,
  cardListSelector
} from "../scripts/utils/constants.js";

function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupProfile.close();
}


function addCardFormHandler(evt) {
  evt.preventDefault();
  const oneCard = new Section({
    items: [{ name: placeInput.value, link: placeLink.value }],
    renderer: (item) => {
      const cardElement = createCard(item, '#template-сard');
      oneCard.addItem(cardElement, 'start');
    },
  },
    cardListSelector
  );
  oneCard.renderItems();
  popupAddCard.close();
}

const popupAddCard = new PopupWithForm('.popup_place_add', addCardFormHandler);

elementAddButton.addEventListener('click', () => {
  popupAddCard.open();
  popupAddCard.setEventListeners();
  formAdd.resetFormFields();
  formAdd.toggleSubmitButton();
});

export const popupProfile = new PopupWithForm('.popup_place_edit', submitEditFormHandler);

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupProfile.open();
  popupProfile.setEventListeners();
  formEdit.resetFormFields();
  formEdit.toggleSubmitButton();
});

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

const formEdit = new FormValidator(formConfig, profileEditForm);
formEdit.enableValidation();

const formAdd = new FormValidator(formConfig, profileEditFormAdd);
formAdd.enableValidation();


