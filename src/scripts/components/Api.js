export class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok)
      return res.json();

    return Promise.reject(`Возникла ошибка ${res.status}`);

  }

  getUser(url) {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  addUser({ name, about }, url) {
    const body = {
      name,
      about,
    };
    return fetch(`${this._baseUrl}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  getInitialCards(url) {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  setAvatar(url, urlAvatar) {
    const body = {
      avatar: urlAvatar
    }
    return fetch(`${this._baseUrl}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  addCard(name, link, url) {
    const body = {
      name,
      link,
    };
    return fetch(`${this._baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  deleteCard(url) {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  addLike(url) {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  deleteLike(url) {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

}
