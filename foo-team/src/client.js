import { render } from './page/render';

const $app = document.getElementById('app');

function rerender(option) {
    removeListeners();
    $app.innerHTML = render(option);
    addListeners();
}

function handleClickOption(event) {
  event.preventDefault();
  const option = event.currentTarget.getAttribute('color');
  window.history.pushState(null, null, option);
  rerender(option);
}

function addListeners() {
  const $btns = document.getElementById('options').getElementsByTagName('a');
  Array.prototype.forEach.call($btns, $btn => (
    $btn.addEventListener('click', handleClickOption)
  ));
}

function removeListeners() {
  const $btns = document.getElementById('options').getElementsByTagName('a');
  Array.prototype.forEach.call($btns, $btn => (
    $btn.removeEventListener('click', handleClickOption)
  ));
}

window.addEventListener('popstate', () => {
  rerender(window.location.pathname.substr(1));
});

addListeners();
