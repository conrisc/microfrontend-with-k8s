export class BarBasket extends HTMLElement {
    connectedCallback() {
        this.log('connected');
        this.render();
    }

    render() {
        this.innerHTML = `<div>Items in basket: IDK</div>`;
    }

    disconnectedCallback() {
        this.log('disconnected');
    }

    log(...args) {
        console.log('bar-basket', ...args);
    }
}