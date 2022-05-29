import { elementBody } from "../utils/constants.js";
export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);

  }

  open() {
    this._popupElement.classList.add('popup_active');
    elementBody.classList.add('root_scroll');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupElement.classList.remove('popup_active');
    elementBody.classList.remove('root_scroll');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
}
