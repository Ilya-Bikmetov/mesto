export class Card {
  constructor({ name, link, likes, _id }, cardSelector, handleCardClick, { deleteCard, addLike, delLike, isOwner }) {
    this._name = name;
    this._link = link;
    this._amountLikes = likes.length;
    this._cardSelector = cardSelector;
    this._openCardClick = handleCardClick;
    this._confirmDeleteCard = deleteCard;
    this._addLike = addLike;
    this._delLike = delLike;
    this._isOwner = isOwner;
    this._cardId = _id;
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
    this._amountLikesElement = this._cardElement.querySelector('.element__likes-amount');
    this._amountLikesElement.textContent = this._amountLikes;
    if (this._amountLikes !== 0) {
      // this._amountLikesElement = this._cardElement.querySelector('.element__likes-amount');
      // this._amountLikesElement.textContent = this._amountLikes;
      this._amountLikesElement.classList.add('element__likes-amount_active');
    }
    if (!this._isOwner) {
      this._trashElement = this._cardElement.querySelector('.element__trash');
      this._trashElement.remove();
    }
    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('element__like_active')) {
        // this._amountLikes++;
        this._addLike(evt, this._cardId, this._amountLikesElement, this._amountLikes);
      }
      else {
        // this._amountLikes--;
        this._delLike(evt, this._cardId, this._amountLikesElement, this._amountLikes);
      }
      // this._toggleLike(evt);
    });
    if (this._isOwner)
      this._cardElement.querySelector('.element__trash').addEventListener('click', () => {
        this._confirmDeleteCard(this._cardElement, this._cardId);
      });
    this._photo.addEventListener('click', () => this._openCardClick(this._link, this._name));
  }

  toggleLike(evt, likeAmountElement, amountLikes) {
    evt.target.classList.toggle('element__like_active');
    if (amountLikes < 1)
      likeAmountElement.classList.remove('element__likes-amount_active');
    else
      likeAmountElement.classList.add('element__likes-amount_active');
    //   if (evt.target.classList.contains('element__like_active'))
    //     this._amountLikes++;
    //   else
    //     this._amountLikes--;
  }

  deleteCard(cardElement) {
    cardElement.remove();
  }

}
