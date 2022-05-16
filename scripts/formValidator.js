export class FormValidator {
  constructor(formConfig, formElement) {
    this._formSelector = formConfig.formSelector;
    this._inputSelector = formConfig.inputSelector;
    this._submitButtonSelector = formConfig.submitButtonSelector;
    this._inactiveButtonClass = formConfig.inactiveButtonClass;
    this._inputErrorClass = formConfig.inputErrorClass;
    this._errorClass = formConfig.errorClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._inputList.forEach((inputElement) => {
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
    this._submitButton.disabled = !this._formElement.checkValidity();
    this._submitButton.classList.toggle(this._inactiveButtonClass, !this._formElement.checkValidity());
  }

  resetFormFields() {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      this._hideInputError();
    });
    this._submitButton.classList.remove('popup__btn_disabled');
  }
}
