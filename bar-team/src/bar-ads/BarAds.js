export class BarAds extends HTMLElement {
    connectedCallback() {
        this.log('connected');
        this.render();
    }

    render() {
        this.innerHTML = `<div>Some ads</div>`;
    }

    disconnectedCallback() {
        this.log('disconnected');
    }

    log(...args) {
        console.log('bar-ads', ...args);
    }
}