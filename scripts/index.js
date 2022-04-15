const editButtonLink = document.querySelector('.profile__edit-button');
const elementPopup = document.querySelector('.popup');
const elementPopupAdd = document.querySelector('.popup_place_add');
const elementPopupImg = document.querySelector('.popup_place_img');
const closeButtonLink = document.querySelector('.popup__close');
const popupAddСloseButton = document.querySelector('.popup__close_form_add');
const elementAddButton = document.querySelector('.profile__add-button');
const elementBody = document.querySelector('.root');
const templateCard = document.querySelector('.templateCard');
const elementsList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const placeInput = document.querySelector('.popup__name_form_add');
const placeLink = document.querySelector('.popup__add-link');
const formElement = document.querySelector('.popup__content');
const formElementAdd = document.querySelector('.popup__content_form_add');

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
  elementPopupAdd.classList.toggle('popup_active');
  elementBody.classList.toggle('root_scroll');
  placeInput.value = 'Название';
  placeLink.value = 'Ссылка на картинку';
}

function popupImg(evt) {
  const element = evt.target.closest('.elements__item');
  const elementimg = element.querySelector('.elements__photo');
  const elementtxt = element.querySelector('.elements__sign');
  const popupImage = document.querySelector('.popup__img');
  const popupImageSign = document.querySelector('.popup__img-sign');
  const buttonClosePic = document.querySelector('.popup__close_form_img');
  popupImage.src = elementimg.src;
  popupImageSign.textContent = elementtxt.textContent;
  elementBody.classList.add('root_scroll');
  elementPopupImg.classList.add('popup_active');
  buttonClosePic.addEventListener('click', function () {
    elementPopupImg.classList.remove('popup_active');
    elementBody.classList.remove('root_scroll');
  });
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
  img.src = placeLink.value;
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

