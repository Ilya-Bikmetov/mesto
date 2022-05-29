import { handleCardClick } from "../utils/utils.js"

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  generateCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    this._photo = this._cardElement.querySelector('.element__photo');
    this._title = this._cardElement.querySelector('.element__title');
    this._photo.src = this._link;
    this._photo.alt = this._name;
    this._title.textContent = this._name;
    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like').addEventListener('click', this._toggleLike);
    this._cardElement.querySelector('.element__trash').addEventListener('click', () => this._deleteCard());
    this._photo.addEventListener('click', () => handleCardClick(this._link, this._name));
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._cardElement.remove();
  }

}

export function createCard(cardData, cardSelector) {
  const card = new Card(cardData, cardSelector);
  return card.generateCard();
}
