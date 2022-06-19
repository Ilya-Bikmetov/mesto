import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__content');
    this._submitButtonElement = this._formElement.querySelector('.popup__btn');
    this._submitButtonDefaultName = this._submitButtonElement.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();

    });
  }

  setSubmitHandler(submitHandler) {
    this._submitHandler = submitHandler;
  }

  changeSubmitBtnActionName(message) {
    this._submitButtonElement.textContent = message;
  }

  setSubmitBtnTimer() {
    setTimeout(() => this._submitButtonElement.textContent = this._submitButtonDefaultName, 700);
  }
}
