import { render } from './render';

window.totalPrice = 0;

export class BarBasket extends HTMLElement {
    connectedCallback() {
        this.refresh = this.refresh.bind(this);
        this.log('connected');
        this.render();
        window.addEventListener('bar:basket:addItem', this.refresh);
    }

    render() {
        this.innerHTML = render(window.totalPrice);
    }

    disconnectedCallback() {
        window.removeEventListener('bar:basket:addItem', this.refresh);
        this.log('disconnected');
    }

    log(...args) {
        console.log('bar-basket', ...args);
    }

    refresh(event) {
        this.log('event recieved "bar:basket:addItem"');
        window.totalPrice += event.detail.price;
        this.render();
    }
}
