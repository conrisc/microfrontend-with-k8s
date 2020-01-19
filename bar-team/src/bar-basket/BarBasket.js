export class BarBasket extends HTMLElement {
    connectedCallback() {
        this.log('connected');
        this.render();
    }

    render() {
        this.innerHTML = render();
    }

    disconnectedCallback() {
        this.log('disconnected');
    }

    log(...args) {
        console.log('bar-basket', ...args);
    }
}

export function render() {
    return `<div>Items in basket: IDK</div>`;
}