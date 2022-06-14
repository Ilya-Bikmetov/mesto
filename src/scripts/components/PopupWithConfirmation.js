import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, btnConfirmIdSelector) {
    super(popupSelector);
    this._confirmButton = document.getElementById(btnConfirmIdSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('submit', (evt) => {
      // evt.preventDefault();
      this._submitHandler(evt);
    });
  }

  setSubmitHandler(submitHandler) {
    this._submitHandler = submitHandler;
  }
}
