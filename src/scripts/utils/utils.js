import { openPopup } from "../../pages/index.js";
export { openPopupImg }
import { popupImage, popupImageSign, elementPopupImg } from "./constants.js";

function openPopupImg(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageSign.textContent = name;
  openPopup(elementPopupImg);
}
