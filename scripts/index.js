const editButtonLink = document.querySelector('.profile__edit-button');
const elementPopup = document.querySelector('.popup');
const elementPopupAdd = document.querySelector('.popup-add');
const elementPopupImg = document.querySelector('.popup_img');
const closeButtonLink = document.querySelector('.popup__close');
const popupAddСloseButton = document.querySelector('.popup-add__close');
const elementAddButton = document.querySelector('.profile__add-button');
const saveButtonLink = document.querySelector('.popup__save');
const elementBody = document.querySelector('.root');
const templateCard = document.querySelector('.templateCard');
const elementsList = document.querySelector('.elements__list');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let placeInput = document.querySelector('.popup-add__name');
let imgInput = document.querySelector('.popup-add__link');
let placeName = document.querySelector('.popup-add__name');
let placeLink = document.querySelector('.popup-add__link');
let formElement = document.querySelector('.popup__content');
let formElementAdd = document.querySelector('.popup-add__content');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function popupAddClass() {
  elementPopup.classList.toggle('popup_active');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  elementBody.classList.toggle('root_scroll');
}

function popupAddBtn() {
  elementPopupAdd.classList.toggle('popup-add_active');
  elementBody.classList.toggle('root_scroll');
  placeName.value = 'Название';
  placeLink.value = 'Ссылка на картинку';
}

function popupImg(evt) {
  const element = evt.target.closest('.elements__photo');
  const getElementTemplateCard = templateCard.content.cloneNode(true);
  const title = getElementTemplateCard.querySelector('.elements__title');
  const img = getElementTemplateCard.querySelector('.elements__photo');
  const popupImage = document.querySelector('.popup_img');
  const popupImageSign = document.querySelector('.popup__img-sign');
  popupImage.src = img.src;
  console.log(`${popupImage.src}`);
  //popupImageSign.textContent = title.textContent;
  popupImageSign.textContent = 'Подпись';
  console.log(popupImageSign.textContent);
  elementPopupImg.classList.toggle('popup_active');
}

editButtonLink.addEventListener('click', popupAddClass);
closeButtonLink.addEventListener('click', popupAddClass);
elementAddButton.addEventListener('click', popupAddBtn);
popupAddСloseButton.addEventListener('click', popupAddBtn);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupAddClass();
}

function formCreateHandler(evt) {
  evt.preventDefault();
  const getElementTemplateCard = templateCard.content.cloneNode(true);
  const title = getElementTemplateCard.querySelector('.elements__title');
  const img = getElementTemplateCard.querySelector('.elements__photo');
  const like = getElementTemplateCard.querySelector('.elements__like');
  const trash = getElementTemplateCard.querySelector('.elements__trash');
  title.textContent = placeInput.value;
  img.src = imgInput.value;
  like.addEventListener('click', addLike);
  trash.addEventListener('click', deleteCard);
  img.addEventListener('click', popupImg);
  elementsList.prepend(getElementTemplateCard);
}

formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formCreateHandler);

function placeCard() {
  const html = initialCards.map(getElement);
  elementsList.append(...html);
}

function addLike(evt) {
  const element = evt.target.closest('.elements__like');
  element.classList.toggle('elements__like_active');
}

function deleteCard(evt) {
  const element = evt.target.closest('.elements__item');
  element.remove();
}

function getElement(item) {
  const getElementTemplateCard = templateCard.content.cloneNode(true);
  const title = getElementTemplateCard.querySelector('.elements__title');
  const img = getElementTemplateCard.querySelector('.elements__photo');
  const like = getElementTemplateCard.querySelector('.elements__like');
  const trash = getElementTemplateCard.querySelector('.elements__trash');
  img.src = item.link;
  img.alt = item.name;
  title.textContent = item.name;
  like.addEventListener('click', addLike);
  trash.addEventListener('click', deleteCard);
  img.addEventListener('click', popupImg)
  return getElementTemplateCard;
}

placeCard();

