import { PopupWithImage } from "../components/PopupWithImage.js";

const popupImage = new PopupWithImage('.popup_place_img', '.popup__img', '.popup__img-sign');

export function handleCardClick(link, name) {
  popupImage.open(link, name);
  popupImage.setEventListeners();
}
