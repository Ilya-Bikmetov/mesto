const showInputError = (config, inputElement, formElement, errorMessage) => {
  inputElement.classList.add(config.inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (inputErrorClass, errorClass, inputElement, formElement) => {
  inputElement.classList.remove(inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
}

const isValid = (config, inputElement, formElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, inputElement, formElement, inputElement.validationMessage);
  }
  else {
    hideInputError(config.inputErrorClass, config.errorClass, inputElement, formElement);
  }
}

const toggleSubmitButton = (inactiveButtonClass, formElement) => {
  buttonsSubmit.forEach((buttonElement) => {
  buttonElement.disabled = !formElement.checkValidity();
  buttonElement.classList.toggle(inactiveButtonClass, !formElement.checkValidity());
  });
}

const setEventListeners = (config, formElement) => {
  inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(config, inputElement, formElement);
      toggleSubmitButton(config.inactiveButtonClass, formElement);
    });
  });
}

const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach((formElement) => {
    setEventListeners(config, formElement);
  });
}
