import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._inputs = this._popupElement.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement = this._popupElement.querySelector('.popup__content');
    this._formElement.addEventListener('submit', (evt) => this._submitFormHandler(evt, this._getInputValues()));
  }

  setInputValues(data) {
        this._inputs.forEach(input => {
      input.value = data[input.name];
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }

}
