import { PopupWithImage } from "../components/PopupWithImage.js";

export function handleCardClick(link, name) {
  const popupImage = new PopupWithImage('.popup_place_img', '.popup__img', '.popup__img-sign');
  popupImage.open(link, name);
  popupImage.setEventListeners();
}
