export class BarItem extends HTMLElement {
    static get observedAttributes() {
        return ['color'];
    }
    connectedCallback() {
        const color = this.getAttribute('color');
        this.log('connected', color);
        this.render();
    }

    render() {
        const color = this.getAttribute('color');
        this.innerHTML = `<div class="sth">BarItem: This item is ${color}</div>`;
    }

    disconnectedCallback() {
        const color = this.getAttribute('color');
        this.log('disconnected', color);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.log('attributeChanged', attr, oldValue, newValue);
        this.render();
    }

    log(...args) {
        console.log('bar-item', ...args);
    }
}