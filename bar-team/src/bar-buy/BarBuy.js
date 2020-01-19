export class BarBuy extends HTMLElement {
    static get observedAttributes() {
        return ['price'];
    }

    connectedCallback() {
        const price = this.getAttribute('price');
        this.log('connected', price);
        this.render();
    }

    render() {
        const price = this.getAttribute('price');
        this.innerHTML = `<div>Buy for $${price}</div>`;
    }

    disconnectedCallback() {
        const price = this.getAttribute('price');
        this.log('disconnected', price);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.log('attributeChanged', attr, oldValue, newValue);
        this.render();
    }

    log(...args) {
        console.log('bar-buy', ...args);
    }
}
