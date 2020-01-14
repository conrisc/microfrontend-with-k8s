const $app = document.getElementById('app');
$app.innerHTML = `
    <p>This is foo-team!</p>
    <bar-item>
        <!--#include virtual="/bar-item" -->
    </bar-item>
`;

// window.addEventListener('popstate', () => {
//   rerender(window.location.pathname.substr(1));
// });
