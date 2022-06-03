export class UserInfo {
  constructor({ username, info }) {
    this._userName = document.querySelector(username);
    this._userInfo = document.querySelector(info);
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
