export class Card {
  constructor({name, link}, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._openCardClick = handleCardClick;
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
    this._photo.addEventListener('click', () => this._openCardClick(this._link, this._name));
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._cardElement.remove();
  }

}
