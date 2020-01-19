import { render } from './render';

export class BarBuy extends HTMLElement {
    static get observedAttributes() {
        return ['price'];
    }

    connectedCallback() {
        this.addItem = this.addItem.bind(this);
        const price = this.getAttribute('price');
        this.log('connected', price);
        this.render();
        this.firstChild.addEventListener('click', this.addItem);
    }

    render() {
        const price = this.getAttribute('price');
        this.innerHTML = render(price);
    }

    disconnectedCallback() {
        this.firstChild.removeEventListener('click', this.addItem);
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

    addItem() {
        const price = Number(this.getAttribute('price'));
        this.log('event sent "bar:basket:addItem"');
        this.dispatchEvent(new CustomEvent('bar:basket:addItem', {
            bubbles: true,
            detail: { price }
        }));
    }
}
