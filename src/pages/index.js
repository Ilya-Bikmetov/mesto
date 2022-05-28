import { createCard } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import {
  initialCards,
  formConfig,
  elementBody,
  buttonEditProfile,
  elementPopupEdit,
  elementPopupAdd,
  elementAddButton,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  placeInput,
  placeLink,
  profileEditForm,
  profileEditFormAdd,
  popups,
  cardListSelector
} from "../scripts/utils/constants.js";
export { openPopup }

function closePopup(popup) {
  popup.classList.remove('popup_active');
  elementBody.classList.remove('root_scroll');
  document.removeEventListener('keydown', setEscHandler);
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  elementBody.classList.add('root_scroll');
  document.addEventListener('keydown', setEscHandler);
  if (popup == elementPopupEdit)
    formEdit.resetFormFields();
  if (popup == elementPopupAdd) {
    formAdd.resetFormFields();
    profileEditFormAdd.reset();
  }
}

function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(elementPopupEdit);
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
  profileEditFormAdd.reset();
  closePopup(elementPopupAdd);
}

function setEscHandler(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_active');
    closePopup(popupActive);
  }
}

profileEditForm.addEventListener('submit', submitEditFormHandler);
profileEditFormAdd.addEventListener('submit', addCardFormHandler);
elementAddButton.addEventListener('click', () => {
  openPopup(elementPopupAdd);
  formAdd.toggleSubmitButton();
});

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(elementPopupEdit);
  formEdit.toggleSubmitButton();
});

popups.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popupElement);
    }
  });
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


