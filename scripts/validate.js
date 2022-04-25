const showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add('popup__input_type_error');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add('popup__input-error_active');
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove('popup__input_type_error');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove('popup__input-error_active');
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
}

const toggleSubmitButton = (formElement) => {
  buttonsSubmit.forEach((buttonElement) => {
  buttonElement.disabled = !formElement.checkValidity();
  buttonElement.classList.toggle('popup__btn_disabled', !formElement.checkValidity());
  });
}

const enableValidation = (formElement) => {
  inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleSubmitButton(formElement);
    });
  });
}
