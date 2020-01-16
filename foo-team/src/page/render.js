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

export function render(color = options[0]) {
    return `
        <p>This is foo-team!</p>
        <div id="options">
            ${options.map(renderOption).join('')}
        </div>
        <bar-item color=${color}>
            <!--#include virtual="/bar-item" -->
        </bar-item>
    `;
}