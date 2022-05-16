import { openPopup } from "./index.js";
export { openPopupImg }

const popupImage = document.querySelector('.popup__img');
const popupImageSign = document.querySelector('.popup__img-sign');
const elementPopupImg = document.querySelector('.popup_place_img');

function openPopupImg(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageSign.textContent = name;
  openPopup(elementPopupImg);
}
