import { buttonsSubmit, profileEditFormAdd, deleteSubmitBtnDisabeld } from "./index.js"
export class FormValidator {
  constructor(formConfig, formElement) {
    this._formSelector = formConfig.formSelector;
    this._inputSelector = formConfig.inputSelector;
    this._submitButtonSelector = formConfig._submitButtonSelector;
    this._inactiveButtonClass = formConfig.inactiveButtonClass;
    this._inputErrorClass = formConfig.inputErrorClass;
    this._errorClass = formConfig.errorClass;
    this._formElement = formElement;
  }

  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._inputList.forEach((inputElement) => {
      // this._inputElement = inputElement;
      inputElement.addEventListener('input', () => {
        this._inputElement = inputElement;
        this._isValid();
        this.toggleSubmitButton();
      });
    });
  }

  _isValid() {
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    }
    else {
      this._hideInputError();
    }
  }

  _showInputError() {
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
    this._errorElement.classList.add(this._errorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
  }

  _hideInputError() {
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
    this._errorElement.classList.remove(this._errorClass);
  }

  toggleSubmitButton() {
    buttonsSubmit.forEach((buttonElement) => {
      buttonElement.disabled = !this._formElement.checkValidity();
      buttonElement.classList.toggle(this._inactiveButtonClass, !this._formElement.checkValidity());
    });
  }

  resetFormFields() {
    // const inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    // this._inputList.forEach((inputElement) => {
    //   this._inputElement = inputElement;
    //   this._hideInputError();
    // });
    this._hideInputError();
    deleteSubmitBtnDisabeld();
    if (this._formElement.classList.contains('popup__content_form_add')) {
      profileEditFormAdd.reset();
    }
  }


}
