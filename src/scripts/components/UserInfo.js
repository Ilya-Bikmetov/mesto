export class UserInfo {
  constructor({ usernameSelector, infoSelector, avatarElement }) {
    this._userName = document.querySelector(usernameSelector);
    this._userInfo = document.querySelector(infoSelector);
    this._userAvatar = avatarElement;
  }

  getUserInfo() {
    this._user = { username: this._userName.textContent, jobInfo: this._userInfo.textContent };
    return this._user;
  }

  setUserInfo(name, info, avatar) {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
    this._userAvatar.src = avatar;
  }

}
