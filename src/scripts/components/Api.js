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

  addCard(name, link) {
    const body = {
      name: name,
      link: link,
    };

    return fetch(this._urlCards, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok)
          return res.json();

        return Promise.reject(`Возникла ошибка ${res.status}`);
      })
  }

  deleteCard(url, id) {
    console.log(url);
    console.log(id);
    console.log(url + id);
    return fetch(url + id, {
      method: 'DELETE',
      'Authorization': this._token,
    })
      // .then((res) => {
      //   if (res.ok)
      //     return res.json();

      //   return Promise.reject(`Возникла ошибка ${res.status}`);
      // })
  }


}
