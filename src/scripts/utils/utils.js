import { popupImage } from "../../pages/index.js";

export function handleCardClick(link, name) {
  popupImage.open(link, name);
  popupImage.setEventListeners();
}
