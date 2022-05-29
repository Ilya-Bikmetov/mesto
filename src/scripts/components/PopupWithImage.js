import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupImageSelector, popupImageSignSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(popupImageSelector);
    this._imageSignElement = this._popupElement.querySelector(popupImageSignSelector);
  }

  open(link, name) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageSignElement.textContent = name;
    super.open();
  }

}
