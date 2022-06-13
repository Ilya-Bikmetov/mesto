export class Card {
  constructor({ name, link, likes }, cardSelector, handleCardClick, { deleteCard }) {
    this._name = name;
    this._link = link;
    this._amountLikes = likes.length;
    this._cardSelector = cardSelector;
    this._openCardClick = handleCardClick;
    this._confirmDeleteCard = deleteCard;
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
    if (this._amountLikes !== 0) {
      this._amountLikesElement = this._cardElement.querySelector('.element__likes-amount');
      this._amountLikesElement.textContent = this._amountLikes;
      this._amountLikesElement.classList.add('element__likes-amount_active');
    }
    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });
    this._cardElement.querySelector('.element__trash').addEventListener('click', () => {
      this._confirmDeleteCard(this._cardElement);
    });
    this._photo.addEventListener('click', () => this._openCardClick(this._link, this._name));
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');

    if (evt.target.classList.contains('element__like_active'))
      this._amountLikes++;
    else
      this._amountLikes--;
  }

  deleteCard(cardElement) {
    cardElement.remove();
  }

}
