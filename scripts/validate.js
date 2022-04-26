const showInputError = (config, inputElement, errorMessage) => {
  inputElement.classList.add(config.inputErrorClass);
  const errorElement = config.formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (config, inputElement) => {
  inputElement.classList.remove(config.inputErrorClass);
  const errorElement = config.formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(config.errorClass);
}

const isValid = (config, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(config, inputElement);
  }
}

const toggleSubmitButton = (config) => {
  buttonsSubmit.forEach((buttonElement) => {
  buttonElement.disabled = !config.formElement.checkValidity();
  buttonElement.classList.toggle(config.inactiveButtonClass, !config.formElement.checkValidity());
  });
}

const enableValidation = (config) => {
  inputList = Array.from(config.formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(config, inputElement);
      toggleSubmitButton(config);
    });
  });
}
