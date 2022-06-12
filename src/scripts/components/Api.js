export class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
      'Content-type': 'application/json',
      'Authorization': this._token,
    };
  }

  getUser() {
    return fetch(this._url, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok)
          return res.json();

        return Promise.reject(`Возникла ошибка ${res.status}`);
      })
  }

  addUser({ name, about }) {
    const body = {
      name: name,
      about: about,
    };

    return fetch(this._url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok)
          return res.json();

        return Promise.reject(`Возникла ошибка ${res.status}`);
      })
  }

  getInitialCards(url) {
    this._urlCards = url;
    return fetch(this._urlCards, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok)
          return res.json();

        return Promise.reject(`Возникла ошибка ${res.status}`);
      })
  }


}
