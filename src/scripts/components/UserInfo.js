export class UserInfo {
  constructor({ usernameSelector, infoSelector, avatarSelector }) {
    this._userName = document.querySelector(usernameSelector);
    this._userInfo = document.querySelector(infoSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._user = { username: this._userName.textContent, jobInfo: this._userInfo.textContent };
    return this._user;
  }

  setUserInfo(name, info) {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }

}
