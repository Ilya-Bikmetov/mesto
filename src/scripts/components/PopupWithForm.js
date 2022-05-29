import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
  }

  // _getInputValues() {
  //   this._inputs = this._popupElement.querySelectorAll('.popup__input');

  // }

  setEventListeners() {
    super.setEventListeners();
    this._formElement = this._popupElement.querySelector('.popup__content');
    this._formElement.addEventListener('submit', this._submitFormHandler);

  }

  close() {
    this._formElement.reset();
    super.close();
  }

}
