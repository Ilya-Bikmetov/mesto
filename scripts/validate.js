const showInputError = (formElement, inputElement) => {
  inputElement.classList.add('popup__input_type_error');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove('popup__input_type_error');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove('popup__input-error_active');
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  }
  else {
    hideInputError(formElement, inputElement);
  }
}

const setEventListeners = (formElement) => {
  inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
    });
  });

}
