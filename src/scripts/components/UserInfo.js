export class UserInfo {
  constructor({ userName, info }) {
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(info);
  }

  getUserInfo() {
    this._user = { name: this._userName.textContent, info: this._userInfo.textContent };
    return this._user;
  }

  setUserInfo(name, info) {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }

}
