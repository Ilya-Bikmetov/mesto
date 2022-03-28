const editButtonLink = document.querySelector('.profile__edit-button');
const elementPopup = document.querySelector('.popup');
const closeButtonLink = document.querySelector('.popup__close');
const elementLikeList = document.querySelectorAll('.elements__like');

function popupAddClass() {
  elementPopup.classList.toggle('popup_active');
}

function likeActive() {
  elementLikeList.classList.toggle('elements__like_active');
}

editButtonLink.addEventListener('click', popupAddClass);
closeButtonLink.addEventListener('click', popupAddClass);
