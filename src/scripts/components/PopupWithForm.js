import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
  }

  _getInputValues() {
    this._inputs = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    return this._inputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement = this._popupElement.querySelector('.popup__content');
    this._formElement.addEventListener('submit', (evt) => this._submitFormHandler(evt, this._getInputValues()));
  }

  close() {
    this._formElement.reset();
    super.close();
  }

}
