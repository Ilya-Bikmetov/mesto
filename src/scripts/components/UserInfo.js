export class UserInfo {
  constructor({ usernameSelector, infoSelector }) {
    this._userName = document.querySelector(usernameSelector);
    this._userInfo = document.querySelector(infoSelector);
  }

  getUserInfo() {
    this._user = {
      username: this._userName.textContent,
      jobInfo: this._userInfo.textContent,
      avatar: this._avatar,
      id: this.userId,
      avatarElement: this._avatarElement
    };
    return this._user;
  }

  setUserInfo({ name, info, avatar, avatarElement, id }) {
    this.changeUserInfo({ name, info });
    this.userId = id;
    this._avatar = `url(${avatar})`;
    this._avatarElement = avatarElement;
    this._avatarElement.style.backgroundImage = this._avatar;
  }

  changeUserInfo({ name, info }) {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }

  changeAvatar(url) {
    this._avatarElement.style.backgroundImage = `url(${url})`;
  }
}
