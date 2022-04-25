const buttonEditProfile = document.querySelector('.profile__edit-button');
const elementPopup = document.querySelector('.popup');
const elementPopupAdd = document.querySelector('.popup_place_add');
const elementPopupImg = document.querySelector('.popup_place_img');
const buttonCloseEditForm = document.querySelector('.popup__close');
const buttonCloseAddForm = document.querySelector('.popup__close_form_add');
const elementAddButton = document.querySelector('.profile__add-button');
const elementBody = document.querySelector('.root');
const templateCard = document.querySelector('#template-сard');
const listElements = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_edit-form_name');
const jobInput = document.querySelector('.popup__input_edit-form_job');
const placeInput = document.querySelector('.popup__input_add-form_placename');
const placeLink = document.querySelector('.popup__input_add-form_link');
const profileEditForm = document.querySelector('.popup__content');
const profileEditFormAdd = document.querySelector('.popup__content_form_add');
const buttonClosePic = document.querySelector('.popup__close_form_img');
const popupImage = document.querySelector('.popup__img');
const popupImageSign = document.querySelector('.popup__img-sign');
const popupProfileBtn = document.querySelector('.popup__btn');

function closePopup(elem) {
  elem.classList.remove('popup_active');
  elementBody.classList.remove('root_scroll');
}

function openPopup(elem) {
  elem.classList.add('popup_active');
  elementBody.classList.add('root_scroll');
}

function openPopupImg(img, imgSign) {
  popupImage.src = img.src;
  popupImage.alt = img.alt;
  popupImageSign.textContent = imgSign.textContent;
  openPopup(elementPopupImg);
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(elementPopup);
}

function createFormHandler(evt) {
  evt.preventDefault();
  const elementInputCard = getElement({ name: placeInput.value, link: placeLink.value });
  listElements.prepend(elementInputCard);
  placeInput.value = '';
  placeLink.value = '';
  closePopup(elementPopupAdd);
}

function addCards() {
  const listInitialCards = initialCards.map(getElement);
  listElements.append(...listInitialCards);
}

function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active')
}

function deleteCard(evt) {
  const element = evt.target.closest('.element');
  element.remove();
}

function getElement(item) {
  const cardElement = templateCard.content.cloneNode(true);
  const cardElementTitle = cardElement.querySelector('.element__title');
  const cardElementImage = cardElement.querySelector('.element__photo');
  const cardElementLike = cardElement.querySelector('.element__like');
  const cardElementTrash = cardElement.querySelector('.element__trash');
  cardElementImage.src = item.link;
  cardElementImage.alt = item.name;
  cardElementTitle.textContent = item.name;
  cardElementLike.addEventListener('click', toggleLike);
  cardElementTrash.addEventListener('click', deleteCard);
  cardElementImage.addEventListener('click', () => openPopupImg(cardElementImage, cardElementTitle));
  return cardElement;
}

function resetFormFields(formElement) {
  inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });
}

profileEditForm.addEventListener('submit', submitFormHandler);
profileEditFormAdd.addEventListener('submit', createFormHandler);
elementAddButton.addEventListener('click', () => openPopup(elementPopupAdd));
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(elementPopup);
});

buttonCloseEditForm.addEventListener('click', () => {
  closePopup(elementPopup);
  resetFormFields(profileEditForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonCloseAddForm.addEventListener('click', () => {
  closePopup(elementPopupAdd);
  resetFormFields(profileEditFormAdd);
  placeInput.value = '';
  placeLink.value = '';
});

buttonClosePic.addEventListener('click', () => closePopup(elementPopupImg));
setEventListeners(profileEditForm);
setEventListeners(profileEditFormAdd);

addCards();
