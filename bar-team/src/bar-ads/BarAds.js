export class BarAds extends HTMLElement {
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
        console.log('bar-ads', ...args);
    }
}

export function render() {
    return `<div>Some ads</div>`;
}