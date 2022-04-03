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

