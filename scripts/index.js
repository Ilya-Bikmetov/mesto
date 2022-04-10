const editButtonLink = document.querySelector('.profile__edit-button');
const elementPopup = document.querySelector('.popup');
const closeButtonLink = document.querySelector('.popup__close');
const elementLikeList = document.querySelectorAll('.elements__like');
const saveButtonLink = document.querySelector('.popup__save');
const elementBody = document.querySelector('.root');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let formElement = document.querySelector('.popup__content');

function popupAddClass() {
  elementPopup.classList.toggle('popup_active');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  elementBody.classList.toggle('root_scroll');
}

editButtonLink.addEventListener('click', popupAddClass);
closeButtonLink.addEventListener('click', popupAddClass);

for (let i = 0; i < elementLikeList.length; i++) {
  elementLikeList[i].addEventListener('click', function () {
    elementLikeList[i].classList.toggle('elements__like_active');
  });
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupAddClass();
}

formElement.addEventListener('submit', formSubmitHandler);

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

const templateCard = document.querySelector('.templateCard');
const elementsList = document.querySelector('.elements__list');

function placeCard() {
  const html = initialCards.map(getElement);
  elementsList.append(...html);
}

function getElement(item) {
  const getElementTemplateCard = templateCard.content.cloneNode(true);
  const title = getElementTemplateCard.querySelector('.elements__title');
  const img = getElementTemplateCard.querySelector('.elements__photo');
  img.src = item.link;
  img.alt = item.name;
  title.textContent = item.name;
  return getElementTemplateCard;
}

placeCard();

