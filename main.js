(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=e.name,u=e.link,c=e.likes,a=e._id,s=o.deleteCard,l=o.addLike,f=o.delLike,p=o.cardOwner,h=o.cardHasLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i,this._link=u,this._amountLikes=c.length,this._cardSelector=n,this._openCardClick=r,this._confirmDeleteCard=s,this._addLike=l,this._delLike=f,this._cardOwner=p,this._cardId=a,this._cardLiked=h}var n,r;return n=t,(r=[{key:"generateCard",value:function(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this._photo=this._cardElement.querySelector(".element__photo"),this._title=this._cardElement.querySelector(".element__title"),this._photo.src=this._link,this._photo.alt=this._name,this._title.textContent=this._name,this._amountLikesElement=this._cardElement.querySelector(".element__likes-amount"),this._amountLikesElement.textContent=this._amountLikes,0!==this._amountLikes&&this._amountLikesElement.classList.add("element__likes-amount_active"),this._cardOwner||this._cardElement.querySelector(".element__trash").remove(),this._cardLiked&&this._cardElement.querySelector(".element__like").classList.add("element__like_active"),this._setEventListeners(),this._cardElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.querySelector(".element__like").addEventListener("click",(function(t){t.target.classList.contains("element__like_active")?e._delLike(t,e._cardId,e._amountLikesElement):e._addLike(t,e._cardId,e._amountLikesElement)})),this._cardOwner&&this._cardElement.querySelector(".element__trash").addEventListener("click",(function(){e._confirmDeleteCard(e._cardElement,e._cardId)})),this._photo.addEventListener("click",(function(){return e._openCardClick(e._link,e._name)}))}},{key:"toggleLike",value:function(e,t,n,r){"like"==r?e.target.classList.add("element__like_active"):e.target.classList.remove("element__like_active"),n<1?t.classList.remove("element__likes-amount_active"):t.classList.add("element__likes-amount_active")}},{key:"deleteCard",value:function(e){e.remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._inputElement=t,e._isValid(),e.toggleSubmitButton()}))}))}},{key:"_isValid",value:function(){this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_showInputError",value:function(){this._inputElement.classList.add(this._inputErrorClass),this._errorElement=this._formElement.querySelector("#".concat(this._inputElement.id,"-error")),this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=this._inputElement.validationMessage}},{key:"_hideInputError",value:function(){this._inputElement.classList.remove(this._inputErrorClass),this._errorElement=this._formElement.querySelector("#".concat(this._inputElement.id,"-error")),this._errorElement.classList.remove(this._errorClass)}},{key:"toggleSubmitButton",value:function(){this._submitButton.disabled=!this._formElement.checkValidity(),this._submitButton.classList.toggle(this._inactiveButtonClass,!this._formElement.checkValidity())}},{key:"resetFormFields",value:function(){var e=this;this._inputList.forEach((function(t){e._inputElement=t,e._hideInputError()})),this.toggleSubmitButton()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},i=document.querySelector(".root"),u=document.querySelector(".profile__edit-button"),c=(document.querySelector(".popup_place_edit"),document.querySelector(".popup_place_add"),document.querySelector(".profile__add-button")),a=document.querySelector(".popup__content"),s=document.querySelector(".popup__content_form_add"),l=document.querySelector(".popup__content_form_avatar"),f=(document.querySelectorAll(".popup"),document.querySelector(".popup__img"),document.querySelector(".popup__img-sign"),document.querySelector(".popup_place_img"),document.querySelector(".profile__avatar"));function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_active"),i.classList.remove("root_scroll"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitFormHandler=t,n._inputs=n._popupElement.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;d(E(u.prototype),"setEventListeners",this).call(this),this._formElement=this._popupElement.querySelector(".popup__content"),this._formElement.addEventListener("submit",(function(t){return e._submitFormHandler(t,e._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){this._formElement.reset(),d(E(u.prototype),"close",this).call(this)}},{key:"changeSubmitBtnActionName",value:function(e){var t=this;this._submitButtonElement=this._formElement.querySelector(".popup__btn"),this._submitButtonDefaultName=this._submitButtonElement.textContent,this._submitButtonElement.textContent=e,setTimeout((function(){return t._submitButtonElement.textContent=t._submitButtonDefaultName}),1e3)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function j(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._imageElement=r._popupElement.querySelector(t),r._imageSignElement=r._popupElement.querySelector(n),r}return t=u,(n=[{key:"open",value:function(e,t){this._imageElement.src=e,this._imageElement.alt=t,this._imageSignElement.textContent=t,w(C(u.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function x(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;I(A(u.prototype),"setEventListeners",this).call(this),this._formElement=this._popupElement.querySelector(".popup__content"),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler()}))}},{key:"setSubmitHandler",value:function(e){this._submitHandler=e}},{key:"changeSubmitBtnActionName",value:function(e){var t=this;this._submitButtonElement=this._formElement.querySelector(".popup__btn"),this._submitButtonDefaultName=this._submitButtonElement.textContent,this._submitButtonElement.textContent=e,setTimeout((function(){return t._submitButtonElement.textContent=t._submitButtonDefaultName}),1e3)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this.items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e,t){"start"==t?this._container.prepend(e):this._container.append(e)}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){var n=t.usernameSelector,r=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={username:this._userName.textContent,jobInfo:this._userInfo.textContent},this._user}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._token=n,this._headers={"Content-type":"application/json",Authorization:this._token}}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch(this._url,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}},{key:"addUser",value:function(e){var t={name:e.name,about:e.about};return fetch(this._url,{method:"PATCH",body:JSON.stringify(t),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}},{key:"getInitialCards",value:function(e){return this._urlCards=e,fetch(this._urlCards,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}},{key:"setAvatar",value:function(e,t){var n={avatar:t};return fetch(e,{method:"PATCH",body:JSON.stringify(n),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}},{key:"addCard",value:function(e,t){var n={name:e,link:t};return fetch(this._urlCards,{method:"POST",body:JSON.stringify(n),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}},{key:"deleteCard",value:function(e,t){return fetch(e+t,{method:"DELETE",headers:{Authorization:this._token}})}},{key:"addLike",value:function(e){return fetch(e,{method:"PUT",headers:{Authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch(e,{method:"DELETE",headers:{Authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка ".concat(e.status))}))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),J=new P(".popup_place_img",".popup__img",".popup__img-sign");J.setEventListeners();var M=new k(".popup_place_edit",(function(e,t){var n=t.jobInfo,r=t.username;e.preventDefault(),M.changeSubmitBtnActionName("Сохранение..."),$.addUser({about:n,name:r}).catch((function(e){return console.log(e)})),Z.setUserInfo(r,n),M.close()}));M.setEventListeners();var G=new k(".popup_place_add",(function(e,t){var n=t.placename,r=t.imgLink;e.preventDefault(),G.changeSubmitBtnActionName("Сохранение..."),$.addCard(n,r).then((function(e){var t=ne({name:n,link:r,likes:e.likes,_id:e._id},"#template-сard",!0,!1);ee.addItem(t,"start")})).catch((function(e){return console.log(e)})),G.close()}));G.setEventListeners();var K=new k(".popup_avatar",(function(e,t){var n=t.avatarLink;e.preventDefault(),K.changeSubmitBtnActionName("Сохранение..."),$.setAvatar("https://mesto.nomoreparties.co/v1/cohort-43/users/me/avatar",n).then((function(e){f.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){return console.log(e)})),K.close()}));K.setEventListeners();var Q=new D(".popup_delete_card");Q.setEventListeners();var W=new r(o,a);W.enableValidation();var X=new r(o,s);X.enableValidation();var Y=new r(o,l);Y.enableValidation();var Z=new F({usernameSelector:".profile__title",infoSelector:".profile__subtitle"}),$=new z("https://nomoreparties.co/v1/cohort-43/users/me","6c4179cf-c3ec-4b62-8222-3e29a4a7f86c"),ee=new V({items:{},renderer:function(e){var t=Z.getUserInfo(),n=e.owner.name===t.username,r=e.likes.some((function(e){return e.name===t.username})),o=ne(e,"#template-сard",n,r);ee.addItem(o,"end")}},".elements__list");function te(e,t){J.open(e,t)}function ne(e,n,r,o){var i=new t(e,n,te,{deleteCard:function(e,t){Q.open(),Q.setSubmitHandler((function(){Q.changeSubmitBtnActionName("Удаление..."),$.deleteCard("https://mesto.nomoreparties.co/v1/cohort-43/cards/",t).then((function(t){if(!t.ok)return Promise.reject("Возникла ошибка ".concat(t.status));i.deleteCard(e),Q.close()})).catch((function(e){return console.log(e)}))}))},addLike:function(e,t,n){$.addLike("https://mesto.nomoreparties.co/v1/cohort-43/cards/".concat(t,"/likes")).then((function(t){n.textContent=t.likes.length,i.toggleLike(e,n,t.likes.length,"like")})).catch((function(e){return console.log(e)}))},delLike:function(e,t,n){$.deleteLike("https://mesto.nomoreparties.co/v1/cohort-43/cards/".concat(t,"/likes")).then((function(t){n.textContent=t.likes.length,i.toggleLike(e,n,t.likes.length,"empty")})).catch((function(e){return console.log(e)}))},cardOwner:r,cardHasLike:o});return i.generateCard()}$.getUser().then((function(e){Z.setUserInfo(e.name,e.about),f.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){return console.log(e)})),Promise.all([$.getUser()]).then((function(){$.getInitialCards("https://mesto.nomoreparties.co/v1/cohort-43/cards").then((function(e){ee.items=e,ee.renderItems()})).catch((function(e){return console.log(e)}))})),c.addEventListener("click",(function(){G.open(),X.resetFormFields(),X.toggleSubmitButton()})),u.addEventListener("click",(function(){var e=Z.getUserInfo();M.setInputValues(e),M.open(),W.resetFormFields(),W.toggleSubmitButton()})),f.addEventListener("click",(function(){K.open(),Y.resetFormFields()}))})();
//# sourceMappingURL=main.js.map