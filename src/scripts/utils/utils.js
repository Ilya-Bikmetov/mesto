import { PopupWithImage } from "../components/PopupWithImage.js";
import { profileName, profileJob, nameInput, jobInput } from "./constants.js";
import { popupProfile } from "../../pages/index.js";

export function handleCardClick(link, name) {
  const popupImage = new PopupWithImage('.popup_place_img', '.popup__img', '.popup__img-sign');
  popupImage.open(link, name);
  popupImage.setEventListeners();
}

export function submitEditFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupProfile.close();
}
