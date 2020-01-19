const cars = [
    {
        id: 1,
        name: 'Ford Focus RS',
        image: '/foo/images/ford.jpg',
        price: 55000
    },
    {
        id: 2,
        name: 'Pagani Huayra',
        image: '/foo/images/pagani.jpg',
        price: 390000
    },
    {
        id: 3,
        name: 'Aston Martin Vantage',
        image: '/foo/images/aston.jpg',
        price: 149995
    }
]

function renderOption(option) {
    return `
        <a href="/${option.id}" type="button" option="${option.id}">
            <img class="thumbnail" src="${option.image}" />
        </a>
    `;
}

function renderCar(car) {
    return `
        <div class="container">
            <img src="${car.image}" />
            <div class="p-2">
                <h5>${car.name}</h5>
                <div id="options">
                    ${cars.map(renderOption).join('')}
                </div>
                <bar-buy price="${car.price}">
                    <!--#include virtual="/bar-buy?price=${encodeURIComponent(car.price)}" -->
                </bar-buy>
            </div>
        </div>
    `;
}

export function render(option = 1) {
    const car = cars.find(car => car.id === option) || cars[0];
    return `
        <div class="container">
            <div class="w-main m-2 bg-2 p-2">
                <h3>The foo store</h3>
                <bar-basket>
                    <!--#include virtual="/bar-basket" -->
                </bar-basket>
                ${renderCar(car)}
            </div>
            <div class="w-sidebar m-2 bg-2 p-2">
                <bar-ads></bar-ads>
            </div>
        </div>
    `;
}