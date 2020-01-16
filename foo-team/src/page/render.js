const options = [
    'white',
    'black',
    'blue',
    'yellow'
];

function renderOption(option) {
    return `
        <a href="/${option}" type="button" color="${option}">
            ${option}
        </a>
    `;
}

export function render() {
    return `
        <p>This is foo-team!</p>
        <div id="options">
            ${options.map(renderOption).join('')}
        </div>
        <bar-item>
            <!--#include virtual="/bar-item" -->
        </bar-item>
    `;
}