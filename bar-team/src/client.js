class BarItem extends HTMLElement {

  connectedCallback() {
    this.log('connected');
    this.render();
  }

  render() {
    this.innerHTML = `<div class="sth">BarItem: Nice item</div>`;
  }

  disconnectedCallback() {
    this.log('disconnected');
  }

  log(...args) {
    console.log('bar-item', ...args);
  }
}

window.customElements.define('bar-item', BarItem);
