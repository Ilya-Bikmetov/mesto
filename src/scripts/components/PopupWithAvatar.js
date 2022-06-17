import { Popup } from "./Popup.js";

export class PopupWithAvatar extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement = this._popupElement.querySelector('.popup__content');
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }
}
