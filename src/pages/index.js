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

function submitEditFormHandler(evt, inputs) {
  evt.preventDefault();
  profileName.textContent = inputs[0].value;
  profileJob.textContent = inputs[1].value;
  popupProfile.close();
}


function addCardFormHandler(evt, inputs) {
  evt.preventDefault();
  const cardElement = createCard({ name: inputs[0].value, link: inputs[1].value }, '#template-сard')
  cardList.addItem(cardElement, 'start');
  popupAddCard.close();
}

const popupAddCard = new PopupWithForm('.popup_place_add', addCardFormHandler);
popupAddCard.setEventListeners();

elementAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formAdd.resetFormFields();
  formAdd.toggleSubmitButton();
});

export const popupProfile = new PopupWithForm('.popup_place_edit', submitEditFormHandler);
popupProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupProfile.open();
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


