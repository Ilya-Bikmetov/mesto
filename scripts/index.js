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
const nameInput = document.querySelector('.popup__input_editform_name');
const jobInput = document.querySelector('.popup__input_editform_job');
const placeInput = document.querySelector('.popup__input_addform_placename');
const placeLink = document.querySelector('.popup__input_addform_link');
const profileEditForm = document.querySelector('.popup__content');
const profileEditFormAdd = document.querySelector('.popup__content_form_add');
const buttonClosePic = document.querySelector('.popup__close_form_img');
const popupImage = document.querySelector('.popup__img');
const popupImageSign = document.querySelector('.popup__img-sign');

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

buttonEditProfile.addEventListener('click', () => {
  openPopup(elementPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
elementAddButton.addEventListener('click', () => openPopup(elementPopupAdd));
buttonCloseEditForm.addEventListener('click', () => closePopup(elementPopup));
buttonCloseAddForm.addEventListener('click', () => {
  closePopup(elementPopupAdd);
  placeInput.value = '';
  placeLink.value = '';
});
buttonClosePic.addEventListener('click', () => closePopup(elementPopupImg));


function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(elementPopup);
}

function createFormHandler(evt) {
  evt.preventDefault();
  const itemCard = [];
  itemCard.name = placeInput.value;
  itemCard.link = placeLink.value;
  const elementInputCard = getElement(itemCard);
  listElements.prepend(elementInputCard);
  placeInput.value = '';
  placeLink.value = '';
  closePopup(elementPopupAdd);
}

profileEditForm.addEventListener('submit', submitFormHandler);
profileEditFormAdd.addEventListener('submit', createFormHandler);

function addCards() {
  const listInitialCards = initialCards.map(getElement);
  listElements.append(...listInitialCards);
}

function addLike(evt) {
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
  cardElementLike.addEventListener('click', addLike);
  cardElementTrash.addEventListener('click', deleteCard);
  cardElementImage.addEventListener('click', () => openPopupImg(cardElementImage, cardElementTitle));
  return cardElement;
}

addCards();
