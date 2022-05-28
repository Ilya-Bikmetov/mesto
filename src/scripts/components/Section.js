export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  addItem(element, position) {
    if (position == 'start')
      this._container.prepend(element);
    else
      this._container.append(element);

  }

}
